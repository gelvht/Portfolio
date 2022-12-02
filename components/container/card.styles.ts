import styled from "styled-components";

export const CardStyle = styled.section`
  background-color: var(--secondary-color);
  border-radius: 2rem;
  width: 95vw;
  height: 85vh;
  box-shadow: -3px 8px 49px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 840px) {
    min-height: 85vh;
    height: auto;
  }
`;
