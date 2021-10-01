import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;

  max-width: 320px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 40px;
    padding-right: 40px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }
`;
