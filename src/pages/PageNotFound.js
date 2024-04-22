import { Box, Flex } from "@chakra-ui/layout";
import styled from "styled-components";
import { IMG_URL } from "../constants";
import { Link } from "react-router-dom";

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WrapSet = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const DuckImg = styled.div`
  width: 300px;
  height: 300px;
  background: url(${IMG_URL}/img/404.png) no-repeat center / contain;
`;

const BtnWrap = styled.button`
  width: 80%;
  border: none;
  border-radius: 20px;
  font-size: 30px;
  font-weight: 900;
  background-color: #fff;
  text-align: center;
  transition: 0.5s;

  a {
    color: #674211;
    line-height: 50px;
  }

  &:hover {
    background: #ffebd1;
  }
`;
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
        >
          <MainBox>
            <DuckImg />

            <BtnWrap>
              <Link to={"/"}>메인화면으로</Link>
            </BtnWrap>
          </MainBox>
        </Flex>
      </Box>
    </>
  );
};
