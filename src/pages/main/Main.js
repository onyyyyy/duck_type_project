import { Box, Flex } from "@chakra-ui/react";
import styled from "styled-components";
import { IMG_URL } from "../../constants";
import { Link } from "react-router-dom";

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-weight: 600;
  font-size: 30px;
  line-height: 50px;

  h2 {
    font-size: 35px;
    font-weight: 900;
  }

  h5 {
    max-width: 330px;
    text-align: center;
  }
`;

const DuckImg = styled.div`
  width: 300px;
  height: 300px;
  background: url(${IMG_URL}/1182224641134170152/1184107717732872263/500w_main_duck.png)
    no-repeat center / contain;
`;

const WrapSet = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const BtnWrap = styled.button`
  width: 80%;
  border: none;
  font-size: 30px;
  font-weight: 900;
  background-color: #fff;
  text-align: center;
  margin: 40px auto;
  transition: 0.5s;

  a {
    color: #674211;
    line-height: 50px;
  }

  &:hover {
    background: #ffebd1;
  }
`;

export const Main = () => {
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
            <h3>나의 성격과 닮은 오리는?</h3>
            <h2>오리 성격 테스트</h2>
            <DuckImg />
            <h5>물 위를 떠다니는 오리들과 나를 찾아 떠나는 여행!</h5>

            <BtnWrap>
              <Link to={`/choice`}>시작하기</Link>
            </BtnWrap>
          </MainBox>
        </Flex>
      </Box>
    </>
  );
};
