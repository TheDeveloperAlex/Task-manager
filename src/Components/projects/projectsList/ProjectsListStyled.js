import styled from 'styled-components';

export const ProjectsListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: -10px;
  margin-right: -10px;

  @media (min-width: 768px) {
    margin-bottom: -20px;
    margin-right: -20px;
  }
  @media (min-width: 1280px) {
    margin-bottom: -30px;
    margin-right: -30px;
  }
`;
