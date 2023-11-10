import styled from "styled-components"

export const CartProductContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: .5rem;
    width: 379px;
    height: 95px;
    background: var(--secondary);
    box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    

    @media (max-width: 500px) {
        flex-direction: column;
        justify-content: center;
        gap: 0;
        width: 250px;
        height: 220px;
        padding: 2rem;

        img{
            zoom: 190%;
        }
    }
`

export const NameProduct = styled.div`
    display: flex;
    align-items: center;
    width: 90px;
    height: 33px;
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 1.7rem;
    color: #2C2C2C;

    @media (max-width: 500px) {
        font-size: 1.6rem;
        width: 100%;
        justify-content: center;
        padding: 1rem 0;
    }
`

export const Price = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 62px;
    height: 17px;
    font-size: 14px;
    font-weight: 700;

    @media (max-width: 500px) {
        background-color: var(--bg-price);
        color: var(--secondary);
        font-size: 1.5rem;
        width: 84px;
        height: 34px;
        border-radius: 5px;
        padding: 1rem;
    }
`

export const QuantityControl = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 50px;

    @media (max-width: 500px) {
        width: inherit;
        flex-direction: row;
    }
`

export const QuantityTitle = styled.div`
    width: 11px;
    height: 6px;
    font-size: 0.5rem;
    font-weight: bold;
    margin-bottom: 4px;
    color: #000000;

    @media (max-width: 500px) {
        display: none;
    }
`

export const QuantityButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 19px;
    border: 0.3px solid #BFBFBF;
    border-radius: 4px;

    @media (max-width: 500px) {
        height: 34px;
        width: 94px;
    }
`

export const DecreaseButton = styled.div`
    font-size: 0.8rem;
    font-weight: 400;
    border-right: 0.2px solid #BFBFBF;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    height: 11.5px;
    background-color: transparent;
    cursor: pointer;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;

    @media (max-width: 500px) {
        font-size: 2.2rem;
    }
`

export const IncreaseButton = styled.div`
    font-size: 0.8rem;
    font-weight: 400;
    border-left: 0.2px solid #BFBFBF;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    height: 11.5px;
    background-color: transparent;
    cursor: pointer;

    @media (max-width: 500px) {
        font-size: 2.2rem;
    }
`

export const Quantity = styled.span`
    font-size: 0.8rem;
    font-weight: 400;
    width: 15px;
    text-align: center;

    @media (max-width: 500px) {
        font-size: 2rem;
        width: 30px;
    }
`

export const ContainerBlock = styled.div`
    display: flex;
    align-items: end;
    justify-content: space-around;
    width: 50%;

    @media (max-width: 500px) {
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 150px;
    }
`


export const RemoveButton = styled.div`
    position: relative;
    width: 18px;
    height: 18px;
    border: none;
    font-size: 1.4rem;
    font-weight: 400;
    border-radius: 50%;
    background-color: #000000;
    color: var(--secondary);
    margin-right: -7px;
    margin-bottom: 95px;
    cursor: pointer;  
    display: flex;
    order: 4;
    justify-content: center;
    align-items: center; 
    user-select: none;
    &:hover {
        background-color: var(--bg-hover-close-button);
    }  

    @media (max-width: 500px) {
        order: inherit;
        font-size: 4.2rem;
        color: #000000;
        background-color: transparent;
        right: 0;
        margin-right:-200px;
        margin-bottom: 10px;
    }

`