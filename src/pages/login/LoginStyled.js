import styled from "styled-components";

export const LoginPageWrapper = styled.div`
  position: relative;
  width: 1280px;
  overflow-x: hidden;

  .svgLG {
    position: fixed;
    z-index: 0;
    opacity: 0.8;
    top: 298px;
    left: -144px;
    width: 332px;
    height: 565px;
    overflow-x: hidden;
    pointer-events: none;
    @media screen and (min-width: 769px) {
      left: -100px;
    }
    @media screen and (min-width: 1000px) {
      z-index: 120;
      top: 240px;
      left: 112px;
    }
  }
  .svgORG {
    position: fixed;
    top: 291px;
    right: -289px;
    width: 542px;
    height: 502px;
    z-index: 0;
    opacity: 0.9;
    overflow-x: hidden;
    @media screen and (min-width: 769px) {
      top: 232px;
      right: -32px;
    }
  }
  .svgWRG {
    display: none;
    @media screen and (min-width: 769px) {
      display: block;
      position: fixed;
      top: 186px;
      right: -34px;
      width: 570px;
      height: 602px;
      z-index: -50;
      opacity: 0.9;
      overflow-x: hidden;
    }
  }
  .svgOBC {
    display: none;
    @media screen and (min-width: 768px) {
      display: block;
      position: fixed;
      top: 130px;
      right: 140px;
      width: 26px;
      height: 26px;
      opacity: 0.9;
      overflow-x: hidden;
    }
  }
  .svgNewOBC {
    position: fixed;
    top: 161px;
    right: 68px;
    width: 78px;
    height: 78px;
    z-index: -50;
    opacity: 0.9;
    overflow-x: hidden;
    @media screen and (min-width: 769px) {
      top: 104px;
      right: 326px;
    }
  }
`;
