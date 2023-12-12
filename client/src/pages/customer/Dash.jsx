import React from "react";
import Navbar from "../../components/common/Navbar";
import CustomerTicketTable from "../../components/other/CustomerTicketTable";

import { Button, ButtonGroup } from "@chakra-ui/react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";

const Dash = () => {
  return (
    <div>
      <Navbar />

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
      </div>

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
  );
};

export default Dash;
