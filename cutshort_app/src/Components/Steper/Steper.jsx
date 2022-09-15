import { Box, Grid, GridItem, Stack } from "@chakra-ui/react";
import React, { useContext } from "react";
import { StepContext } from "../../Context/StepContext";

const Steper = () => {
  const { step } = useContext(StepContext);
  let borderclr = "#EDF2F7";
  let c1 = step >= 1 ? "#664DE5" : borderclr;
  let c2 = step >= 2 ? "#664DE5" : borderclr;
  let c3 = step >= 3 ? "#664DE5" : borderclr;
  let c4 = step >= 4 ? "#664DE5" : borderclr;

  let b1 = step >= 1 ? "#664DE5" : "white";
  let b2 = step >= 2 ? "#664DE5" : "white";
  let b3 = step >= 3 ? "#664DE5" : "white";
  let b4 = step >= 4 ? "#664DE5" : "white";

  let t1 = step >= 1 ? "white" : "rgb(108, 108, 108)";
  let t2 = step >= 2 ? "white" : "rgb(108, 108, 108)";
  let t3 = step >= 3 ? "white" : "rgb(108, 108, 108)";
  let t4 = step >= 4 ? "white" : "rgb(108, 108, 108)";

  return (
    <Stack mt={12} ml={"auto"} mr={"auto"} position={"relative"} maxW={"sm"}>
      <Grid templateColumns="repeat(6, 1fr)">
        <GridItem w="100%" h="0.5" bg={c1} />
        <GridItem w="100%" h=".5" bg={c2} />
        <GridItem w="100%" h=".5" bg={c2} />
        <GridItem w="100%" h=".5" bg={c3} />
        <GridItem w="100%" h=".5" bg={c3} />
        <GridItem w="100%" h=".5" bg={c4} />
      </Grid>
      <Box
        h={8}
        w={8}
        p={0.5}
        borderWidth={0.5}
        borderStyle={"solid"}
        borderColor={borderclr}
        borderRadius={"50%"}
        position={"absolute"}
        top={-6}
        color={t1}
        left={-1}
        textAlign="center"
        background={b1}
      >
        1
      </Box>
      <Box
        h={8}
        w={8}
        p={0.5}
        borderWidth={0.5}
        borderStyle={"solid"}
        borderColor={borderclr}
        borderRadius={"50%"}
        position={"absolute"}
        top={-6}
        left={"30%"}
        color={t2}
        background={b2}
        textAlign="center"
      >
        2
      </Box>
      <Box
        h={8}
        w={8}
        p={0.5}
        borderWidth={0.5}
        borderStyle={"solid"}
        borderColor={borderclr}
        borderRadius={"50%"}
        position={"absolute"}
        top={-6}
        left={"67%"}
        color={t3}
        background={b3}
        textAlign="center"
      >
        3
      </Box>
      <Box
        h={8}
        w={8}
        p={0.5}
        borderWidth={0.5}
        borderStyle={"solid"}
        borderColor={borderclr}
        borderRadius={"50%"}
        position={"absolute"}
        top={-6}
        left={"99%"}
        color={t4}
        background={b4}
        textAlign="center"
      >
        4
      </Box>
    </Stack>
  );
};

export default Steper;
