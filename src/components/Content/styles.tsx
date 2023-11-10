import styled from "styled-components"

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  grid-row-gap: .5rem;
  column-gap: 2.5rem;
  width: 938px;
  height: 650px;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
    column-gap: 1rem;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`