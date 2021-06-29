import { useState, useEffect } from "react";
import axios from "axios";

function useFetch() {
 const [data, setData] = useState([]);

 const fetchData = async () => {
  const { data } = await axios.get("http://localhost:3001/cars");
  setData(data);
 };

 useEffect(() => {
  fetchData();
 }, []);

 return [...data];
}

export default useFetch;
