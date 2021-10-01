import styled from "styled-components"
import bcg from "../../../image/background/wave.png"

export const ProjectItemStyled = styled.li`
  position: relative;
  overflow: hidden;
  margin-bottom: 10px;
  margin-right: 10px;
  background-image: url(${bcg});
  background-position: 0% 100%;
  background-size: auto 90px;
  background-repeat: no-repeat;
  :nth-child(1) {
    background-position: 0% 100%;
  }
  :nth-child(2) {
    background-position: 87% 100%;
  }
  :nth-child(3) {
    background-position: 24% 100%;
  }
  :nth-child(4) {
    background-position: 79% 100%;
  }
  :nth-child(5) {
    background-position: 59% 100%;
  }
  :nth-child(6) {
    background-position: 40% 100%;
  }
  :nth-child(7) {
    background-position: 17% 100%;
  }
  :nth-child(8n) {
    background-position: 0% 100%;
  }
  :nth-child(9n) {
    background-position: 87% 100%;
  }
  :nth-child(10n) {
    background-position: 24% 100%;
  }
  :nth-child(11n) {
    background-position: 79% 100%;
  }
  :nth-child(12n) {
    background-position: 59% 100%;
  }
  :nth-child(13n) {
    background-position: 40% 100%;
  }
  :nth-child(14n) {
    background-position: 37% 100%;
  }

  @media (min-width: 768px) {
    margin-bottom: 20px;
    margin-right: 20px;
    background-size: auto 160px;
  }
  @media (min-width: 1280px) {
    margin-bottom: 30px;
    margin-right: 30px;
    background-size: auto 200px;
  }
  :hover,
  :focus {
    box-shadow: 0px 6px 26px rgba(0, 5, 97, 0.1);
  }
  .wave {
    height: 230px;
    width: 780px;
  }
  .projectLink {
    text-decoration: none;
    color: white;
    display: block;
    width: 135px;
    height: 135px;
    padding: 10px;

    border-radius: 5px;
    cursor: pointer;

    @media (min-width: 768px) {
      width: 216px;
      height: 216px;
      padding: 20px;
    }
    @media (min-width: 1280px) {
      width: 270px;
      height: 270px;
      padding: 30px;
    }
  }

  .projectTitle {
    font-size: 16px;
    font-weight: 800;
    letter-spacing: 0.04rem;

    @media (min-width: 768px) {
      font-size: 26px;
    }
  }

  .projectTextWrapper {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;

    padding: 30px;
    width: 100%;
    height: 100%;

    transform: translateY(100%);
    transition: transform 250ms ease-out;
  }
  .projectLink:hover .projectTextWrapper,
  .projectLink:focus .projectTextWrapper {
    transform: translateY(0%);
  }
  .projectTextDescription {
    font-size: 10px;

    @media (min-width: 768px) {
      font-size: 14px;
    }
  }

  .projectButtonWrapper {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`
