import { AuthWrapperStyled } from "./AuthWrapperStyled";
import Title from "../../common/title/Title";
import { Link } from "react-router-dom";

interface IProps {
  title?: string;
  redirectMessage?: string;
  redirectLinkMessage?: string;
  redirectTo?: string;
  children?: JSX.Element;
}

const AuthWrapper = ({
  title = "Реєстрація",
  redirectMessage = "Маєте акаунт?",
  redirectLinkMessage = "Увійти",
  redirectTo = "/login",
  children,
}: IProps) => {
  return (
    <AuthWrapperStyled>
      <Title title={title} />
      {children}
      <p className="underLink">
        {redirectMessage} <Link to={redirectTo}>{redirectLinkMessage}</Link>
      </p>
    </AuthWrapperStyled>
  );
};

export default AuthWrapper;
