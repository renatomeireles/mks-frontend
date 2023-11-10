import {
    CartContainer, CartContent, CartFooter, CheckoutButton,
    CloseButton, EmptyCart, Title, TopContainer, TotalContent
} from "./styles"
import CartProduct from "../CartProduct"
import { IProductCart } from "@/interfaces/IProduct"
import { useSelector } from "react-redux"

interface CartProps {
    isVisible: boolean
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Cart(props: CartProps) {
    
    const { isVisible, setIsVisible } = props

    const { products } = useSelector((state: any) => state.cart);

    const total = products.reduce((acc: number, prod: IProductCart) =>
        acc + parseInt(prod.price) * prod.quantity, 0
    )

    return (
        <CartContainer isVisible={isVisible}>
            <TopContainer>
                <Title>Carrinho de compras</Title>
                <CloseButton onClick={() => setIsVisible(false)}>X</CloseButton>
            </TopContainer>

            {products.length > 0 ?
            (<CartContent>
                {
                    products.map((prod: IProductCart) =>
                        <CartProduct
                            key={prod.id}
                            product={prod}
                            state={products}
                        />
                    )
                }

            </CartContent>)

            :
            (<EmptyCart>Seu carrinho está vazio</EmptyCart>)
        }
            
            <CartFooter>
                <TotalContent>
                    <div>Total:</div>
                    <div>{`R$${total}`}</div>
                </TotalContent>
                <CheckoutButton>Finalizar Compra</CheckoutButton>
            </CartFooter>
        </CartContainer>
    )
}
