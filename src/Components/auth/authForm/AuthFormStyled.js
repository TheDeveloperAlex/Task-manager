import styled from "styled-components";

export const AuthFormStyled = styled.div`
  .inputWrapper {
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .inputForm {
    outline: none;
    border-top: none;
    border-right: none;
    border-left: none;
    width: 280px;
    border-bottom: 1px solid rgba(24, 28, 39, 0.2);
    background: transparent;
    padding: 10px;
    font-size: 16px;
    z-index: 300;

    :active,
    :hover,
    :focus {
      outline: 0;
      outline-offset: 0;
      background: transparent;
    }

    @media screen and (min-width: 768px) {
      font-size: 18px;
      width: 430px;
    }
  }
  .inputForm:nth-child(2),
  .inputForm:nth-child(3) {
    -webkit-text-security: square;
    margin-top: 50px;
  }
  .errors {
    text-align: center;
    max-width: 250px;
    margin-top: 8px;
    color: red;
    font-size: 10px;
  }

  .errorPassword {
    color: red !important;
    border-bottom: 1px solid red;
  }

  button {
    margin-top: 40px;
    min-width: 260px;
  }
`;
