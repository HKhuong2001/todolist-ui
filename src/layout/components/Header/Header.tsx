import { Link } from "react-router-dom";
import MyIcon from "../../../components/Icons";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import config from "../../../config";

const cx = classNames.bind(styles);
function Header() {
  return (
    <header className={cx("header")}>
      <Link to={config.home}>
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
