import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StepContext } from "../../Context/StepContext";

const Page2 = () => {
  const { step, setStep } = useContext(StepContext);

  const navigate = useNavigate();
  const hendeSubmit = () => {
    setStep(step + 1);
    navigate("/page3");
  };

  return (
    <div>
      <Container maxW={"container.md"} mt="20">
        <Heading as="h3" size="lg" textAlign={"center"}>
          Let's set up a home for all your work
        </Heading>

        <Text textAlign={"center"} fontSize="sm" mb={10} mt={4}>
          You can always create another workspace later
        </Text>
        <form onSubmit={hendeSubmit}>
          <Stack spacing={3} pl={20} pr={20} mb={5}>
            <FormControl>
              <FormHelperText mb={3}>Workspace Name</FormHelperText>
              <InputGroup>
                <Input required={true} placeholder="Eden" size="lg" />
              </InputGroup>
            </FormControl>
            <FormControl size="lg" mb={5}>
              <FormHelperText mb={3}>Workspace URL(Optional)</FormHelperText>
              <InputGroup>
                <InputLeftAddon children="www.eden.com/" />
                <Input required={true} placeholder="Example" />
              </InputGroup>
            </FormControl>
            <Button marginTop={10} colorScheme={"brand"} type={"submit"}>
              Create Workspace
            </Button>
          </Stack>
        </form>
      </Container>
    </div>
  );
};

export default Page2;
