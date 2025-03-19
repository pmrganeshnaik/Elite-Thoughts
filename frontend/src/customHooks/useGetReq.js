import { useState, useEffect } from "react";
import axios from "axios";
// https://elite-thoughts.onrender.com
function useGetReq() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const url = import.meta.env.MODE === "development" ? "http://localhost:3000" : "";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}/posts`);
        console.log("API Response:", response.data); // Debugging

        const fetchedData = response.data.data; 
        setData(Array.isArray(fetchedData) ? fetchedData : []);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchData();
  }, []);

  return { data, loading };
}

export default useGetReq;
