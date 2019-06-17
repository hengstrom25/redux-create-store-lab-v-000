export default function createStore(reducer) {

<<<<<<< HEAD
  let state; 
  
  function getState() {
    return state;
  }
  
  function dispatch(action){
    state = reducer(state, action)
    render()
  }
  
  dispatch({ type: '@@INIT'})
  
  return {
    dispatch, 
    getState
    }
=======
let state; 

function reducer(state = {count: 0}, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}

function dispatch(action){
  state = reducer(state, action)
  render()
>>>>>>> 0742f7095e8ac262a02ceabeb191d83bdddb7ac4
}


function render() {
  const container = document.getElementById('container');
}

