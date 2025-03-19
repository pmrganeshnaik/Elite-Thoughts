import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; // Correct import

function useGetById() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = import.meta.env.MODE === "development" ? "http://localhost:3000" : "";

  useEffect(() => {
    if (!id) return; // Prevent unnecessary fetch calls

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`${url}/posts/${id}`);
        if (response.data && response.data.Data) {
          setData(response.data.Data);
        } else {
          throw new Error("Invalid data format");
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { data, loading, error, id };
}

export default useGetById;
