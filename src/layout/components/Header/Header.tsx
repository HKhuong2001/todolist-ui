import { Link } from "react-router-dom";
import MyIcon from "../../../components/Icons";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import config from "../../../config";
import { useAppDispatch } from "../../../app/hooks";
import { getAllTodo } from "../../../features/todos/todosSlice";

const cx = classNames.bind(styles);
function Header() {
  const dispatch = useAppDispatch();
  return (
    <header className={cx("header")}>
      <Link to={config.home} onClick={() => dispatch(getAllTodo())}>
        <h1>TODO APP</h1>
      </Link>
      <Link
        to={config.add}
        className={cx(`btn-icon`)}
        onClick={() => console.log("Icon")}
      >
        <MyIcon styleIcon="fas" nameIcon="plus" classname={cx(`header-icon`)} />
      </Link>
    </header>
  );
}

export default Header;
