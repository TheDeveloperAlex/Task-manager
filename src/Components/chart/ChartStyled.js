import styled from "styled-components";

export const ChartStyled = styled.div`
  position: fixed;
  top: 60px;

  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;

  align-items: center;
  background-color: rgba(24, 28, 39, 0.25);
  z-index: 500;
  @media (max-width: 767px) {
    position: absolute;
    height: 100vh;
    left: 10;

    canvas {
      position: absolute;
      overflow: auto;
      width: 859px;
    }
  }

  @media (min-width: 768px) {
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }

  .modal {
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 15px;
    padding-right: 15px;
    position: relative;
    width: 859px;
    height: 100%;
    background-color: #fff;
    filter: drop-shadow(0px 6px 26px rgba(0, 5, 97, 0.1));

    @media (min-width: 768px) {
      padding-top: 15px;
      padding-bottom: 15px;
      width: 688px;
      height: 370px;
      border-radius: 5px;
    }
    @media (min-width: 1280px) {
      width: 933px;
      height: 500px;
    }
  }
  .buttonWrapper {
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;
