import classNames from "classnames/bind";
import styles from "./todo.module.scss";
import TodoItem from "./TodoItem";
import { Todo, deleteTodo, getAllTodo } from "../../features/todos/todosSlice";
import { useAppDispatch } from "../../app/hooks";
import { useEffect } from "react";
const cx = classNames.bind(styles);
interface TodoProps {
  todoList: Todo[];
}
function TodoList({ todoList }: TodoProps) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const promise = dispatch(getAllTodo());
    return () => {
      promise.abort();
    };
  }, [dispatch]);
  const handlerDelete = (id: string) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className={cx("todo-list")}>
      {todoList.map((item, index) => {
        return (
          <TodoItem key={index} item={item} handlerDelete={handlerDelete} />
        );
      })}
    </div>
  );
}

export default TodoList;
