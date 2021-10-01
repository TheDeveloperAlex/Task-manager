import { TitleStyled } from './TitleStyled';

interface IProp {
  title: string;
}


const Title = ({ title }: IProp) => {
  return <TitleStyled>{title}</TitleStyled>;
};

export default Title;
