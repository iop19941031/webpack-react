import State from './state'
// 这是reducer
const reducer = (state = State, action) => {
  switch (action.type) {
    case '涨工资':
      return {
        tiger: state.tiger + 100,
        ff: 1
      }
    case '扣工资':
      return {
        tiger: state.tiger - 100,
        ff: 2
      }
    default:
      return state
  }
}
export default reducer
