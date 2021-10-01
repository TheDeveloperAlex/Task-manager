import { Container } from "./ContainerStyled";
interface IProps {
  children?: JSX.Element;
}

const MainContainer = ({ children }: IProps) => {
  return <Container>{children}</Container>;
};

export default MainContainer;
