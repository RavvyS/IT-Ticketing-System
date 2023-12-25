import React from "react";

import SidebarLayout from "../../../components/Layouts/SidebarLayout";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Tag,
  Avatar,
  Center,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
  Textarea,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
  Box,
  CardBody,
  Card,
  Button
} from "@chakra-ui/react";
import { FaAngleRight, FaHouse } from "react-icons/fa6";
import { FaAndroid } from "react-icons/fa6";

const DetailedView = () => {
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
              <BreadcrumbLink href="/dashboard/home">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Ticket Management</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Detailed View</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>

        <div className="ml-2 mt-8 flex items-center">
          <h1 className="text-2xl font-bold">Detailed View</h1>
        </div>

        <Card className="mt-10">
          <CardBody>
            <div class="px-6 py-4 text-center">
              <h3>2023/11/10</h3>
              <br></br>
              <p className="underline">Windows not loading</p>
              <br></br>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicingpo elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
              <br></br>
            </div>
            <div class="px-6 pt-4 pb-2 text-center">
              <span class="inline-block mr-2 mb-2">
                <Tag>Urgent : Chill</Tag>
              </span>
              <span class="inline-block mr-2 mb-2">
                <Tag>Status</Tag>
              </span>
              <span class="inline-block mr-2 mb-2">
                <Tag>Company</Tag>
              </span>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <FormControl>
              <FormLabel>Change state of ticket</FormLabel>
              <Select placeholder="Select">
                <option>Working on</option>
                <option>Canceled</option>
                <option>Done</option>
                <option>Pending</option>
              </Select>
              <Button className="mt-3" colorScheme="teal">Change</Button>
            </FormControl>
          </CardBody>
        </Card>
      </SidebarLayout>
    </div>
  );
};

export default DetailedView;
