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
} from "@chakra-ui/react";

const CustomerTicketTable = () => {
  const [tableData, setTableData] = useState([]);

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
                <Td>{ticket.status}</Td>
                <Td>{ticket.urgency}Yes</Td>
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
    </>
  );
};

export default CustomerTicketTable;
