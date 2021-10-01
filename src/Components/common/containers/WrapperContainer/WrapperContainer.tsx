import { Wrapper } from "./WrapperContainerStyled";

interface IProps {
  children?: JSX.Element;
}
const WrapperContainer = ({ children }: IProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default WrapperContainer;
