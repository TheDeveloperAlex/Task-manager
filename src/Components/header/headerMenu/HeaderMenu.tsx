import { useDispatch } from "react-redux";
import { authOperations } from "../../../redux/auth";
import { HeaderMenuStyled } from "./HeaderMenuStyled";

interface IProps {
  userEmail?: string | null;
  icon?: string
}

const HeaderMenu = ({ userEmail, icon = "logout" }: IProps) => {
  const dispatch = useDispatch();

  const onHandleLogOut = () => {
    try {
      dispatch(authOperations.logOut());
    } catch (error) {}
  };

  return (
    <HeaderMenuStyled>
      <p className="userEmail">{userEmail}</p>
      <button className="logOutButton" onClick={onHandleLogOut}>
        <span className="material-icons icon">{icon}</span>
        <span className="logOutText">Log Out</span>
      </button>
    </HeaderMenuStyled>
  );
};

export default HeaderMenu;
