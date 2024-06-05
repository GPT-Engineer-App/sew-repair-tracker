import React, { useState } from "react";
import { Container, VStack, HStack, Text, Box, Select, Button } from "@chakra-ui/react";

const TechDashboard = () => {
  const [machines, setMachines] = useState([]);
  const [selectedMachine, setSelectedMachine] = useState(null);

  const allocateMachine = (machineId, techId) => {
    setMachines(machines.map((machine) => (machine.id === machineId ? { ...machine, techId } : machine)));
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl" fontWeight="bold">
          Technician Dashboard
        </Text>
        <Select placeholder="Select Machine" onChange={(e) => setSelectedMachine(e.target.value)}>
          {machines.map((machine) => (
            <option key={machine.id} value={machine.id}>
              {machine.description} - {machine.wipNumber}
            </option>
          ))}
        </Select>
        <Button onClick={() => allocateMachine(selectedMachine, "tech-id")} colorScheme="teal">
          Allocate to Technician
        </Button>
        <VStack spacing={4} width="100%">
          {machines.map((machine) => (
            <Box key={machine.id} p={4} borderWidth="1px" borderRadius="md" width="100%">
              <HStack justifyContent="space-between">
                <Text>{machine.description}</Text>
                <Text>{machine.wipNumber}</Text>
                <Text>{machine.techId}</Text>
              </HStack>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default TechDashboard;
