import { Box, Flex } from "@chakra-ui/react";
import { PageTitle } from "../../components/PageTitle";
import { IMG_URL } from "../../constants";
import styled from "styled-components";
import { Link } from "react-router-dom";

const WrapSet = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const DuckImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 480px;
  }
`;

const BottomWrap = styled.div`
  width: 80%;
`;

const BottomBtn = styled.button`
  all: unset;
  width: 100%;
  height: 80px;
  font-size: 30px;
  font-weight: 900;
  background-color: #fff;
  text-align: center;
  transition: 0.5s;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  box-shadow: 10px 10px 5px #674211;

  a {
    color: #674211;
    line-height: 50px;
  }

  &:hover {
    background: #ffebd1;
  }
`;

export const Result = () => {
  return (
    <>
      <PageTitle titleName="결과페이지" />
      <DuckImg>
        <img
          src="https://cdn.discordapp.com/attachments/1182224641134170152/1184917586765434920/test_img.png"
          alt="mbti오리"
        />
      </DuckImg>
      <Box {...WrapSet}>
        <Flex
          maxW="480px"
          w="100%"
          bgColor="#c89f68"
          direction="column"
          {...WrapSet}
        >
          <BottomWrap>
            <BottomBtn>오리 모아보기</BottomBtn>
            <BottomBtn>
              <Link to="/">테스트 다시하기</Link>
            </BottomBtn>
          </BottomWrap>
        </Flex>
      </Box>
    </>
  );
};
