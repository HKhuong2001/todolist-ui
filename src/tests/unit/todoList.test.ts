import todosReducer, {
  editingTodo,
  getAllTodo,
  addTodoList,
  deleteTodo,
  filterTodo,
} from "../../features/todos/todosSlice";
import { TodosState, Todo } from "../../features/todos/todosSlice";
import { AnyAction } from "@reduxjs/toolkit";

describe("todosSlice reducer", () => {
  let initialState: TodosState;

  beforeEach(() => {
    initialState = {
      todoList: [],
      editTodo: undefined,
    };
  });

  it("should return the initial state", () => {
    expect(todosReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it("should handle editingTodo action", () => {
    const mockTodos: Todo[] = [
      {
        _id: "1",
        title: "Task 1",
        description: "Desc 1",
        todoType: "work",
        done: false,
      },
      {
        _id: "2",
        title: "Task 2",
        description: "Desc 2",
        todoType: "personal",
        done: false,
      },
    ];
    initialState.todoList = mockTodos;

    const newState = todosReducer(initialState, editingTodo("1"));
    expect(newState.editTodo).toEqual(mockTodos[0]);
  });

  it("should handle getAllTodo.fulfilled action", () => {
    const mockTodos: Todo[] = [
      {
        _id: "1",
        title: "Task 1",
        description: "Desc 1",
        todoType: "work",
        done: false,
      },
    ];

    const newState = todosReducer(initialState, {
      type: getAllTodo.fulfilled.type,
      payload: mockTodos,
    } as AnyAction);

    expect(newState.todoList).toEqual(mockTodos);
  });

  it("should handle addTodoList.fulfilled action", () => {
    const mockTodo: Todo = {
      _id: "3",
      title: "New Task",
      description: "New Desc",
      todoType: "home",
      done: false,
    };

    const newState = todosReducer(initialState, {
      type: addTodoList.fulfilled.type,
      payload: mockTodo,
    } as AnyAction);

    expect(newState.todoList.length).toBe(1);
    expect(newState.todoList[0]).toEqual(mockTodo);
  });

  it("should handle deleteTodo.fulfilled action", () => {
    initialState.todoList = [
      {
        _id: "1",
        title: "Task 1",
        description: "Desc 1",
        todoType: "work",
        done: false,
      },
      {
        _id: "2",
        title: "Task 2",
        description: "Desc 2",
        todoType: "personal",
        done: false,
      },
    ];

    const newState = todosReducer(initialState, {
      type: deleteTodo.fulfilled.type,
      meta: { arg: "1" },
    } as AnyAction);

    expect(newState.todoList.length).toBe(1);
    expect(newState.todoList[0]._id).toBe("2");
  });

  it("should handle filterTodo.fulfilled action", () => {
    const mockTodos: Todo[] = [
      {
        _id: "1",
        title: "Filtered Task",
        description: "Filtered Desc",
        todoType: "work",
        done: false,
      },
    ];

    const newState = todosReducer(initialState, {
      type: filterTodo.fulfilled.type,
      payload: mockTodos,
    } as AnyAction);

    expect(newState.todoList).toEqual(mockTodos);
  });
});
