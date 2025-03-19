import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function useGetById() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const url = import.meta.env.MODE === "development" ? "http://localhost:3000" : "";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${url}/posts/${id}`);
        // Ensure correct data structure
        const fetchedData = response.data?.data || response.data;
        setData(Array.isArray(fetchedData) ? fetchedData : [fetchedData]); 
      } catch (err) {
        console.error("Error fetching data:", err);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { data, loading, id };
}

export default useGetById;
