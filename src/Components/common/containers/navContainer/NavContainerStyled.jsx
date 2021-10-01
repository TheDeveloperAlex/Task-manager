import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;

  @media screen and (min-width: 768px) {
    height: 100vh;
    padding-top: 20px;
    padding-bottom: 80px;
    border-right: 1px solid rgba(24, 28, 39, 0.1);
  }

  @media screen and (min-width: 1280px) {
    min-width: 200px;
    width: 200px;
    padding-bottom: 50px;
  }
`;
