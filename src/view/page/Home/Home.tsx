import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import TodoList from "../../../components/TodoList";
import { useAppSelector } from "../../../app/hooks";
import { RootState } from "../../../app/store";
const cx = classNames.bind(styles);
function Home() {
  const todoList = useAppSelector((state: RootState) => state.todos.todoList);
  return (
    <div className={cx("home-wrapper")}>
      <TodoList todoList={todoList} />
    </div>
  );
}

export default Home;
