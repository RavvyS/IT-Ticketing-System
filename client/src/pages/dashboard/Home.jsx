import React from "react";
import { useState } from "react";

import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";

import PieChart from "../../components/other/PieChart";
import LineChart from "../../components/other/LineChart";

import SidebarLayout from "../../components/Layouts/SidebarLayout";

import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Image,
  Text,
  Stack,
  Heading,
} from "@chakra-ui/react";

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

  const [anal, setAnal] = useState({
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: ["Data 1"],
        data: [50, 60, 20, 80, 50, 100],
        fill: false,
        backgroundColor: ["rgba(75, 192, 192, 0.2)"],
        borderColor: ["rgb(75, 192, 192)"],
        borderWidth: 1,
      },
      {
        label: ["Data 2"],
        data: [10, 80, 70, 65, 50, 30],
        fill: false,
        backgroundColor: ["rgb(255, 99, 132, 0.2)"],
        borderColor: ["rgb(255, 99, 132)"],
        borderWidth: 1,
      },
      {
        label: ["Data 3"],
        data: [10, 20, 30, 15, 80, 80],
        fill: false,
        backgroundColor: ["rgb(255, 159, 64, 0.2)"],
        borderColor: ["rgb(255, 159, 64)"],
        borderWidth: 1,
      },
    ],
  });

  return (
    <div>
      <SidebarLayout>
      <div className="w-full h-96">
      <Card>
        <CardBody>
          <LineChart chartData={anal} />
        </CardBody>
      </Card>
    </div>

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
