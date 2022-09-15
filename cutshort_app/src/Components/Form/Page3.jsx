import {
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StepContext } from "../../Context/StepContext";

const Page3 = () => {
  const { step, setStep } = useContext(StepContext);

  const navigate = useNavigate();
  const hendelClick = () => {
    setStep(step + 1);
    navigate("/page4");
  };
  return (
    <div>
      <Container maxW={"container.md"} mt="20">
        <Heading as="h3" size="lg" textAlign={"center"}>
          How are you planning to use Eden?
        </Heading>

        <Text textAlign={"center"} fontSize="sm" mb={10} mt={4}>
          We'll streamline your setup experience accordingly.
        </Text>

        <Stack spacing={3} pl={20} pr={20}>
          <Flex gap={7} mb={5} flexDirection={"row"} justifyContent="center">
            <Flex
              border={"1px"}
              borderColor="#664DE5"
              borderRadius={5}
              p={4}
              gap={3}
              flexDirection={"column"}
              textAlign={"left"}
              alignItems="left"
              alignContent={"left"}
            >
              <span class="material-symbols-rounded">person</span>
              <Heading as="h6" size="xs">
                For myself
              </Heading>
              <Text fontSize="xs">
                Write better. Think more clearly. Stay organized
              </Text>
            </Flex>
            <Flex
              border={"1px"}
              borderColor="#664DE5"
              borderRadius={5}
              p={4}
              gap={3}
              flexDirection={"column"}
              textAlign={"left"}
              alignItems="left"
              alignContent={"left"}
            >
              <span id="icons" class="material-symbols-rounded">
                groups
              </span>
              <Heading as="h6" size="xs">
                With my team
              </Heading>
              <Text fontSize="xs">
                Wikis, docs, tasks & projects, all in one place.
              </Text>
            </Flex>
          </Flex>
          <Button colorScheme={"brand"} onClick={hendelClick}>
            Create Workspace
          </Button>
        </Stack>
      </Container>
    </div>
  );
};

export default Page3;
