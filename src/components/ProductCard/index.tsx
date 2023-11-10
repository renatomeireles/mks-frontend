'use client'
import Image from "next/image"
import { BuyButton, Description, Name, Price, ProductCard, Container, TextButton, TextContainer } from "./styles"
import { useDispatch } from "react-redux"
import { addProduct } from "@/redux/cart/slice"

interface ProductProps {
    id: number
    name: string
    brand: string
    description: string
    photo: string
    price: string
    createdAt?: string
    updatedAt?: string
}

export default function Product(props: ProductProps) {

    const dispatch = useDispatch()

    const { name, description, photo, price } = props


    const handlerAddProductToCart = (product: ProductProps) => {
        dispatch(addProduct(product))
    }

    return (
        <>
        <ProductCard>
            <Container>
                <Image src={photo} alt={name} width={124} height={124}/>
                <TextContainer>
                    <Name>{name}</Name>
                    <Price>R${parseInt(price)}</Price>
                </TextContainer>
                <Description>{description}</Description>
            </Container>
            <BuyButton onClick={() => handlerAddProductToCart(props)}><Image src='/icons/shop.svg' alt="Shopping" width={19} height={18} /><TextButton>COMPRAR</TextButton></BuyButton>
        </ProductCard>
            
        </>
    )
}
