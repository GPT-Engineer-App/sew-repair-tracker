import React, { useState, useEffect } from "react";
import { Container, VStack, HStack, Text, Box, Select, Button } from "@chakra-ui/react";
import { fetchMachines, allocateMachineToTech } from "../utils/api";

const TechDashboard = () => {
  const [machines, setMachines] = useState([]);
  const [selectedMachine, setSelectedMachine] = useState(null);

  useEffect(() => {
    const loadMachines = async () => {
      const machines = await fetchMachines();
      setMachines(machines);
    };
    loadMachines();
  }, []);

  const allocateMachine = async (machineId, techId) => {
    await allocateMachineToTech(machineId, techId);
    const updatedMachines = machines.map((machine) => (machine.id === machineId ? { ...machine, techId } : machine));
    setMachines(updatedMachines);
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
