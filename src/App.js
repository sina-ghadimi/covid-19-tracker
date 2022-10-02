import React,{useEffect,useState} from "react";
import Cards from "./components/Cards";
import { Box } from "@mui/material";
import getCovidData from "./apis/getCovidData";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await getCovidData.get(URL);
      setData(data);
    };
    getData();
  }, [URL]);

  return (
    <Box>
      <Cards data={data} />
    </Box>
  );
};

export default App;
