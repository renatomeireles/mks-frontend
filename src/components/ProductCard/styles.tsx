import styled from "styled-components"


export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 218px;
  height: 285px;
  background-color: var(--secondary);
  border-radius: 8px;
  box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.22);
  -webkit-box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.22);
  -moz-box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.22);

`

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    flex-grow: 1;
`

export const TextContainer = styled.div`
    display: flex;
    width: 100%;
    padding-left: 14px;
`

export const Description = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    font-size: 1rem;
    font-weight: 300;
    line-height: 12px;
    padding-left: 14px;
    color: #2C2C2C;
    margin-top: 8px;
    margin-bottom: 8px;
`

export const Name = styled.div`
    display: flex;
    align-items: center;
    width: 124px;
    height: 38px;
    font-size: 1.6rem;
    font-weight: 400;
`

export const Price = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 26px;
    border-radius: 5px;
    background-color: var(--bg-price);
    color: var(--secondary);
    font-size: 1.5rem;
    font-weight: 700;
`

export const BuyButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    width: 100%;
    height: 31.91px;
    border: none;
    border-radius: 0px 0px 8px 8px;
    background-color: var(--primary);
    color: white;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    &:hover {
        background-color: var(--primary-hover);
    }
`
export const TextButton = styled.span`
    font-size: 1.4rem;
    font-weight: 600;
`