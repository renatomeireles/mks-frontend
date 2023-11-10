import { IProductCart } from "@/interfaces/IProduct";
import { CartProductContainer, Price, RemoveButton, 
    NameProduct, QuantityControl, QuantityTitle, 
    QuantityButton, DecreaseButton, IncreaseButton, 
    Quantity, ContainerBlock } from "./styles";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { removeProductFromCart, increaseQuantityProduct, decreaseQuantityProduct } from "@/redux/cart/slice";

interface CartProductProps {
    product: IProductCart;
    state: IProductCart[];
}

export default function CartProduct(props: CartProductProps) {

    const dispatch = useDispatch();

    const { product } = props;

    const handleRemoveClick = () => {
        dispatch(removeProductFromCart(product.id));
      };
    
      const handleIncreaseClick = () => {
        dispatch(increaseQuantityProduct(product.id));
      }

  

    const handleDecreaseClick = () => {
        dispatch(decreaseQuantityProduct(product.id));
      }


    return (
        <CartProductContainer>
            <RemoveButton onClick={() => handleRemoveClick()}>X</RemoveButton>
            <Image src={product.photo} alt={product.name} width={46} height={46} />
            <NameProduct>
                {product.name}
            </NameProduct>
            <ContainerBlock>
                <QuantityControl>
                    <QuantityTitle>
                        Qtd:
                    </QuantityTitle>
                    <QuantityButton>
                        <DecreaseButton onClick={handleDecreaseClick}> - </DecreaseButton>
                            <Quantity>{product.quantity}</Quantity>
                        <IncreaseButton onClick={handleIncreaseClick}> + </IncreaseButton>
                    </QuantityButton>
                </QuantityControl>
                
                <Price>R${parseInt(product.price)}</Price>
            </ContainerBlock>
        </CartProductContainer>
    )
}