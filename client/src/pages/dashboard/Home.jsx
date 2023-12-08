import React from "react";
import BasicBars from "../../components/other/BasicBars";
import Card from "@mui/joy/Card";
import TicketCardContainer from "../../components/containers/TicketCardContainer";


const Home = () => {
  return (
    <div>
      <TicketCardContainer />
      <BasicBars />
      <Card size="lg">Large card</Card>
    </div>
  );
};

export default Home;
