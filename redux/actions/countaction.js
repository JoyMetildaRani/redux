// redux/actions/countAction.js
export const increment = () => {
  return {
    type: 'COUNT_INCRESE',
  };
};
 
export const decrement = () => {
  return {
    type: 'COUNT_DECRESE',
  };
};

export const username =(userObj) =>{
  return{
    type:'UserName',
    payload: userObj
  }
}