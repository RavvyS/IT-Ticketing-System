import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { Link } from "react-router-dom";

import { toast } from "sonner";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Tag,
  Stack,
  Box,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Badge,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Input,
  Textarea,
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
} from "@chakra-ui/react";
import {
  FaAnglesRight,
  FaAnglesLeft,
  FaEllipsisVertical,
  FaRegTrashCan,
  FaArrowRightToBracket,
} from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";

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
    case 3:
      return (
        <Tag size={"md"} variant={"solid"} colorScheme="red">
          Canceled
        </Tag>
      );
    default:
      return <Tag size={"md"}>Unknown Status</Tag>;
  }
};

const TicketManagementTable = () => {

  const [tableData, setTableData] = useState([]);
  // Todo
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchTicket = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/ticket/"
        );
        setTableData(response.data.response.reverse());
      } catch (error) {
        console.error(error);
        toast.error("Failed to load tickets");
      }
    };
    fetchTicket();
  }, []);

  // Todo
  useEffect(() => {
    const fetchEmail = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/user/");
        setEmail(response);
      } catch (error) {
        console.log(error);
        toast.error("Failed to load email");
      }
    };
  });


  const parseReadableId = (id) => {
    // Your custom parsing logic here
    // Example: Extract first 5 digits and prepend with "TKT-"
    return `T-${id.substring(24, 21)}`;
  };

  return (
    <>
      <TableContainer className="mt-5">
        <Table variant="simple" size={"sm"} className="">
          <TableCaption>View of the issued tickets</TableCaption>
          <Thead className="bg-gray-200 border-b">
            <Tr>
              <Th>Num</Th>
              <Th>Company</Th>
              <Th>Subject</Th>
              <Th>Status</Th>
              <Th>Urgent</Th>
              <Th>Issued Date</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {tableData.map((ticket) => (
              <Tr key={ticket._id}>
                <Td>{parseReadableId(ticket._id)}</Td>
                <Td className="font-semibold">Surge Global</Td>
                <Td>{ticket.subject}</Td>
                <Td>{getStatusLabel(ticket.status)}</Td>
                <Td>
                  {ticket.urgency ? (
                    <Badge colorScheme="red">Yes</Badge>
                  ) : (
                    <Badge>No</Badge>
                  )}
                </Td>
                <Td>{ticket.created_at}</Td>
                <Td>
                    <Link to={`/dashboard/ticketManagement/detailedView/${ticket._id}`}>
                      <FaArrowRightToBracket />
                    </Link>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

    </>
  );
};

export default TicketManagementTable;
