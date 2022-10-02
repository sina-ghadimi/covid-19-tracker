import React, { useEffect, useState } from "react";
import { FormControl, NativeSelect } from "@mui/material";
import getCovidData from "../apis/getCovidData";

const CoutrySelect = ({ handleCountryChange }) => {
  const [countriesInfo, setCountriesInfo] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await getCovidData.get("/countries");
      setCountriesInfo(data);
    };
    getData();
  }, []);
  return (
    <FormControl fullWidth>
      <NativeSelect
        defaultValue=""
        onChange={e => handleCountryChange(e.target.value)}
      >
        <option value="all">Worldwide</option>
        {countriesInfo.map(({ country }, index) => {
          return <option key={index}>{country}</option>;
        })}
      </NativeSelect>
    </FormControl>
  );
};

export default CoutrySelect;
