import React from "react";
import { Stack, Card, CardContent, Typography } from "@mui/material";
import Countup from "react-countup";

const Cards = ({ data }) => {
  return (
    <Stack
      direction={{ sm: "column", md: "row" }}
      spacing={{ xs: 3, sm: 3, md: 3 }}
    >
      <Card sx={{ minWidth: "275px", backgroundColor: "rgba(0,0,255,0.2)" }}>
        <CardContent>
          <Typography>Total Confirmed</Typography>
          <Typography>
            <Countup start={0} end={data.cases} duration={2} separator="," />
          </Typography>
          <Typography>{new Date().toDateString()}</Typography>
          <Typography>Number of confirmed cases of covid-19</Typography>
        </CardContent>
      </Card>

      <Card sx={{ minWidth: "275px", backgroundColor: "rgba(0,255,0,0.2)" }}>
        <CardContent>
          <Typography>Total Recovered</Typography>
          <Typography>
            {" "}
            <Countup
              start={0}
              end={data.recovered}
              duration={2}
              separator=","
            />
          </Typography>
          <Typography>{new Date().toDateString()}</Typography>
          <Typography>Number of Recovered cases of covid-19</Typography>
        </CardContent>
      </Card>

      <Card sx={{ minWidth: "275px", backgroundColor: "rgba(255,0,0,0.2)" }}>
        <CardContent>
          <Typography>Total Deaths</Typography>
          <Typography>
            {" "}
            <Countup start={0} end={data.deaths} duration={2} separator="," />
          </Typography>
          <Typography>{new Date().toDateString()}</Typography>
          <Typography>Number of Deaths cases of covid-19</Typography>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default Cards;
