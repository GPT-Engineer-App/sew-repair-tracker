import React, { useState } from "react";
import { Container, VStack, HStack, Text, Button, Input, Select, Box, IconButton } from "@chakra-ui/react";
import { FaCheck, FaClock, FaWrench, FaTrash } from "react-icons/fa";

const Index = () => {
  const [tickets, setTickets] = useState([]);
  const [newTicket, setNewTicket] = useState({ description: "", status: "upcoming" });

  const addTicket = () => {
    setTickets([...tickets, { ...newTicket, id: Date.now() }]);
    setNewTicket({ description: "", status: "upcoming" });
  };

  const updateTicketStatus = (id, status) => {
    setTickets(tickets.map((ticket) => (ticket.id === id ? { ...ticket, status } : ticket)));
  };

  const deleteTicket = (id) => {
    setTickets(tickets.filter((ticket) => ticket.id !== id));
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl" fontWeight="bold">
          Sewing Machine Repair Tickets
        </Text>

        <HStack width="100%">
          <Input placeholder="Repair Description" value={newTicket.description} onChange={(e) => setNewTicket({ ...newTicket, description: e.target.value })} />
          <Select value={newTicket.status} onChange={(e) => setNewTicket({ ...newTicket, status: e.target.value })} width="150px">
            <option value="upcoming">Upcoming</option>
            <option value="ongoing">Ongoing</option>
            <option value="completed">Completed</option>
          </Select>
          <Button onClick={addTicket} colorScheme="teal">
            Add Ticket
          </Button>
        </HStack>

        <VStack spacing={4} width="100%">
          {tickets.map((ticket) => (
            <Box key={ticket.id} p={4} borderWidth="1px" borderRadius="md" width="100%">
              <HStack justifyContent="space-between">
                <Text>{ticket.description}</Text>
                <HStack>
                  {ticket.status !== "completed" && <IconButton aria-label="Mark as Completed" icon={<FaCheck />} onClick={() => updateTicketStatus(ticket.id, "completed")} colorScheme="green" />}
                  {ticket.status !== "ongoing" && <IconButton aria-label="Mark as Ongoing" icon={<FaWrench />} onClick={() => updateTicketStatus(ticket.id, "ongoing")} colorScheme="yellow" />}
                  {ticket.status !== "upcoming" && <IconButton aria-label="Mark as Upcoming" icon={<FaClock />} onClick={() => updateTicketStatus(ticket.id, "upcoming")} colorScheme="blue" />}
                  <IconButton aria-label="Delete Ticket" icon={<FaTrash />} onClick={() => deleteTicket(ticket.id)} colorScheme="red" />
                </HStack>
              </HStack>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
