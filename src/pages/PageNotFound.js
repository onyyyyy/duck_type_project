import { Box, Flex } from "@chakra-ui/react";

const WrapSet = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const PageNotFound = () => {
  return (
    <>
      <Box {...WrapSet}>
        <Flex
          maxW="480px"
          w="100%"
          h="100vh"
          bgColor="#c89f68"
          direction="column"
          {...WrapSet}
        ></Flex>
      </Box>
    </>
  );
};
