import { Container } from "./NavContainerStyled";

interface IProps {
  children?: JSX.Element;
}

const NavContainer = ({ children }: IProps) => {
  return <Container>{children}</Container>;
};

export default NavContainer;
