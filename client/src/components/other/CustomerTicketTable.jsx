import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Tag,
  Stack,
  Box,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { FaAnglesRight, FaAnglesLeft } from "react-icons/fa6";

const getStatusLabel = (status) => {
  switch (status) {
    case 0:
      return <Tag size={"md"} variant={'solid'} colorScheme="yellow">Pending</Tag>;
    case 1:
      return <Tag size={"md"} variant={'solid'} colorScheme="cyan">Working On</Tag>;
    case 2:
      return <Tag size={"md"} variant={'solid'} colorScheme="green">Completed</Tag>;
    case 4:
      return <Tag size={"md"} variant={'solid'} colorScheme="red">Canceled</Tag>;
    default:
      return <Tag size={"md"}>Unknown Status</Tag>;
  }
};

const ITEMS_PER_PAGE = 10

const CustomerTicketTable = () => {
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1) 

  useEffect(() => {
    const fetchTicket = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/ticket/"
        );
        setTableData(response.data.response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTicket();
  }, []);

  const totalPages = Math.ceil(tableData.length/ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentItems = tableData.slice(startIndex, endIndex)

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage)
  }

  return (
    <>
      <TableContainer className="mt-5">
        <Table variant="simple" size={"sm"}>
          <TableCaption>View of the issued tickets</TableCaption>
          <Thead className="bg-gray-200 border-b">
            <Tr>
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
                <Td>{ticket.subject}</Td>
                <Td>{getStatusLabel(ticket.status)}</Td>
                <Td>{ticket.urgency ? "Yes" : "No"}</Td>
                <Td>{ticket.created_at}</Td>
                <Td>
                  <Button colorScheme="teal" variant="outline">
                    Edit
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <Stack direction="row" justify="center" mt={4} spacing={4} className="m-5">
        <HStack>
          <IconButton
            icon={<FaAnglesLeft />}
            onClick={() => handlePageChange(currentPage - 1)}
            isDisabled={currentPage === 1}
          />
          <Box>{`${currentPage} of ${totalPages}`}</Box>
          <IconButton
            icon={<FaAnglesRight/>}
            onClick={() => handlePageChange(currentPage + 1)}
            isDisabled={currentPage === totalPages}
          />
        </HStack>
      </Stack>
      {/* Pagination End */}
    </>
  );
};

export default CustomerTicketTable;
