import React from "react";
import SidebarLayout from "../../components/Layouts/SidebarLayout";
import TicketManagementTable from "../../components/other/TicketManagementTable";

import { FaAngleRight, FaHouse } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { TbReportAnalytics } from "react-icons/tb";
import { IoMdAddCircleOutline } from "react-icons/io";

import { Tooltip } from "react-tooltip";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const TicketManagement = () => {
  return (
    <div>
      <SidebarLayout>
        <div className="text-xs m-2">
          <Breadcrumb
            spacing="8px"
            separator={<FaAngleRight color="gray.500" />}
          >
            <BreadcrumbItem>
              <BreadcrumbLink href="#">
                <FaHouse />
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Ticket Management</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>

        <div className="ml-2 mt-8 flex items-center">
          <h1 className="text-2xl font-bold">Ticket Management</h1>
          <Tooltip id="report" style={{ borderRadius: "10px" }} place="left" />
          <Tooltip id="add" style={{ borderRadius: "10px" }} />
          <Button
            colorScheme="gray"
            size="md"
            variant="outline"
            className="ml-auto"
            data-tooltip-id="report"
            data-tooltip-content="Get Report"
          >
            <TbReportAnalytics />
          </Button>
          <Button
            colorScheme="gray"
            size="md"
            variant="outline"
            className="ml-1"
            data-tooltip-id="add"
            data-tooltip-content="Add task"
          >
            <IoMdAddCircleOutline />
          </Button>
        </div>

        <div className="ml-2 mt-5">
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

        <TicketManagementTable />
      </SidebarLayout>
    </div>
  );
};

export default TicketManagement;
