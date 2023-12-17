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
} from "@chakra-ui/react";

const CustomerTicketTable = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const response = axios.get("http://localhost:5000/ticket/");
    
  });

  return (
    <>
      <TableContainer className="mt-5">
        <Table variant="simple" size={"sm"}>
          <TableCaption>View of the issued tickets</TableCaption>
          <Thead className="bg-gray-200 border-b">
            <Tr>
              <Th>Subject</Th>
              <Th>Urgent</Th>
              <Th>Status</Th>
              <Th>Issued Date</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td>millimetres (mm)</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td>millimetres (mm)</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td>millimetres (mm)</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CustomerTicketTable;
