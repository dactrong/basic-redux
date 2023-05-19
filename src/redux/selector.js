// export const todoListSelector = (state) =>
// {
//     const todoRemaining = state.todoList.filter((todo) =>{
//         return todo.name.includes(state.filters.search)
//     })
//     return todoRemaining;
// }

import { createSelector } from "reselect";

export const searchSelector = (state) => state.filters.search;
export const filterSelector = (state) => state.filters.status;
export const todoListSelector = (state) => state.todoList;
export const filterPrioritySelector = (state) => state.filters.priority;

export const todosRemainingSelector = createSelector(
  todoListSelector,
  filterSelector,
  searchSelector,
  filterPrioritySelector,
  (todoList, status, searchText, priorites) => {
    //status => "all" 'Completed' 'Todo'

    return todoList.filter((todo) => {
      if (status === "All") {
        return priorites.length
          ? todo.name.includes(searchText) && priorites.includes(todo.priority)
          : todo.name.includes(searchText);
      }
      return (
        todo.name.includes(searchText) &&
        (status === "Completed"
          ? todo.completed
          : !todo.completed &&
            (priorites.length ? priorites.includes(todo.priority) : true))
      );
    });
  }
);
