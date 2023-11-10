import styled from "styled-components"

interface CartProps {
  isVisible: boolean
}

export const CartContainer = styled.div<CartProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  height: 100%;
  width: 486px;
  right: 0;
  bottom: 0;
  top: 0;
  box-shadow: -5px 0px 6px 0px #00000021;
  background-color: var(--primary);
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transform: ${props => (props.isVisible ? "translateX(0%)" : "translateX(110%)")};
  transition: all .5s ease;

  @media (max-width: 500px) {
    width: 320px;
    height: 100%;
  }
`

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 36px 30px 0 50px;

  @media (max-width: 500px) {
    padding: 25px 30px 0 30px;
  }
`

export const Title = styled.div`
  font-size: 2.7rem;
  color: var(--secondary);
  font-weight: 700;
  width: 180px;
`

export const CloseButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 38px;
    height: 38px;
    border: none;
    border-radius: 50%;
    background-color: #000000;
    color: var(--secondary);
    font-size: 2.8rem;
    font-weight: 400;
    user-select: none;
    cursor: pointer;
    &:hover {
        background-color: var(--bg-hover-close-button);
    }  

    @media (max-width: 500px) {
    color: var(--primary);
    width: 45px;
    height: 45px;
    font-size: 4.4rem;
    }
`

export const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 100vh;
  padding: 50px 0;
  gap: 30px;
  overflow: auto;
`

export const EmptyCart = styled.p`
  font-size: 2.7rem;
  color: var(--secondary);
  text-align: center;

  @media (max-width: 500px) {
    font-size: 2rem;
  }
`

export const CartFooter = styled.div`
   bottom: 0;
`

export const TotalContent = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--secondary);
  font-size: 2.8rem;
  font-weight: 700;
  padding: 0 50px 30px 50px;

  @media (max-width: 500px) {
    padding: 0 30px 30px 30px;
  }
  
`

export const CheckoutButton = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #000000;
height: 97px;
width: 100%;
color: var(--secondary);
font-weight: 700;
font-size: 2.8rem;
cursor: pointer;
&:hover {
        background-color: var(--bg-hover-close-button);
    }  

@media (max-width: 500px) {
  font-size: 2rem;
  height: 65px;
}


`

