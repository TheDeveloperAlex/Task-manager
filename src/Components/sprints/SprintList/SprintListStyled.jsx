import styled from 'styled-components';

export const SprintListStyled = styled.div`
  .listWrapper {
    @media screen and (min-width: 768px) {
      display: flex;
      flex-wrap: wrap;
    }
  }

  .listItem {
    height: 255px;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0px 6px 26px rgba(0, 5, 97, 0.1);
    width: 216px;
    margin-top: 20px;
    margin-right: 20px;

    &:not(:last-child) {
      margin-bottom: 10px;
    }

    @media screen and (max-width: 767px) {
      width: 280px;
      height: 170px;
    }

    @media screen and (min-width: 768px) and (max-width: 767px) {
      width: 216px;
      height: 255px;

      &:not(:nth-child(2n)) {
        margin-right: 20px;
      }

      &:not(:nth-last-child(-n + 2)) {
        margin-bottom: 20px;
      }
    }

    @media screen and (min-width: 1280px) {
      width: 260px;
      height: 224px;

      &:not(:nth-child(3n)) {
        margin-right: 30px;
      }

      &:not(:nth-last-child(-n + 3)) {
        margin-bottom: 30px;
      }
    }
  }
`;
