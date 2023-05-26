import classNames from "classnames/bind";
import styles from "./todo.module.scss";
import MyIcon from "../Icons";
import { Todo, editingTodo, toggleTodo } from "../../features/todos/todosSlice";
import { useState } from "react";
import { Link } from "react-router-dom";
import config from "../../config";
import { useAppDispatch } from "../../app/hooks";
const cx = classNames.bind(styles);
export interface ItemProps {
  item: Todo;
  handlerDelete: (id: string) => void;
}
function TodoItem({ item, handlerDelete }: ItemProps) {
  const [showTippy, setShowTippy] = useState<Boolean>(false);
  const [toggle, setToggle] = useState<boolean>(item.done);
  const dispatch = useAppDispatch();
  const { title, description, todoType } = item;
  const handlerStateDelete = () => {
    if (toggle) {
      handlerDelete(item._id);
    }
  };
  return (
    <div className={cx("todo-item")}>
      <div className={cx("todo-item-header")}>
        <h3 className={cx("title", { state: toggle ? "state" : "" })}>
          {title}
        </h3>
        <span onClick={() => setShowTippy(!showTippy)}>
          <MyIcon
            styleIcon="fas"
            nameIcon="ellipsis"
            classname={cx(`header-icon`)}
          />

          {showTippy && (
            <div className={cx("tippy")}>
              <Link
                to={config.add}
                onClick={() => dispatch(editingTodo(item._id))}
              >
                Edit...
              </Link>
              <span className={cx("delete")} onClick={handlerStateDelete}>
                Delete
              </span>
            </div>
          )}
        </span>
      </div>
      <div className={cx("todo-item-body", { state: toggle ? "state" : "" })}>
        <p>{description}</p>
      </div>
      <div className={cx("todo-item-footer")}>
        <div
          className={cx(`color-code`, {
            work: todoType === "work" ? "work" : "",
            study: todoType === "study" ? "study" : "",
            entertainment: todoType === "entertainment" ? "entertainment" : "",
            family: todoType === "family" ? "family" : "",
          })}
        ></div>
        <div className={cx("done")}>
          <input
            type="checkbox"
            id={item._id}
            checked={toggle}
            onChange={(event) => {
              setToggle(event.target.checked);
            }}
            onClick={() => {
              dispatch(toggleTodo(item._id));
              setToggle(!toggle);
              console.log("toggle");
            }}
          />
          <label htmlFor={item._id}>Done</label>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
