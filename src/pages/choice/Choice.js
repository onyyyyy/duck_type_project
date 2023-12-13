import { Box, Flex } from "@chakra-ui/react";
import styled from "styled-components";
import { IMG_URL } from "../../constants";
import { Link } from "react-router-dom";

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 330px;

  font-weight: 600;
  font-size: 30px;
  line-height: 50px;
`;

const Question = styled.h3`
  width: 90%;
  /* width: 100%; */
  text-align: center;
`;

const DuckImg = styled.div`
  width: 300px;
  height: 300px;
  background: url(${IMG_URL}/1182224641134170152/1184389739822989352/duck_img_1.png)
    no-repeat center / contain;
`;

const WrapSet = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const BtnWrap = styled.button`
  width: 100%;
  border: none;
  font-size: 30px;
  font-weight: 900;
  background-color: #fff;
  text-align: center;
  margin: 20px auto;
  transition: 0.5s;
  box-sizing: border-box;

  a {
    color: #674211;
    line-height: 50px;
  }

  &:hover {
    background: #ffebd1;
  }
`;

export const Choice = () => {
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
            <Question>
              여기 상단이 선택을 하기 위한 질문이 쓰이는 곳입니다.
            </Question>
            <DuckImg />

            <BtnWrap>
              <Link to={`/choice`}>질문1</Link>
            </BtnWrap>
            <BtnWrap>
              <Link to={`/choice`}>질문2</Link>
            </BtnWrap>
          </MainBox>
        </Flex>
      </Box>
    </>
  );
};
