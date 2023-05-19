export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payLoad: data,
  };
};
export const searchFilterChange = (text) =>{

  return{
    type: "filter/searchFilter",
    payLoad: text,
  }
}

export const searchFilterStatus = (status) =>{

  return{
    type: "status/statusFilter",
    payLoad: status,
  }
}
export const prorityFilterChanges = (value) =>{

  return{
    type: "priority/priorityChange",
    payLoad: value,
  }
}
export const toggleTodoStatus = (idTodo) =>{

  return{
    type: "toggle/toggleStatus",
    payLoad: idTodo,
  }
}