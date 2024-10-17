import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Todo = {
  id: string;
  label: string;
  date: number;
  check: boolean;
  status: "all" | "active" | "completed";
  edit: boolean;
  editText: string;
}

type TodoState = {
  todos: Todo[];
  status: "all" | "active" | "completed";
}

const initialState: TodoState = {
  todos: [],
  status: "all",
}

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    createData(state, action: PayloadAction<string>) {
      state.todos.push({
        id: Math.random().toString(36).slice(2),
        label: action.payload,
        date: Date.now(),
        check: false,
        status: "all",
        edit: false,
        editText: action.payload,
      });
    },
    onToogleCheck(state, action: PayloadAction<string>) {
      const toogleTodo = state.todos.find((el) => el.id === action.payload);
      if (toogleTodo) {
        toogleTodo.check = !toogleTodo.check;
      }
    },
    deleteTodo(state, action: PayloadAction<string>) {
      state.todos = state.todos.filter((el) => el.id !== action.payload);
    },
    clearData(state) {
      state.todos = state.todos.filter((el) => !el.check);
    },
    editSubmit(state, action: PayloadAction<{id: string, value: string}>) {
      const sumbitTodo = state.todos.find((el) => el.id === action.payload.id);
      if (sumbitTodo) {
        sumbitTodo.label = action.payload.value;
        sumbitTodo.editText = action.payload.value;
      }
    },
    setStatus(state, action: PayloadAction<"all" | "active" | "completed">) {
      state.status = action.payload;
    },
  },
});

export const { createData, onToogleCheck, deleteTodo, editSubmit, clearData, setStatus } = todoSlice.actions;
export default todoSlice.reducer;
