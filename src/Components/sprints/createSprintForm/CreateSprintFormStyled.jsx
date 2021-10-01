import styled from "styled-components";

export const WrapperForm = styled.div`
  padding: 0px 20px;
  .title {
    text-align: center;
    font-weight: 500;
    font-size: 26px;
    line-height: 32px;
    color: #181c27;
  }
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
  .dateLabel {
    text-align: left;
    display: block;
    margin-top: 40px;
    font-family: Montserrat;
    width: 100%;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;

    color: rgba(24, 28, 39, 0.6);
    position: relative;
  }
  .date {
    margin-top: 8px;
    width: 100%;
    border: none;
    outline: none;
    border-bottom: 1px solid rgba(24, 28, 39, 0.2);
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.04em;
    background: transparent;

    color: #181c27;
  }
  .react-datepicker {
    border: none;
  }

  .react-datepicker__day {
    padding-top: 7px;
    width: 32px;
    height: 32px;
    font-size: 14px;
    line-height: 17px;
    color: #181c27;

    opacity: 1;
  }
  .react-datepicker__day--selected {
    background: #ff6b08;
    border-radius: 50%;
    color: #ffffff;
  }
  .react-datepicker__day--disabled {
    opacity: 0.7;
  }
  .react-datepicker-popper {
    border-radius: 20px 20px 0px 0px;
  }
  .react-datepicker__day-name {
    padding-top: 7px;
    text-align: center;
    color: #ff6b08;
    width: 32px;
    height: 32px;
    font-size: 14px;
    line-height: 17px;
  }
  .react-datepicker__triangle::after,
  .react-datepicker__triangle::before {
    display: none;
  }
  .react-datepicker__header {
    border: none;
    padding: 0;
  }
  .react-datepicker__navigation {
    background-color: transparent;
    border-radius: 20px 20px 0px 0px;
  }
  .react-datepicker__current-month {
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    padding-top: 8px;
    color: #1b1c20;
    background: #ffffff;
    border-radius: 20px 20px 0px 0px;
    height: 40px;
  }
  .react-datepicker__month-container {
    width: 280px;
    height: 280px;
    left: 20px;
    top: 393px;

    background: #f7f7fb;
    box-shadow: 0px 6px 26px rgba(0, 5, 97, 0.1);
    backdrop-filter: blur(24px);
    border: none;

    border-radius: 20px;
  }
  .react-datepicker__day-names {
    background: #f7f7fb;
  }

  .submitWrapper {
    margin-top: 40px;
    text-align: center;
  }
  .round__wrapper {
    margin-top: 40px;
    display: flex;
    align-items: center;
    background: transparent;
    border: none;
    outline: none;

    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.04em;
    color: rgba(24, 28, 39, 0.6);
  }
  .round {
    margin-right: 10px;
    display: block;
    width: 34px;
    height: 34px;
    padding-top: 7px;
    border-radius: 50%;
    border: 1px solid #d1d2d4;
    text-align: center;
  }
  .orange {
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #ff6b08;
  }
  @media screen and (min-width: 768px) {
    padding: 0px 41px;
    background: #ffffff;
    .title {
      font-size: 36px;
      line-height: 44px;
    }
    .input {
      margin-top: 50px;
    }
    .input::placeholder {
      font-size: 18px;
      line-height: 22px;
    }
    .dateLabel {
      margin-top: 42px;
    }
    .date__wrapper {
      display: flex;
      align-items: flex-end;
    }
    .date {
      width: 200px;
      margin-right: 30px;
    }
    .duration {
      width: 200px;
    }
  }
  @media screen and (min-width: 1280px) {
    padding: 0px 66px;
  }
`;
