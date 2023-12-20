import React, { useState, useEffect } from "react";
import axios from "axios";
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
} from "@chakra-ui/react";
import {
  FaAnglesRight,
  FaAnglesLeft,
  FaEllipsisVertical,
  FaRegTrashCan,
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

const ITEMS_PER_PAGE = 10;

const CustomerTicketTable = () => {
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [editSelected, setEditSelected] = useState(null);

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

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/v1/ticket/${id}`
      );
      console.log("Delete response:", response);
      setTableData((prevTableData) =>
        prevTableData.filter((ticket) => ticket._id !== id)
      );
      toast.success(`Ticket removed successfully`);
    } catch (error) {
      console.error(error);
      toast.error("Failed to remove ticket");
    }
  };

  const totalPages = Math.ceil(tableData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = tableData.slice(startIndex, endIndex);

  const handleEdit = (ticket) => {
    setEditSelected(ticket);
    onOpen();
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

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
                <Td>
                  {ticket.urgency ? (
                    <Badge colorScheme="red">Yes</Badge>
                  ) : (
                    <Badge>No</Badge>
                  )}
                </Td>
                <Td>{ticket.created_at}</Td>
                <Td>
                  <Menu>
                    <MenuButton
                      as={IconButton}
                      icon={<FaEllipsisVertical />}
                    ></MenuButton>
                    <MenuList>
                      <MenuItem icon={<FaRegEdit />} onClick={ () => handleEdit(ticket)}>
                        Edit
                      </MenuItem>
                      <MenuItem
                        icon={<FaRegTrashCan />}
                        onClick={() => handleDelete(ticket._id)}
                      >
                        Remove
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <Stack
        direction="row"
        justify="center"
        mt={4}
        spacing={4}
        className="m-5"
      >
        <HStack>
          <IconButton
            icon={<FaAnglesLeft />}
            onClick={() => handlePageChange(currentPage - 1)}
            isDisabled={currentPage === 1}
          />
          <Box>{`${currentPage} of ${totalPages}`}</Box>
          <IconButton
            icon={<FaAnglesRight />}
            onClick={() => handlePageChange(currentPage + 1)}
            isDisabled={currentPage === totalPages}
          />
        </HStack>
      </Stack>
      {/* Pagination End */}

      {/* Update/Edit Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          {editSelected && (
              <>
                <h1>{editSelected.subject}</h1>
                <p>{editSelected.description}</p>
              </>
            )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* Update/Edit Modal */}
    </>
  );
};

export default CustomerTicketTable;
