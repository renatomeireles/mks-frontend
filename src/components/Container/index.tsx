'use client'
import { ContainerStyle } from "./styles"
interface ContainerProps {
    children: React.ReactNode
}

export default function Container(props: ContainerProps) {
    return (
        <>
        <ContainerStyle>
            {props.children}
        </ContainerStyle>
            
        </>
    )
}
