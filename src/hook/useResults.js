import { useEffect, useState } from "react";
import axios from "axios";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const { data } = await axios({
        url: "https://powerful-reef-47354.herokuapp.com/members",
        params: {
          q: searchTerm,
        },
      });

      setResults(data);
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };

  useEffect(() => {
    searchApi("");
  }, []);

  return [searchApi, results, errorMessage];
};
