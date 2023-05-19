const initState = [
  { id: 1, name: "Nguyễn Đắc Trọng", completed: false, priority: "Medium" },
  { id: 2, name: "Nguyễn Đắc Phương", completed: true, priority: "High" },
  { id: 3, name: "Nguyễn Đắc Cường", completed: false, priority: "Low" },
];
const todoListReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payLoad];

    case "toggle/toggleStatus":
      return state.map((todo) =>
        todo.id === action.payLoad
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
};
export default todoListReducer;
