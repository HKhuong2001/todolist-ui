import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import TodoList from "../../../components/TodoList";
import { useAppSelector } from "../../../app/hooks";
import { RootState } from "../../../app/store";
import { Suspense } from "react";
const cx = classNames.bind(styles);
function Home() {
  const todoList = useAppSelector((state: RootState) => state.todos.todoList);
  return (
    <div className={cx("home-wrapper")}>
      <Suspense fallback={`loading Todo`}>
        <TodoList todoList={todoList} />
      </Suspense>
    </div>
  );
}

export default Home;
