import {
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Page4 = () => {
  const hendelClick = () => {};
  return (
    <div>
      <Stack spacing={3} pl={20} pr={20}>
        <Flex
          flexDirection={"row"}
          border={"2px"}
          borderRadius={"50%"}
          bg={"#664DE5"}
          m={"auto"}
          mt={20}
          h={55}
          w={55}
          justifyContent="center"
          alignContent={"center"}
          alignItems={"center"}
          color={"white"}
        >
          <span class="material-symbols-rounded">done</span>
        </Flex>
      </Stack>

      <Container maxW={"container.md"} mt="10">
        <Heading as="h3" size="lg" textAlign={"center"}>
          Congratulations, Eren!
        </Heading>

        <Text textAlign={"center"} fontSize="sm" mb={10} mt={4}>
          You have completed onboarding, you can start using the Eden!
        </Text>
      </Container>
      <Stack spacing={3} pl={20} pr={20}>
        <Button colorScheme={"brand"} onClick={hendelClick}>
          Launch Eden
        </Button>
      </Stack>
    </div>
  );
};

export default Page4;
