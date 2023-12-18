import React, { useState } from "react";
import Navbar from "../../components/common/Navbar";
import CustomerTicketTable from "../../components/other/CustomerTicketTable";

import {
  Button,
  Input,
  Select,
  Flex,
  FormControl,
  FormLabel,
  FormHelperText,
  Switch,
  Textarea,
  Card,
  CardHeader,
  CardBody,
} from "@chakra-ui/react";

const Dash = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [createTicket, setCreateTicket] = useState({
    subject: "",
    description: "",
    urgency: "",
    status: 1,
    created_at: "",
  });

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/ticket/",
        createTicket
      );
      console.log("POST Request Successful:", response);
      window.location.reload();
    } catch (error) {
      console.error("POST Request Failed:", error);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="flex justify-center items-center mb-5">
        <div role="tablist" className="tabs tabs-boxed">
          <a
            role="tab"
            className={`tab ${activeTab === 1 ? "tab-active" : ""}`}
            onClick={() => handleTabClick(1)}
          >
            View Tickets
          </a>
          <a
            role="tab"
            className={`tab ${activeTab === 2 ? "tab-active" : ""}`}
            onClick={() => handleTabClick(2)}
          >
            Create Ticket
          </a>
        </div>
      </div>

      {activeTab === 1 && (
        <div className="mt-10 mx-10">
          <Flex>
            <Input
              flex="4"
              mr="2"
              variant="outline"
              size="sm"
              placeholder="Search"
              rounded="md"
            />
            <Select
              flex="1"
              mr="2"
              variant="outline"
              size="sm"
              placeholder="Filter"
              rounded="md"
            />
            <Select
              flex="1"
              mr="2"
              variant="outline"
              size="sm"
              placeholder="Number"
              rounded="md"
            />
            <Select
              flex="1"
              variant="outline"
              size="sm"
              placeholder="Choose"
              rounded="md"
            />
          </Flex>

          <CustomerTicketTable />
        </div>
      )}

      {activeTab === 2 && (
        <div className="mt-10 mx-10">
          <Card>
            <CardHeader>
              <h1 className="text-4xl">Create Ticket</h1>
            </CardHeader>
            <CardBody>
              <form onSubmit={handleSubmit}>
                <FormControl>
                  <FormLabel>Subject</FormLabel>
                  <Input type="text" />
                  <FormHelperText className="mb-10">
                    Summarize your issue
                  </FormHelperText>

                  <FormLabel>Description</FormLabel>
                  <Textarea placeholder="Here is a sample placeholder" />
                  <FormHelperText className="mb-10">
                    Describe your issue
                  </FormHelperText>

                  <div className="flex">
                    <FormControl>
                      <FormLabel htmlFor="Urgent">Urgent?</FormLabel>
                      <Switch id="urgent" colorScheme="red" />
                    </FormControl>

                    <Button colorScheme="green">Submit</Button>
                  </div>
                </FormControl>
              </form>
            </CardBody>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Dash;
