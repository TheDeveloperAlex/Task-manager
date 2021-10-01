import styled from "styled-components";

export const SprintListItemStyled = styled.div`
  .LinkWrapper {
    position: relative;
    height: 255px;
    padding: 20px 20px 20px;
    .date {
      display: inline-block;
      max-width: 80px;
    }
    @media screen and (max-width: 767px) {
      width: 280px;
      height: 170px;
    }

    @media screen and (min-width: 1280px) {
      padding: 20px 30px 30px;
      height: 224px;
    }

    a {
      text-decoration: none;
      color: inherit;
      height: 100%;
    }

    button {
      position: absolute;
      bottom: 10px;
      right: 10px;
    }
  }

  .itemWrap {
    h3 {
      margin-bottom: 20px;
      font-weight: 500;
      font-size: 16px;
      letter-spacing: 0.04em;
      display: flex;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;

      @media screen and (min-width: 768px) {
        margin-bottom: 30px;
        font-size: 18px;
      }

      @media screen and (min-width: 1280px) {
        margin-bottom: 25px;
      }
    }

    li {
      display: flex;
      justify-content: space-between;
      font-size: 10px;
      font-weight: 400;

      @media screen and (min-width: 768px) {
        font-size: 14px;
      }

      &:not(:last-child) {
        margin-bottom: 10px;

        @media screen and (min-width: 768px) {
          margin-bottom: 25px;
        }

        @media screen and (min-width: 1280px) {
          margin-bottom: 20px;
        }
      }
    }
  }
  .delete {
    background-color: #a6a6a6;
    width: 20px;
    height: 20px;
    bottom: 5px;
  }
`;
