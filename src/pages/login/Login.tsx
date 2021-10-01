import AuthForm from "../../Components/auth/authForm/AuthForm";
import AuthWrapper from "../../Components/auth/authWrapper/AuthWrapper";
import sprite from "../../image/background/symbol-defs.svg";
import { LoginPageWrapper } from "./LoginStyled";

const Login = () => {
  return (
    <LoginPageWrapper>
      <div>
        <svg className="svgLG">
          <use href={sprite + "#icon-left-group"}></use>
        </svg>
      </div>
      <AuthWrapper
        title="Вхід"
        redirectMessage="Немає акаунту?"
        redirectLinkMessage="Зареєструватись"
        redirectTo="/register"
      >
        <AuthForm repeatPassword={false} />
      </AuthWrapper>
      <div>
        <svg className="svgORG">
          <use href={sprite + "#icon-orange-rigth-group"}></use>
        </svg>
      </div>
      <div>
        <svg className="svgWRG">
          <use href={sprite + "#icon-white-rigth-group"}></use>
        </svg>
      </div>
      <div>
        <svg className="svgOBC">
          <use href={sprite + "#icon-orange-rigth-big-circle"}></use>
        </svg>
        <svg className="svgNewOBC">
          <use href={sprite + "#icon-orange-rigth-big-circle"}></use>
        </svg>
      </div>
    </LoginPageWrapper>
  );
};

export default Login;
