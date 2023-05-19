import filterSlice from "../components/Filters/slice";
import todoListSlice from "../components/TodoList/slice";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    filters: filterSlice.reducer,
    todoList: todoListSlice.reducer,
  },
});
export default store;
