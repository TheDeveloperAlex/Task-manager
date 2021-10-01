import styled from 'styled-components';

export const ProjectsStyled = styled.div`
  width: 100%;
  .headerWrapper {
    display: flex;
    justify-content: space-between;
    padding: 35px 0px;
  }
  .buttonWrapper {
    display: flex;
    align-items: center;
  }
  .buttonMessage {
    margin-left: 20px;
    @media (max-width: 767px) {
      display: none;
    }
  }
`;
