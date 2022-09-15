import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  Heading,
  Input,
  InputGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StepContext } from "../../Context/StepContext";

const Page1 = () => {
  const { step, setStep } = useContext(StepContext);

  const navigate = useNavigate();
  const hendelClick = () => {
    setStep(step + 1);
    navigate("/page2");
  };

  return (
    <Container maxW={"container.sm"} mt="20">
      <Heading as="h3" size="lg" textAlign={"center"}>
        Welcome! First things first...
      </Heading>

      <Text textAlign={"center"} fontSize="sm" mb={10} mt={4}>
        You can always change them later.
      </Text>

      <Stack maxW={"container.sm"} spacing={3} pl={20} pr={20}>
        <FormControl>
          <FormHelperText mb={3}>Full Name</FormHelperText>
          <InputGroup>
            <Input isRequired={"true"} placeholder="Steve Jobs" size="lg" />
          </InputGroup>
        </FormControl>
        <FormControl size="lg">
          <FormHelperText mb={3}>Display Name</FormHelperText>
          <InputGroup>
            <Input placeholder="Steve" isRequired={"true"} />
          </InputGroup>
        </FormControl>
        <Button m={10} colorScheme={"brand"} onClick={hendelClick}>
          Create Workspace
        </Button>
      </Stack>
    </Container>
  );
};

export default Page1;
