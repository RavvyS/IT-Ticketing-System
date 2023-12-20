import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
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
    urgency: false,
    status: 0,
    created_at: "",
  });

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const updatedCreateTicket = {
      ...createTicket,
      created_at: new Date().toISOString(), // Use ISO format for date
      [name]: value,
    };
    setCreateTicket(updatedCreateTicket);
  };

  const handleSwitchChange = () => {
    setCreateTicket((prevTicket) => ({
      ...prevTicket,
      urgency: !prevTicket.urgency,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/ticket/",
        createTicket
      );
      toast.success("Ticket issued successfully");
      console.log(response);
      window.location.reload();
    } catch (error) {
      console.error("POST Request Failed:", error);
      toast.success("Failed to issue ticket");
    }
  };

  const handleUrgency = () => {
    if (createTicket.urgency === true) {
      ("yes");
    } else "no";
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
                  <Input
                    type="text"
                    name="subject"
                    value={createTicket.subject}
                    onChange={handleInputChange}
                  />
                  <FormHelperText className="mb-10">
                    Summarize your issue
                  </FormHelperText>

                  <FormLabel>Description</FormLabel>
                  <Textarea
                    placeholder="Here is a sample placeholder"
                    name="description"
                    value={createTicket.description}
                    onChange={handleInputChange}
                  />
                  <FormHelperText className="mb-10">
                    Describe your issue
                  </FormHelperText>

                  <div className="flex">
                    <FormControl>
                      <FormLabel htmlFor="Urgent">Urgent?</FormLabel>
                      <Switch
                        id="urgent"
                        colorScheme="red"
                        onChange={handleSwitchChange}
                        isChecked={createTicket.urgency}
                      />
                    </FormControl>

                    <Button type="submit" colorScheme="green">
                      Submit
                    </Button>
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
