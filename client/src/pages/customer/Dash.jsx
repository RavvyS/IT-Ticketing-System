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
  ButtonGroup,
  InputGroup,
  FormErrorMessage,
  InputLeftElement,
  Textarea,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";

const Dash = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
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

          <div className="flex items-center justify-center text-center mt-5">
            <Button colorScheme="teal" variant="outline" className="m-5">
              Create a Ticket
            </Button>
            <Button colorScheme="teal" variant="outline" className="m-5">
              Create a Ticket
            </Button>
            <Button colorScheme="teal" variant="outline" className="m-5">
              Create a Ticket
            </Button>
          </div>
        </div>
      )}

      {activeTab === 2 && (
        <div className="mt-10 mx-10">
          <Card>
            <CardHeader>
              <h1 className="text-4xl">Create Ticket</h1>
            </CardHeader>
            <CardBody>
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
                  <FormLabel>Urgent ?</FormLabel>
                  <Switch id="urgent" colorScheme="red" />

                  <Button colorScheme="green">Submit</Button>
                </div>
              </FormControl>
            </CardBody>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Dash;
