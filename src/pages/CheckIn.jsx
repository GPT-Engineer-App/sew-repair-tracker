import React, { useState } from "react";
import { Container, VStack, HStack, Text, Button, Input, Box } from "@chakra-ui/react";

const CheckIn = () => {
  const [customer, setCustomer] = useState({ name: "", email: "", phone: "" });
  const [machine, setMachine] = useState({ make: "", model: "", checkedInBy: "", timestamp: "" });
  const [wipNumber, setWipNumber] = useState("");

  const generateWipNumber = () => {
    const uniqueNumber = `WIP-${Math.floor(Math.random() * 1000000)}`;
    setWipNumber(uniqueNumber);
  };

  const handleCheckIn = () => {
    const timestamp = new Date().toISOString();
    const updatedMachine = { ...machine, timestamp };
    setMachine(updatedMachine);
    generateWipNumber();

    const customers = JSON.parse(localStorage.getItem("customers")) || [];
    const machines = JSON.parse(localStorage.getItem("machines")) || [];

    customers.push(customer);
    machines.push(updatedMachine);

    localStorage.setItem("customers", JSON.stringify(customers));
    localStorage.setItem("machines", JSON.stringify(machines));
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl" fontWeight="bold">
          Customer Check-In
        </Text>
        <Input placeholder="Name" value={customer.name} onChange={(e) => setCustomer({ ...customer, name: e.target.value })} />
        <Input placeholder="Email" value={customer.email} onChange={(e) => setCustomer({ ...customer, email: e.target.value })} />
        <Input placeholder="Phone" value={customer.phone} onChange={(e) => setCustomer({ ...customer, phone: e.target.value })} />
        <Input placeholder="Machine Make" value={machine.make} onChange={(e) => setMachine({ ...machine, make: e.target.value })} />
        <Input placeholder="Machine Model" value={machine.model} onChange={(e) => setMachine({ ...machine, model: e.target.value })} />
        <Input placeholder="Checked In By" value={machine.checkedInBy} onChange={(e) => setMachine({ ...machine, checkedInBy: e.target.value })} />
        <Button onClick={handleCheckIn} colorScheme="teal">
          Check In
        </Button>
        {wipNumber && (
          <Box p={4} borderWidth="1px" borderRadius="md" width="100%">
            <Text>WIP Number: {wipNumber}</Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default CheckIn;
