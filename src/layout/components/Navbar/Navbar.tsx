import { useLocation } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import { filterTodo } from "../../../features/todos/todosSlice";
import NavList from "./NavList/NavList";
import styles from "./Navbar.module.scss";
import classnames from "classnames/bind";
import { useEffect, useState } from "react";

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

  const [queryString, setQueryString] = useState<any>(null); // Lưu `queryString`
  const [initialString, setInitialString] = useState("");

  useEffect(() => {
    import("query-string").then((qs) => setQueryString(qs.default)); // Chỉ import 1 lần
  }, []);

  useEffect(() => {
    if (!queryString) return; // Nếu `queryString` chưa có thì bỏ qua

    const params = queryString.parse(location.search);
    const topics = params.topics;
    setInitialString(topics?.toString() || "");
  }, [queryString, location.search]); // Phải chờ `queryString` xong mới chạy

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
