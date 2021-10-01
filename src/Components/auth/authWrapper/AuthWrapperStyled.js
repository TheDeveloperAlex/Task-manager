import styled from "styled-components";

export const AuthWrapperStyled = styled.div`
  width: 320px;
  min-height: 508px;
  box-shadow: 0px 6px 26px rgba(0, 5, 97, 0.1);
  border-radius: 5px;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 60px;
  left: 50%;
  transform: translate(-50%, -0);
  height: calc(100vh - 60px);
  padding: 46px 20px 0;
  z-index: 100;
  @media screen and (min-width: 420px) {
    top: 194px;
    width: 570px;
    height: auto;
  }

  @media screen and (min-width: 769px) {
    padding: 60px 46px 60px;
    top: 136px;
    width: 570px;
    height: auto;
  }

  h2 {
    @media screen and (max-width: 768px) {
      font-size: 26px;
    }
  }

  .underLink {
    margin: 18px;
    font-size: 12px;
    line-height: 1.25;
    letter-spacing: 0.04;
    color: rgba(24, 28, 39, 0.6);
    a {
      color: rgba(24, 28, 39, 0.6);
    }
  }
`;
