import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  width: 100vw;
  height: calc(100vh - 60px);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: rgba(24, 28, 39, 0.25);
  z-index: 500;

  @media screen and (min-width: 768px) {
    top: 0;
    height: calc(100vh);
  }

  .modal {
    width: 320px;
    position: relative;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #ffffff;
    z-index: 550;
    text-align: center;

    color: #181c27;

    @media screen and (min-width: 320px) {
      width: 515px;
    }
    @media screen and (min-width: 768px) {
      width: 530px;
    }
  }
  .nameForm {
    padding-top: 63px;
    font-family: Montserrat;
    font-weight: 500;
    font-size: 26px;
    line-height: 1.22;
    letter-spacing: 0.04em;
    @media screen and (min-width: 768px) {
      font-size: 36px;
      padding-top: 121px;
    }
  }
  .cancelBtn {
    border: 0;
    background-color: transparent;
    margin-top: 30px;
    font-weight: 300;
    font-size: 18px;
    line-height: 1.4;
    letter-spacing: 0.04em;
    text-decoration: underline;
    text-decoration-skip-ink: none;

    &:focus,
    &:hover {
      color: #585858;
    }
  }

  .closeBtn {
    border: 0;
    background-color: transparent;
    display: block;
    position: absolute;
    top: 8px;
    right: 8px;

    &:focus,
    &:hover {
      color: #585858;
    }
  }
`;
