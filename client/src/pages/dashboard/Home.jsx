import React from "react";
import BasicBars from "../../components/other/BasicBars";
import Card from "@mui/joy/Card";
import Typography from '@mui/joy/Typography';
import TicketCardContainer from "../../components/containers/TicketCardContainer";
import SimpleLineChart from "../../components/other/SimpleLineChart";

const Home = () => {
  return (
    <div>
      <TicketCardContainer />

      <div class="flex justify-end items-center m-7">
        <div class="bg-white p-4 rounded-lg shadow-lg">
          <Card size="lg">
          <Typography level="title-lg">Monthly Sales Figures </Typography>
            <SimpleLineChart />
          </Card>
        </div>
      
this
      <div class="flex justify-start items-center m-7">
        <div class="bg-white p-4 rounded-lg shadow-lg">
          <Card size="lg">
          <Typography level="title-lg">Annual Raised Tickets</Typography>
            <BasicBars />
          </Card>
        </div>
      </div>
      </div>

    </div>
  );
};

export default Home;
