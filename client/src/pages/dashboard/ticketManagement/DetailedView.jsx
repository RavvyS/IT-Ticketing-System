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

} from "@chakra-ui/react";
import { FaAngleRight, FaHouse } from "react-icons/fa6";
import { FaAndroid } from "react-icons/fa6";

const steps = [
  { title: "First", description: "Analyze Ticket" },
  { title: "Second", description: "Categorize Ticket" },
  { title: "Third", description: "Select State" },
];

const DetailedView = () => {
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

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

        {/* Cards */}
        <div className="flex my-5">
          <div class="max-w-sm rounded-xl overflow-hidden shadow-lg mt-20 mr-5">
            <div class="px-6 py-4 text-center">
              <div class="font-bold text-xl mb-5">Ticket categorization</div>
              <FormControl>
                <FormLabel>Issue relation</FormLabel>
                <Select className="mb-5" placeholder="Select">
                  <option>Networking</option>
                  <option>Software</option>
                  <option>OS</option>
                  <option>Server</option>
                  <option>Hardware</option>
                  <option>Other</option>
                </Select>

                <FormLabel>Diagnosis</FormLabel>
                <Textarea
                  size="mb"
                  placeholder="Enter the high level diagnostic"
                />
              </FormControl>
            </div>
          </div>

          {/* Ticket sub/Desc and details */}
          <div class="max-w-sm mx-auto rounded-xl overflow-hidden shadow-lg">
            <div>
              <Center>
                <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
              </Center>
            </div>
            <div class="px-6 py-4 text-center">
              <div class="font-bold text-xl mb-2">General details</div>
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
          </div>
          {/* end */}

          <div class="max-w-sm rounded-xl overflow-hidden shadow-lg mt-20">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor st amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
        </div>

        <Stepper index={activeStep} className="mt-20">
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIndicator>
                <StepStatus
                  complete={<StepNumber />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>

              <Box flexShrink="0">
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </Box>

              <StepSeparator />
            </Step>
          ))}
        </Stepper>
      </SidebarLayout>
    </div>
  );
};

export default DetailedView;
