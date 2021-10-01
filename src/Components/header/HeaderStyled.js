import styled from "styled-components";

export const HeaderStyled = styled.div`
  border-bottom: 1px solid rgba(24, 28, 39, 0.1);
  .container {
    padding: 15px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (min-width: 768px) {
      padding: 20px 40px;
    }
    @media (min-width: 1280px) {
      padding: 20px 55px;
    }
    .logo {
      height: 30px;
      width: 100px;
      @media (min-width: 768px) {
        width: 140px;
        height: 42px;
      }
    }
  }
`;
