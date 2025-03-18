import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

function useGetById() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const url = `http://localhost:3000/posts/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        setData(response.data.Data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    
    if (id) fetchData();
  }, [id]); 

  return { data, loading, id }; 
}

export default useGetById;
