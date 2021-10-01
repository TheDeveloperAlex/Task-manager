import { randomBackgroud } from '../../../helpers/randomBackground';
import { colors } from '../../../configs/background.json';
import { NavLink } from 'react-router-dom';
import { List } from './NavListStyled';

type ListId = {
  title: string;
  _id?: string;
  id?: string;
}

interface Props{
  title: string;
  list: ListId[];
  path?: string;
}

const NavList = ({ title, list, path }: Props) => {
  return (
    <List>
      {list?.map((item) => (
        <li key={item.id ?? item._id} className="item">
          <NavLink
            className="nav_link"
            activeClassName="nav_link__active"
            to={{ pathname: `/${path}/${item._id ?? item.id}` }}
          >
            <div
              className={`logo ${
                title === 'спринти' ? 'white' : randomBackgroud(colors)
              }`}
            ></div>
            <h3 className="title">{item.title}</h3>
          </NavLink>
        </li>
      ))}
    </List>
  );
};

export default NavList;
