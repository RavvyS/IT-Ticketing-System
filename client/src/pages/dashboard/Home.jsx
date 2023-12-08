import React from "react";
import BasicBars from "../../components/other/BasicBars";
import Card from "@mui/joy/Card";
import TicketCardContainer from "../../components/containers/TicketCardContainer";

const Home = () => {
  return (
    <div>
      <TicketCardContainer />

      <div class="flex justify-end items-center m-7">
        <div class="bg-white p-4 rounded-lg shadow-lg">
          <Card size="lg">
            <BasicBars />
          </Card>
        </div>
      </div>

    </div>
  );
};

export default Home;
