// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action) => {
 switch (action.type) {
  case "GET_CARS":
   return [...action.payload];
  default:
   return state;
 }
};
