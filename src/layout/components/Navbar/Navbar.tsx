import { useLocation, useRoutes } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import { filterTodo } from "../../../features/todos/todosSlice";
import NavList from "./NavList/NavList";
import styles from "./Navbar.module.scss";
import classnames from "classnames/bind";
import { useEffect, useState } from "react";
import queryString from "query-string";
const cx = classnames.bind(styles);
const navList = [
  { name: "work", colorCode: "#D2CEFF" },
  { name: "study", colorCode: "#D1E5F7" },
  { name: "entertainment", colorCode: "#FFCECE" },
  { name: "family", colorCode: "#DAF2D6" },
];

function Navbar() {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const [initialString, setInitialString] = useState("");

  useEffect(() => {
    const params = queryString.parse(location.search);
    const topics = params.topics;
    setInitialString(topics?.toString() || "");
  }, [location.search]);

  useEffect(() => {
    if (initialString) {
      dispatch(filterTodo(initialString));
    }
  }, [initialString, dispatch]);

  return (
    <div className={cx("wrapper")}>
      <ul className={cx("nav-list")}>
        {navList.map((itemList) => {
          return (
            <NavList
              key={itemList.name}
              name={itemList.name}
              colorCode={itemList.colorCode}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Navbar;
