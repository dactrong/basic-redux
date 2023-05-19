// const initState = {
//         search:'',
//         status:'All',
//         priority:[]
// }
// const filterReducer = (state = initState ,action) =>{
//      switch(action.type){
//         case'filter/searchFilter':
//         return{
//                 ...state,
//                 search:action.payLoad
//         }

//         case'status/statusFilter':
//         return{
//                 ...state,
//                 status:action.payLoad
//         }

//         case'priority/priorityChange':
//         return{
//                 ...state,
//                 priority:action.payLoad
//         }
//         default :
//          return state;
//      }
// }
// export default filterReducer

// redux tookit
import { createSlice } from "@reduxjs/toolkit";
export default createSlice({
  name:"filters",
  initialState: {
    search: "",
    status: "All",
    priority: [],
  },
  reducers: {
    statusFilter: (state, actions) => {
      //   mutation  || IMMER
      state.status = actions.payload;
    }, // =>{type: 'status/statusFilter'}
    priorityChange: (state, actions) => {
      state.priority = actions.payload;
    },
    searchFilter: (state, actions) => {
      state.search = actions.payload;
    },
  },
});
