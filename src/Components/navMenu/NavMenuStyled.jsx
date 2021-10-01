import styled from "styled-components";

export const Wrapper = styled.div`
  margin-right: auto;

  .add {
    margin: 0 auto 15px auto;
  }
  .text {
    text-align: center;
  }
  .button__wrapper {
    @media (max-width: 767px) {
      display: none;
    }
    padding-top: 30px;
    padding-bottom: 50px;
  }

  .arrow {
    display: inline-block;
    transform: rotate(180deg);
    font-size: 35px;
    color: #181c27;
    font-weight: 100;
  }
  .goBack {
    text-decoration: none;
    display: flex;
    align-items: center;

    color: #181c27;
  }
  .button-title {
    margin-left: 21px;

    font-family: Montserrat;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
    @media (min-width: 768px) {
      max-width: 115px;
    }
  }
`;
