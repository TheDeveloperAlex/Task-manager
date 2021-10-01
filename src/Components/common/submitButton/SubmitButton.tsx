import { ButtonSubmitWrapper } from "./SubmitButtonStyled";

interface Props {  
  nameBtn: string;
  className?: string;
}

const SubmitButton = ({  
  nameBtn = "Зареєструватися",
}: Props) => {
  return (
    <ButtonSubmitWrapper>
      <button type="submit" className="btnSubCommon">
        {nameBtn}
      </button>
    </ButtonSubmitWrapper>
  );
};

export default SubmitButton;
