import {createStore} from 'redux';
//1.store

export default createStore(function(state=[],action){
    // console.log(state,action);
    switch(action.type){
      case 'addlist':return [...new Set([action.houselist,...state])]
        default:return state
    }
    
    // return 1
})

