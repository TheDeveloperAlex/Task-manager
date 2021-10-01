import { Container } from "./ContentContainerStyled";

interface IProps {
  children?: JSX.Element;
}

const ContentContainer = ({ children }: IProps) => {
  return <Container>{children}</Container>;
};

export default ContentContainer;
