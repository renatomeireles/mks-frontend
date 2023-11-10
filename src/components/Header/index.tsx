'use client'
import { useState } from "react"
import { HeaderCart, HeaderContainer, HeaderLogo, HeaderSubTitle, HeaderTitle } from "./styles"
import Cart from "../Cart"
import Image from "next/image"
import { useSelector } from "react-redux"

interface HeaderProps {
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
    quantityProducts: number
}

export default function Header(props: HeaderProps) {

    
    const [isVisible, setIsVisible] = useState<boolean>(false)

    const products = useSelector((cartReducer : any) => cartReducer.cart.products)

    const productsCount = products.reduce((acc: number, curr: any) => acc + parseInt(curr.quantity), 0)
       
    return (
        <>
            <HeaderContainer>
                <HeaderLogo>
                    <HeaderTitle>MKS</HeaderTitle>
                    <HeaderSubTitle>Sistemas</HeaderSubTitle>
                </HeaderLogo>

                <HeaderCart onClick={() => setIsVisible(true)}>
                    <Image src='/icons/cart.svg' alt="Carrinho" width={19} height={18} />
                    {productsCount || 0}
                </HeaderCart>
                <Cart setIsVisible={setIsVisible} isVisible={isVisible} />
            </HeaderContainer>
        </>
    )
}
