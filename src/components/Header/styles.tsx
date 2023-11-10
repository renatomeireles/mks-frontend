import styled from "styled-components"

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-width: 400px;
  min-height: 101px;
  background-color: var(--primary);

  @media (max-width: 500px) {
    min-height: 48px;
    padding-bottom: .5rem;
  }
`
export const HeaderLogo = styled.div`
  display: flex;
  align-items: baseline;
  gap: .5rem;
  margin-left: 50px;

  @media (max-width: 500px) {
    margin-left: 40px;
  }
`

export const HeaderTitle = styled.span`
  font-size: 4rem;
  font-weight: 600;
  color: var(--secondary);

  @media (max-width: 500px) {
    font-size: 3.2rem;
  }
`

export const HeaderSubTitle = styled.span`
  font-size: 2rem;
  font-weight: 300;
  color: var(--secondary);

  @media (max-width: 500px) {
    font-size: 1.6rem;
  }
`

export const HeaderCart = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    font-weight: 700;
    gap: 2rem;
    background-color: var(--secondary);
    width: 90px;
    height: 45px;
    border: none;
    border-radius: 8px;
    margin-right: 50px;
    cursor: pointer;

    @media (max-width: 500px) {
    margin-right: 40px;
    width: 52px;
    height: 26px;
    gap: .5rem;
    font-size: 1.2rem;

    img{
      scale: 0.7;
    }
  }
`