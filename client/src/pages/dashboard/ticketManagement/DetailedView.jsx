import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { toast } from "sonner";

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
  Button,
} from "@chakra-ui/react";
import { FaAngleRight, FaHouse } from "react-icons/fa6";
import { FaAndroid } from "react-icons/fa6";

const DetailedView = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [selectedState, setSelectedState] = useState("");

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/ticket/${id}`
        );
        setDetails(response.data.response);
      } catch (error) {
        console.error(error);
        toast.error("failed to load details");
      }
    };
    fetchDetails();
  }, [id]);

  const handleSubmit = async () => {
    try {
      const response = await axios.patch(
        `http://localhost:5000/api/v1/ticket/${id}/updateStatus`,
        { status: selectedState }
      );

      setSelectedState(response.data.response);
      toast.success("State updated successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update state");
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 0:
        return (
          <Tag size={"md"} variant={"solid"} colorScheme="yellow">
            Pending
          </Tag>
        );
      case 1:
        return (
          <Tag size={"md"} variant={"solid"} colorScheme="cyan">
            Working On
          </Tag>
        );
      case 2:
        return (
          <Tag size={"md"} variant={"solid"} colorScheme="green">
            Completed
          </Tag>
        );
      case 4:
        return (
          <Tag size={"md"} variant={"solid"} colorScheme="red">
            Canceled
          </Tag>
        );
      default:
        return <Tag size={"md"}>Unknown Status</Tag>;
    }
  };

  return (
    <div>
      <SidebarLayout>
        <div className="text-xs m-2">
          <Breadcrumb
            spacing="8px"
            separator={<FaAngleRight color="gray.500" />}
          >
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard/Home">
                <FaHouse />
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard/Home">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard/ticketManagement">
                Ticket Management
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="">Detailed View</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>

        <div className="ml-2 mt-8 flex items-center">
          <h1 className="text-2xl font-bold">Detailed View</h1>
        </div>

        <Card className="mt-10">
          <CardBody>
            <div className="px-6 py-4 text-center">
              <h3>{details.created_at}</h3>
              <br></br>
              <p className="underline">{details.subject}</p>
              <br></br>
              <p>{details.description}</p>
              <br></br>
            </div>
            <div className="px-6 pt-4 pb-2 text-center">
              <span className="inline-block mr-2 mb-2">
                {details.urgency ? (
                  <Tag colorScheme="red">Urgent</Tag>
                ) : (
                  <Tag colorScheme="teal">Chill</Tag>
                )}
              </span>
              <span className="inline-block mr-2 mb-2">
                {getStatusLabel(details.status)}
              </span>
              <span className="inline-block mr-2 mb-2">
                <Tag>Company</Tag>
              </span>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
          <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
              <FormControl>
                <FormLabel>Change state of ticket</FormLabel>
                <Select
                  placeholder="Select"
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                >
                  <option value={1}>Working on</option>
                  <option value={2}>Completed</option>
                  <option value={3}>Canceled</option>
                  <option value={0}>Pending</option>
                </Select>
                <Button type="submit" className="mt-3" colorScheme="teal">
                  Change
                </Button>
              </FormControl>
            </form>
          </CardBody>
        </Card>
      </SidebarLayout>
    </div>
  );
};

export default DetailedView;
