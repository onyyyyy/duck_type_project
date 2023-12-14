import { Box, Flex } from "@chakra-ui/react";
import { PageTitle } from "../../components/PageTitle";

const WrapSet = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const Result = () => {
  return (
    <>
      <PageTitle titleName="결과페이지" />
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
