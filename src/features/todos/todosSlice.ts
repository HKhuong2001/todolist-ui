import { createReducer, createAction } from "@reduxjs/toolkit";
import { initalToDoList } from "./todoList";

export interface Todo {
  id: string;
  title: string;
  description: string;
  todoType: string;
  done: boolean;
}

export interface TodosState {
  todoList: Todo[];
}

const initalState: TodosState = {
  todoList: initalToDoList,
};

const addTodo = createAction<Todo>("todos/addTodo");

const todosReducer = createReducer(initalState, (builder) => {});

export default todosReducer;
