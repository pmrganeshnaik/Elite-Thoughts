import { useState, useEffect } from "react";
import axios from "axios";

function useGetReq() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/posts");
        setData(response.data.Data); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return data; 
}

export default useGetReq;
