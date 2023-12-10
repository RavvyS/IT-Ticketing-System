import React from "react";
import { useState } from "react";
import PieChart from "../../components/other/PieChart";
import SidebarLayout from "../../components/Layouts/SidebarLayout";

import { Card, CardBody } from "@chakra-ui/react";

const Home = () => {
  const [ticketSummary, setTicketSummary] = useState({
    labels: ["Completed", "Pending"],
    datasets: [
      {
        label: ["Completed", "Pending"],
        data: [50, 80],
        fill: false,
        backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgb(75, 192, 192)", "rgb(255, 99, 132)"],
        borderWidth: 1,
      },
    ],
  });

  return (
    <div>
      <SidebarLayout>

        <div className="flex space-x-5">

          <div className="w-96 shadow-lg m-5">
            <Card>
              <CardBody>
                <PieChart chartData={ticketSummary} className="w-full" />
              </CardBody>
            </Card>
          </div>

          <div className="w-96 shadow-lg m-5">
            <Card>
              <CardBody>
                <PieChart chartData={ticketSummary} className="w-full" />
              </CardBody>
            </Card>
          </div>
          
        </div>

      </SidebarLayout>
    </div>
  );
};

export default Home;
