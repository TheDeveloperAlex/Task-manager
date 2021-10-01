import styled from "styled-components";

export const TasksStyled = styled.div`
  width: 100%;

  .TaskTitleBtnEditWrapper {
    display: flex;
  }

  .inputChangeTitle {
    border: none;
    outline: none;
    box-shadow: 2px 4px 8px rgba(0, 5, 97, 0.1);
    border-radius: 5px;
    font-family: Montserrat;
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: 44px;
    letter-spacing: 0.04em;
    text-align: center;
    padding: 5px;
    max-width: 240px;

    @media screen and (max-width: 413px) {
      width: 120px;
      height: 32px;
      font-family: Montserrat;
      font-size: 26px;
      font-style: normal;
      font-weight: 500;
      line-height: 32px;
      letter-spacing: 0.04em;
      text-align: left;
    }
    @media screen and (min-width: 768px) {
      margin-right: 20px;
      max-width: 260px;
      height: 44px;
    }
    @media screen and (min-width: 1280px) {
      margin-right: 40px;
      max-width: 260px;
      height: 44px;
    }
  }

  @media (min-width: 768px) {
    border-right: 1px solid rgba(24, 28, 39, 0.1);
  }

  .TaskWrapper {
    display: flex;
    margin-bottom: 20px;
  }

  .changeTitleFormActive {
    display: flex;
    width: 100%;
    height: 31px;
    align-items: center;
    justify-content: space-between;
  }
  .SprintTitleBtnEditWrapper {
    display: flex;
  }

  .btnEditTitle {
    display: flex;
    align-items: center;
  }

  .btnCreateTask {
    position: fixed;
    right: 20px;
    bottom: 20px;
    z-index: 2;
  }

  .btnAddchartTitle {
    position: fixed;
    left: 20px;
    bottom: 20px;
    z-index: 2;
  }

  .inputBox {
    margin-bottom: 20px;
    position: relative;
  }

  .iconSearch {
    font-size: 20px;
    color: #a6a6a6;
    position: absolute;
    top: 10px;
    left: 10px;
  }

  .inputSearch {
    width: 100%;
    height: 40px;
    padding-left: 30px;
    border: none;
    border-bottom: 1px solid rgba(24, 28, 39, 0.1);
    background-color: transparent;
  }

  .inputSearch {
    outline: none;
  }
  .iconSearchTablet {
    display: none;
    font-size: 20px;
    color: #a6a6a6;
    position: absolute;
    top: 10px;
    right: 10px;
  }

  .discrbtionHoursContainer {
    display: none;
  }

  .discrbtionHoursContainerAfter {
    display: none;
  }

  .btnCreateTaskTablet {
    display: none;
  }

  .AddTaskParagraph {
    display: none;
  }

  .discrbtionHoursContainerDesktop {
    display: none;
  }

  .btnAddchartTitleTablet {
    display: none;
  }

  .TaskInterfaceContainer {
    width: 100%;
    padding-bottom: 10px;
    padding-top: 20px;
  }

  .TaskTitleWrapper {
    font-size: 26px;
    line-height: 32px;
  }

  /* ============================================= Tablet ================================================================= */
  @media screen and (min-width: 768px) {
    .changeTitleFormActive {
      justify-content: flex-start;
      height: 44px;
    }
    .TaskTitleWrapper {
      font-size: 36px;
      line-height: 44px;
    }

    .TaskInterfaceContainer {
      border: none;
      border-bottom: 1px solid rgba(24, 28, 39, 0.1);
      width: 472px;
      padding-left: 20px;
    }
    .counterSearchContainer {
      display: flex;
      justify-content: space-between;
    }

    .inputSearch {
      width: 214px;
    }

    .iconSearch {
      display: none;
    }

    .iconSearchTablet {
      display: block;
    }

    .inputSearch {
      padding-left: 2px;
      padding-right: 30px;
    }
    .inputBox {
      margin-bottom: 0px;
    }

    .counterSearchContainer {
      margin-bottom: 8px;
    }

    .discrbtionHoursContainer {
      display: flex;
      justify-content: space-between;
    }

    .discrbtionHours {
      width: 93px;
      font-size: 14px;
      line-height: 1.21;
      color: #181c27;
    }

    .TaskWrapper {
      margin-bottom: 24px;
      justify-content: space-between;
    }

    .btnCreateTask {
      display: none;
    }

    .btnCreateTaskTablet {
      display: block;
    }

    .TaskTitleWrapper {
      margin-right: 20px;
    }

    .btnEditTitle {
      margin-right: 34px;
    }

    .btnAddchartTitle {
      display: none;
    }

    .btnAddchartTitleTablet {
      display: block;
      position: fixed;
      z-index: 2;
      right: 25px;
      bottom: 30px;
    }
  }
  /* ============================================= Desktop ================================================================= */
  @media screen and (min-width: 1280px) {
    .discrbtionHoursContainerDesktopHours {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
    .SprintTitleBtnEditWrapper {
      width: 100%;
      justify-content: space-between;
    }
    .TaskInterfaceContainer {
      padding-top: 20px;
      width: 100%;
      padding-left: 70px;
      padding-right: 30px;
    }
    .TaskTitleWrapper {
      margin-right: 43px;
    }

    .AddTaskParagraph {
      display: flex;
      align-items: center;
    }
    .btnCreateTaskTablet {
      display: flex;
      align-items: center;
    }

    .btnCreateSprintTitle {
      margin-right: 20px;
    }

    .btnEditTitle {
      margin-right: 0px;
    }

    .TaskWrapper {
      justify-content: space-between;
    }

    .inputSearch {
      display: none;
    }
    .iconSearchTablet {
      display: none;
    }

    .buttonCounterLeft {
      margin-left: 0px;
    }

    .discrbtionHoursContainer {
      display: none;
    }

    .discrbtionHoursContainerDesktop {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }

    .SearchDesktop {
      position: relative;
      /* width:; */
    }

    .iconSearchDesktop {
      font-size: 20px;
      color: #a6a6a6;
      position: absolute;
      top: 10px;
      right: 10px;
    }

    .inputSearchDesktop {
      width: 100%;
      height: 40px;
      border: none;
      border-bottom: 1px solid rgba(24, 28, 39, 0.1);
      background-color: transparent;
    }

    .inputSearchDesktop {
      outline: none;
    }
    .discrbtionHours {
      width: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .btnAddchartTitleTablet {
      right: 55px;
      bottom: 60px;
    }
  }
`;
