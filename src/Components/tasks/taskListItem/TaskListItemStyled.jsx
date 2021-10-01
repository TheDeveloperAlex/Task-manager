import styled from "styled-components";

export const TaskListItemWrapper = styled.div`
  width: 280px;
  background: #ffffff;
  box-shadow: 0px 6px 26px rgba(0, 5, 97, 0.1);
  border-radius: 5px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 10px;
  position: relative;

  :hover,
  :focus {
    box-shadow: 0px 6px 26px rgba(0, 5, 97, 0.1);
  }

  .TaskTitle {
    font-weight: 500;
    font-size: 18px;
    line-height: 1.2;
    color: #181c27;
    letter-spacing: 0.04em;
    margin-bottom: 8px;
  }

  .describtion {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .describtionLastChild {
    margin-bottom: 30px;
  }

  .describtionHour {
    font-size: 10px;
    line-height: 1.2;
  }

  .describtionHourNumber {
    font-size: 10px;
    line-height: 1.2;
  }

  .describtionNumber {
    display: flex;
    justify-content: end;
    font-size: 14px;
    line-height: 1.12;
    width: 60px;
    border-bottom: 1px solid rgba(24, 28, 39, 0.2);
    cursor: pointer;
  }
  .BtnDelete {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }

  .TaskTitleAfter {
    width: 100%;
    margin-bottom: 20px;
    border: 1px solid rgba(24, 28, 39, 0.2);
  }

  .inputNumber {
    width: 60px;
    height: 16px;
    font-size: 14px;
    line-height: 1.2;
    border: none;
    background-color: transparent;
    padding: 0;
    padding-left: 51px;
    padding-bottom: 2px;
    border-bottom: 1px solid rgba(24, 28, 39, 0.2);
  }

  .inputNumber {
    outline: none;
  }

  /* ================================================================================================== */

  @media screen and (max-width: 1279px) {
    .TaskDescriptionTablet {
      display: block;

      width: 100%;
    }

    .TaskDescriptionDesktop {
      display: none;
    }

    .TitleWrapper {
      width: 100%;
      margin-right: 0px;
    }
  }

  /* ============================================= Tablet ================================================================= */
  @media screen and (min-width: 768px) {
    width: 216px;
    :nth-child(2n + 1) {
      margin-right: 10px;
    }

    .describtionHour {
      font-size: 14px;
      line-height: 1.2;
      width: 98px;
    }

    .describtionNumber {
      font-size: 18px;
      line-height: 1.2px;
      display: flex;
      align-items: center;
    }

    .describtionHourNumber {
      font-size: 14px;
      line-height: 1.2;

      display: flex;
      align-items: flex-end;
    }

    .inputNumber {
      height: 32px;
      font-size: 18px;
      line-height: 1.2px;
      padding-left: 48px;
    }
  }

  /* ============================================= Desktop ================================================================= */
  @media screen and (min-width: 1280px) {
    margin: 0px;
    width: 100%;
    flex-direction: row;
    :nth-child(2n + 1) {
      margin-right: 0px;
    }
    margin-bottom: 10px;

    .TaskDescriptionTablet {
      display: none;
    }

    .TaskDescriptionDesktop {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }

    .TitleWrapper {
      margin-right: 30px;
    }

    .describtionHourNumber {
      width: 100px;
      display: flex;
      justify-content: center;
    }

    .TitleWrapper {
      width: 170px;
    }

    .TaskTitleAfter {
      margin-bottom: 0px;
    }

    .inputNumberDesktop {
      width: 60px;
      border: none;
      border-bottom: 1px solid rgba(24, 28, 39, 0.2);
      padding: 0;
      padding-left: 30px;
      font-size: 18px;
      line-height: 1.2px;
    }

    .inputNumberDesktop {
      outline: none;
    }
  }
`;
