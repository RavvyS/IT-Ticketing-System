import React from "react";
import BasicBars from "../../components/other/BasicBars";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import TicketCardContainer from "../../components/containers/TicketCardContainer";
import SimpleLineChart from "../../components/other/SimpleLineChart";
import HomeTable from "../../components/other/HomeTable";
import Sidebar from "../../components/common/Sidebar";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row">

      {/* Sidebar */}
      <Sidebar />

      <div className="p-4 md:p-7 text-2xl font-semibold flex-1 h-screen">

        {/* Main content area */}
        <TicketCardContainer />

        <div className="md:flex justify-between items-center m-4 md:m-5">
          <div className="md:w-1/2 md:mr-3 bg-white p-4 rounded-lg shadow-lg">
            <Card size="lg">
              <Typography level="title-lg">Monthly Sales Figures</Typography>
              <SimpleLineChart />
            </Card>
          </div>

          <div className="md:w-1/2 md:ml-3 bg-white p-4 rounded-lg shadow-lg">
            <Card size="lg">
              <Typography level="title-lg">Annual Raised Tickets</Typography>
              <BasicBars />
            </Card>
          </div>
        </div>

        <div className="md:flex justify-end items-center m-4 md:m-5">
          <Card size="lg">
            <HomeTable />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
