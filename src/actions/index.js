import axios from "axios";
const URL = "https://cars-project-api.netlify.app/.netlify/functions/cars";

export const getCars = () => async (dispatch) => {
 const { data } = await axios.get(URL);


 dispatch({
  type: "GET_CARS",
  payload: data,
 });
};
