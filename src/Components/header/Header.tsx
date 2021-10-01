import { HeaderStyled } from "./HeaderStyled";
import { authSelectors } from "../../redux/auth";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import sprite from "../../image/background/symbol-defs.svg";

import HeaderMenu from "./headerMenu/HeaderMenu";
import { Container } from "../common/containers/mainContainer/ContainerStyled";

const Header = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const userEmail= useSelector(authSelectors.getUserEmail);

  return (
    <HeaderStyled>
      <Container className="container">
        <Link className="logo" to="/">
          <svg className="logo">
            <use href={sprite + "#logo"}></use>
          </svg>
        </Link>
        {isLoggedIn && <HeaderMenu userEmail={userEmail} />}
      </Container>
    </HeaderStyled>
  );
};

export default Header;
