import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 30px;

  @media screen and (min-width: 768px) {
    width: 472px;
    padding-left: 20px;
    padding-bottom: 80px;
  }

  @media screen and (min-width: 1280px) {
    width: 970px;
    padding-left: 70px;
    padding-right: 30px;
    padding-bottom: 10px;
  }
`;
