import styled from "styled-components"

export const WrapperForm = styled.div`
  padding: 0px 20px 0px 20px;
  overflow: auto;

  .input {
    width: 100%;
    margin-top: 30px;
    border: none;
    outline: none;
    border-bottom: 1px solid rgba(24, 28, 39, 0.2);
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.04em;
    background: transparent;

    color: #181c27;
  }
  .input::placeholder {
    font-size: 16px;
    line-height: 20px;

    letter-spacing: 0.04em;

    color: rgba(24, 28, 39, 0.6);
  }

  .submitWrapper {
    margin-top: 40px;
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    padding: 0px 51px 0px 32px;
    background: #ffffff;

    .input {
      margin-top: 50px;
    }
    .input::placeholder {
      font-size: 18px;
      line-height: 22px;
    }
    .submitWrapper {
      margin-top: 60px;
    }
  }
  @media screen and (min-width: 1280px) {
    padding: 0px 50px 0px;
  }
`
