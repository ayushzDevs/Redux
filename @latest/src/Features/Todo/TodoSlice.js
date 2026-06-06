import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    Todos: [{ id: "abc", task: "demo-task", isDone: false }]
};

export const TodoSlice = createSlice({
  name: "Todo",
  initialState,  // ← use the variable you defined
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        task: action.payload,
        isDone: false,
      };
      state.Todos.push(newTodo);
    },

    deleteTodo: (state, action) => {
      state.Todos = state.Todos.filter((Todo) => Todo.id !== action.payload);
    },

    markAsDone: (state, action) => {
      state.Todos = state.Todos.map((Todo) => {
        if (Todo.id === action.payload) {
          Todo.isDone = true;
        }
        return Todo;  // ← was missing, map needs a return value
      });
    },
  },
});

export const { addTodo, deleteTodo, markAsDone } = TodoSlice.actions;
export default TodoSlice.reducer;  // ← capital T