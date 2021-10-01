import styled from "styled-components"

export const ButtonSubmitWrapper = styled.div`
  .btnSubCommon {
    background-color: #ff6b08;
    border: none;

    border-radius: 25px;
    text-align: center;
    color: white;
    font-size: 18px;
    line-height: 22px;
    height: 44px;
    padding-left: 44px;
    padding-right: 44px;

    transition: all 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
    &:focus,
    &:hover {
      outline: none;
      box-shadow: 0px 10px 15px rgb(255, 115, 21);
      background-color: #ff6b08f0;
    }
  }
`
