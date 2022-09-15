import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

const Logo = () => {
  return (
    <Flex
      maxW={"container.md"}
      justifyContent={"center"}
      flexDirection={"row"}
      alignItems="center"
      alignContent={"center"}
      gap="2"
    >
      <img style={{ width: "2rem" }} src="new brand logo.png" alt="" />
      <Heading as="h3" size="lg">
        Eden
      </Heading>
    </Flex>
  );
};

export default Logo;
