import { Header, Navbar } from "../components";
import styles from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface DefaultLayoutProps {
  children: any;
}
function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className={cx("container")}>
      <div className={cx("container-fluid")}>
        <Header />
        <div className={cx("container-fluid-wrapper")}>
          <Navbar />
          <div className={cx("wrapper-content")}>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
