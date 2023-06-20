import classNames from "classnames/bind";
import styles from "./todo.module.scss";
import TodoItem from "./TodoItem";
import { Todo, deleteTodo, getAllTodo } from "../../features/todos/todosSlice";
import { useAppDispatch } from "../../app/hooks";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
const cx = classNames.bind(styles);
interface TodoProps {
  todoList: Todo[];
}
function TodoList({ todoList }: TodoProps) {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const [initialString, setInitialString] = useState("");

  useEffect(() => {
    const promise = dispatch(getAllTodo());
    return () => {
      promise.abort();
    };
  }, [dispatch]);

  useEffect(() => {
    const params = queryString.parse(location.search);
    const topics = params.topics;
    setInitialString(topics?.toString() || "");
  }, [location.search]);

  const handlerDelete = (id: string) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      {todoList.length === 0 ? (
        <div className={cx("todo-list-none")}>
          <h1>You dont have any todo with {initialString}!</h1>
        </div>
      ) : (
        <div className={cx("todo-list")}>
          {todoList.map((item, index) => {
            return (
              <TodoItem key={index} item={item} handlerDelete={handlerDelete} />
            );
          })}
        </div>
      )}
    </>
  );
}

export default TodoList;
