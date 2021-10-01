import styled from "styled-components";

export const ButtonWrapper = styled.div`
  .btnCommon {
    border-radius: 50%;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;

    transition: all 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
    &:focus,
    &:hover {
      outline: none;
      box-shadow: 0px 3px 4px rgba(255, 107, 8, 0.3);
      transform: scale(1.15);
    }
  }

  .add {
    width: 44px;
    height: 44px;
    font-size: 26px;
    background-color: #ff6b08;
    box-shadow: 0px 3px 4px rgba(255, 107, 8, 0.3);
  }

  .editDelete {
    width: 20px;
    height: 20px;
    background-color: #a6a6a6;
    font-size: 13px;
  }

  .deleteProject {
    width: 34px;
    height: 34px;
    background-color: white;
    color: rgba(0, 0, 0, 0.4);
    font-size: 22px;
    bottom: 5px;
  }

  .logout {
    font-size: 18px;
    color: #747474;
    background-color: transparent;
  }

  .logoutMob {
    font-size: 18px;
    background-color: #a6a6a6;
    width: 30px;
    height: 30px;
  }

  .groupAdd {
    font-size: 18px;
    color: #181c27;
    background-color: transparent;
  }

  .close {
    background-color: transparent;
    color: black;
  }

  .arrowBack {
    font-size: 16px;
    color: black;
    background-color: transparent;
  }

  .icon {
    font-size: inherit;
  }
`;
