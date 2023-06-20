import queryString from "query-string";
import styles from "../Navbar.module.scss";
import classNames from "classnames/bind";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
const cx = classNames.bind(styles);

export interface NavListItem {
  name: string;
  colorCode: string;
}

function NavList(item: NavListItem) {
  const { name, colorCode } = item;
  const navigate = useNavigate();

  const handlerName = () => {
    navigate(`/?topics=${name}`);
  };

  return (
    <>
      <li className={cx("nav-list-item")} onClick={handlerName}>
        <span style={{ color: colorCode }}></span>
        <h3 datatype={colorCode}>{name}</h3>
      </li>
    </>
  );
}

export default NavList;
