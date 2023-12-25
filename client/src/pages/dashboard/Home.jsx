import React from "react";
import { useState } from "react";
import axios from 'axios'

import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";

import PieChart from "../../components/other/PieChart";

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

  return (
    <div>
      <SidebarLayout>
        
      <Card className="m-5">
      <CardBody>
        <StatGroup>
          <Stat>
            <StatLabel>Pending</StatLabel>
            <StatNumber>345,670</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              23.36%
            </StatHelpText>
          </Stat>

          <Stat>
            <StatLabel>Working on</StatLabel>
            <StatNumber>345,670</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              69.36%
            </StatHelpText>
          </Stat>

          <Stat>
            <StatLabel>Canceled</StatLabel>
            <StatNumber>45</StatNumber>
            <StatHelpText>
              <StatArrow type="decrease" />
              9.05%
            </StatHelpText>
          </Stat>

          <Stat>
            <StatLabel>Completed</StatLabel>
            <StatNumber>45</StatNumber>
            <StatHelpText>
              <StatArrow type="decrease" />
              9.05%
            </StatHelpText>
          </Stat>
          
        </StatGroup>
        </CardBody>
        </Card>

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
