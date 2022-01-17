const {CreateSStore} = require("redux")

const incCountAction ={type:"INC_COUNT",payload:1}
const decCountAction ={type:"DEC_COUNT",payload:5}
//action is always an object

//for todo action 
// const addTodoAction={
//     type:"ADD_TODO",
//     payload:{id:1,title:"Learn Redux"}
// }
class Store{
    constructor(reducer,init){
            this.reducer = reducer;
            this.state = init;
    }
    getState(){
        return this.state;
    }
    dispatch(action){
      this.state =  this.reducer(this.state,action)
    }
}

//then we create reduce its always an function 
const reducer = (state,action) => {
    if(action.type === "INC_COUNT"){
        return {...state,count:state.count + action.payload} 
    } else if(action.type === "DEC_COUNT"){
        return {...state,count:state.count - action.payload}
    }
    return state; 
}

const init = {count:0}
//it could be anything no restriction

const store = new Store (reducer,init)//fixed

// const store = createStore(reducer,init)

//all of these can be reduce using the above line so the class can be avoided easily
store.dispatch(incCountAction)
// store.dispatch(decCountAction)
console.log(store.getState())