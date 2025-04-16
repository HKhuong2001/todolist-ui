import React, { useEffect, useState } from "react";
import {
  Todo,
  addTodoList,
  updateTodo,
} from "../../../features/todos/todosSlice";
import classNames from "classnames/bind";
import styles from "./AddTodo.module.scss";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { RootState } from "../../../app/store";
const cx = classNames.bind(styles);
const form: Todo = {
  _id: "",
  title: "",
  description: "",
  todoType: "",
  done: false,
};

const checkList = ["work", "study", "entertainment", "family"];

function FormToDos() {
  const todoEdit = useAppSelector((state: RootState) => state.todos.editTodo);
  const [formTodo, setFormTodo] = useState<Todo>(form);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (todoEdit) {
      setFormTodo(todoEdit);
    }
  }, [todoEdit]);
  const handlerSubmitAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formDataId = { ...formTodo, id: new Date().toString() };
    dispatch(addTodoList(formDataId));
    setFormTodo(form);
  };
  const handlerSubmitEdit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateTodo(formTodo));
    setFormTodo(form);
  };
  return (
    <form
      onSubmit={todoEdit ? handlerSubmitEdit : handlerSubmitAdd}
      className={cx("form")}
    >
      <div className={cx("form-group")}>
        <label htmlFor="">Title (1-30 Character):</label>
        <input
          className={cx("input-text")}
          type="text"
          value={formTodo.title}
          onChange={(event) => {
            if (event.target.value.length <= 30) {
              setFormTodo((prev) => ({ ...prev, title: event.target.value }));
            }
          }}
        />
      </div>
      <div className={cx("form-group")}>
        <label>ToDo Type: </label>
        <div className={cx("wrap-check")}>
          <select
            name="selectType"
            id="selectTodo"
            value={formTodo.todoType}
            onChange={(event) =>
              setFormTodo((prev) => ({
                ...formTodo,
                todoType: event.target.value,
              }))
            }
          >
            <option>Select Type Todo</option>
            {checkList.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className={cx("form-group")}>
        <label htmlFor="desc">Description :</label>
        <textarea
          id="desc"
          cols={30}
          rows={7}
          value={formTodo.description}
          onChange={(e) =>
            setFormTodo((prev) => ({
              ...prev,
              description: e.target.value.toString(),
            }))
          }
        ></textarea>
      </div>
      <button className={cx("btn-submit")} type="submit" id="btn-submit">
        {todoEdit ? "Edit Todo" : "Create New Todo"}
      </button>
    </form>
  );
}

export default FormToDos;
