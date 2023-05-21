import classNames from "classnames/bind";
import styles from "./todo.module.scss";
import TodoItem from "./TodoItem";
import { Todo } from "../../features/todos/todosSlice";
const cx = classNames.bind(styles);
interface TodoProps {
  todoList: Todo[];
}
function TodoList({ todoList }: TodoProps) {
  return (
    <div className={cx("todo-list")}>
      {todoList.map((item) => {
        return <TodoItem key={item.todoType} item={item} />;
      })}
    </div>
  );
}

export default TodoList;
