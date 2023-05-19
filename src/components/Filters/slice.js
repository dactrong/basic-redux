const initState = {
        search:'',
        status:'All',
        priority:[]
}
const filterReducer = (state = initState ,action) =>{
     switch(action.type){
        case'filter/searchFilter':
        return{
                ...state,
                search:action.payLoad
        }

        case'status/statusFilter':
        return{
                ...state,
                status:action.payLoad
        }

        case'priority/priorityChange':
        return{
                ...state,
                priority:action.payLoad
        }
        default :
         return state;
     }
}
export default filterReducer
