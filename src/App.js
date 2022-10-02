import React, { useEffect, useState } from "react";
import Cards from "./components/Cards";
import { Box } from "@mui/material";
import getCovidData from "./apis/getCovidData";
import CoutrySelect from "./components/CoutrySelect";
const App = () => {
  const [data, setData] = useState([]);
  const [country, setCountry] = useState("iran");
  const URL = country === "all" ? `/all` : `/countries/${country}`;

  useEffect(() => {
    const getData = async () => {
      const { data } = await getCovidData.get(URL);
      setData(data);
    };
    getData();
  }, [URL]);

  const handleCountryChange = async country => {
    const { data } = await getCovidData.get(URL);
    setData(data);
    setCountry(country);
  };

  return (
    <Box
      my={5}
      mx={3}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "36px",
      }}
    >
      <Cards data={data} />
      <CoutrySelect
        data={data}
        country={country}
        handleCountryChange={handleCountryChange}
      />
    </Box>
  );
};

export default App;
