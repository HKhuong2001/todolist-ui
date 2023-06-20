import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initalToDoList } from "./todoList";
import http from "../../utils/http";

export interface Todo {
  _id: string;
  title: string;
  description: string;
  todoType: string;
  done: boolean;
}

export interface TodosState {
  todoList: Todo[];
  editTodo: Todo | undefined;
}

const initialState: TodosState = {
  todoList: initalToDoList,
  editTodo: undefined,
};

export const getAllTodo = createAsyncThunk(
  "todos/getAllTodo",
  async (_, thunkAPI) => {
    const response = await http.get<Promise<Todo[]>>("/api/todos", {
      signal: thunkAPI.signal,
    });
    console.log(response.data);

    return response.data;
  }
);

export const filterTodo = createAsyncThunk(
  "todos/filterTodo",
  async (type: string, thunkAPI) => {
    const response = await http.get<Promise<Todo[]>>(
      `/api/todos/query/search?todoType=${type}`,
      {
        signal: thunkAPI.signal,
      }
    );
    console.log(response.data);

    return response.data;
  }
);

export const addTodoList = createAsyncThunk(
  "todos/addTodo",
  async (body: Todo, thunkAPI) => {
    const response = await http.post<Todo>("/api/todos", body, {
      signal: thunkAPI.signal,
    });
    return response.data;
  }
);

export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async (body: Todo, thunkAPI) => {
    const response = await http.put<Todo>(`/api/todos/${body._id}`, body, {
      signal: thunkAPI.signal,
    });
    return response.data;
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (id: string, thunkAPI) => {
    const response = await http.delete<string>(`/api/todos/${id}`, {
      signal: thunkAPI.signal,
    });
    return response.data;
  }
);

export const toggleTodo = createAsyncThunk(
  "todos/toggleTodo",
  async (id: string, thunkAPI) => {
    const response = await http.get<string>(`/api/todos/${id}`, {
      signal: thunkAPI.signal,
    });
    return response.data;
  }
);

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    editingTodo(state, action: PayloadAction<string>) {
      const todoId = action.payload;
      const foundId = state.todoList.find((item) => item._id === todoId);
      state.editTodo = foundId;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getAllTodo.fulfilled, (state, action) => {
        state.todoList = action.payload;
      })
      .addCase(addTodoList.fulfilled, (state, action) => {
        state.todoList.push(action.payload);
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        state.editTodo = undefined;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        const todoId = action.meta.arg;
        const foundId = state.todoList.findIndex((item) => item._id === todoId);
        if (foundId !== -1) {
          state.todoList.splice(foundId, 1);
        }
      })
      .addCase(filterTodo.fulfilled, (state, action) => {
        state.todoList = action.payload;
      })
      .addCase(toggleTodo.fulfilled, (state, action) => {});
  },
});

export const { editingTodo } = todosSlice.actions;

export default todosSlice.reducer;
