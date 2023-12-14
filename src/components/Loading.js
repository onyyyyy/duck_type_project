import { Box, Flex } from "@chakra-ui/react";
import styled from "styled-components";
import { IMG_URL } from "../constants";
import { Link } from "react-router-dom";
import { SyncLoader } from "react-spinners";

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h5 {
    font-size: 25px;
    font-weight: 700;
    text-align: center;
    max-width: 350px;
    line-height: 40px;
  }
`;

const LoadWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20% 0;
`;

const WrapSet = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const DuckImg = styled.div`
  width: 85px;
  height: 85px;
  margin-right: 20px;
  background: url(${IMG_URL}/1182224641134170152/1184766349126418484/load_img.png)
    no-repeat center / contain;
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
    line-height: 70px;
  }

  &:hover {
    background: #ffebd1;
  }
`;

export const Loading = () => {
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
            <h5>
              오리 한 마리가
              <br /> 여행을 떠날 채비를 끝마쳤습니다!
            </h5>

            <LoadWrap>
              <DuckImg />
              <SyncLoader color="#fffc00" size={30} margin={13} />
            </LoadWrap>

            <BtnWrap>
              <Link to={"/result"}>당신의 오리는...</Link>
            </BtnWrap>
          </MainBox>
        </Flex>
      </Box>
    </>
  );
};
