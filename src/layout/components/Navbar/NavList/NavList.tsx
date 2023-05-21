import styles from "../Navbar.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export interface NavListItem {
  name: string;
  colorCode: string;
}

function NavList(item: NavListItem) {
  const { name, colorCode } = item;
  const handlerItem = () => {
    console.log(name);
  };
  return (
    <>
      <li className={cx("nav-list-item")} onClick={handlerItem}>
        <span style={{ color: colorCode }}></span>
        <h3 datatype={colorCode}>{name}</h3>
      </li>
    </>
  );
}

export default NavList;
