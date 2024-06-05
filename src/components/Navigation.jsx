import { Link } from "react-router-dom";
import { HStack, Button } from "@chakra-ui/react";

const Navigation = () => {
  return (
    <HStack spacing={4} p={4} bg="gray.100">
      <Button as={Link} to="/" colorScheme="teal">
        Home
      </Button>
      <Button as={Link} to="/checkin" colorScheme="teal">
        Check In
      </Button>
      <Button as={Link} to="/tech-dashboard" colorScheme="teal">
        Tech Dashboard
      </Button>
    </HStack>
  );
};

export default Navigation;
