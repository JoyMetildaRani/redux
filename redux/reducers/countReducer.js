// redux/reducers/countReducer.js
const initialState = {
  count: 0,
  usr : ''
};
 
export default (state = initialState, action) => {
  
  switch (action.type) {
    case 'COUNT_INCRESE':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'COUNT_DECRESE':
      return {
        ...state,
        count: state.count - 1,
      };
    case 'UserName':
    return {
      ...state,
      usr : action.payload
    }
    default:
      return state;
  }
};