import { useState, useEffect } from "react";
import axios from "axios";

function useGetReq() {
  const [data, setData] = useState([]);
  const url = import.meta.env.MODE === "development" ? "http://localhost:3000" : "";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}/posts`);
      
        const fetchedData = response.data.Data;
        setData(Array.isArray(fetchedData) ? fetchedData : []);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]); 
      }
    };

    fetchData();
  }, []);

  return data;
}

export default useGetReq;
