'use client'
import { ContentContainer } from "./styles"
interface ContentProps {
    children: React.ReactNode
}

export default function Content(props: ContentProps) {
    return (
        <>
            <ContentContainer>
                {props.children}
            </ContentContainer>
        </>
    )
}
