import { useState, useEffect } from "react";
import axios from "axios";

import { toast } from "sonner";
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
} from "@chakra-ui/react";

const Home = () => {
  // Pie-Chart
  const [ticketSummary, setTicketSummary] = useState({
    labels: ["Completed", "Pending", "Working On", "Cancelled"],
    datasets: [
      {
        label: ["Tickets"],
        data: [],
        fill: false,
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(75, 192, 192)",
          "rgb(255, 99, 132)",
          "rgb(255, 205, 86)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  });

  const [countPending, setPendingCount] = useState([]);
  const [countWorkingOn, setCountWorkingOn] = useState([]);
  const [countCancelled, setCountCancelled] = useState([]);
  const [countCompleted, setCountCompleted] = useState([]);

  const fetchTicketCount = async (status, setterFunction) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/v1/ticket/status/${status}`
      );
      const data = response.data;
      setterFunction(data.count);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load ticket counts");
    }
  };

  const updateTicketSummary = () => {
    setTicketSummary((prevTicketSummary) => ({
      ...prevTicketSummary,
      datasets: [
        {
          ...prevTicketSummary.datasets[0],
          data: [countCompleted, countPending, countWorkingOn, countCancelled],
        },
      ],
    }));
  };

  useEffect(() => {
    fetchTicketCount(0, setPendingCount);
  }, []);

  useEffect(() => {
    fetchTicketCount(1, setCountWorkingOn);
  }, []);

  useEffect(() => {
    fetchTicketCount(2, setCountCompleted);
  }, []);

  useEffect(() => {
    fetchTicketCount(3, setCountCancelled);
  }, []);

  useEffect(() => {
    // Update the pie chart data whenever any of the ticket counts change
    updateTicketSummary();
  }, [countPending, countWorkingOn, countCompleted, countCancelled]);

  return (
    <div>
      <SidebarLayout>
        <Card className="m-5">
          <CardBody>
            <StatGroup>
              <Stat>
                <StatLabel>Pending</StatLabel>
                <StatNumber>{countPending}</StatNumber>
                <StatHelpText>
                  <StatArrow type="increase" />
                  23.36%
                </StatHelpText>
              </Stat>

              <Stat>
                <StatLabel>Working on</StatLabel>
                <StatNumber>{countWorkingOn}</StatNumber>
                <StatHelpText>
                  <StatArrow type="increase" />
                  69.36%
                </StatHelpText>
              </Stat>

              <Stat>
                <StatLabel>Cancelled</StatLabel>
                <StatNumber>{countCancelled}</StatNumber>
                <StatHelpText>
                  <StatArrow type="decrease" />
                  9.05%
                </StatHelpText>
              </Stat>

              <Stat>
                <StatLabel>Completed</StatLabel>
                <StatNumber>{countCompleted}</StatNumber>
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
              <h3 className="font-semibold text-xl text-center mb-3">Monthly Summary</h3>
                <PieChart chartData={ticketSummary} className="w-full" />
              </CardBody>
            </Card>
          </div>

          <div className="w-96 shadow-lg m-5">
            <Card>
              <CardBody>
              <h3 className="font-semibold text-xl text-center mb-3">Monthly Summary</h3>
                <PieChart chartData={ticketSummary} className="w-full" />
              </CardBody>
            </Card>
          </div>

          <div className="w-96 shadow-lg m-5">
            <Card>
              <CardBody>
              <h3 className="font-semibold text-xl text-center mb-3">Monthly Summary</h3>
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
