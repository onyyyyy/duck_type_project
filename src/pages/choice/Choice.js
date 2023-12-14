import { Box, Flex } from "@chakra-ui/react";
import styled from "styled-components";
import { IMG_URL } from "../../constants";
import { useState } from "react";
import { Result } from "../result/Result";
import { PageTitle } from "../../components/PageTitle";

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

const Gage = styled.div`
  font-size: 18px;
`;

const Qwrap = styled.div`
  width: 100%;
`;

const Question = styled.h3`
  /* width: 90%;
  width: 100%; */
  text-align: center;
`;

const DuckImg = styled.div`
  width: 300px;
  height: 300px;
  background: url(${IMG_URL}/1182224641134170152/1184389739822989352/duck_img_1.png)
    no-repeat center / cover;
`;

const WrapSet = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const Awrap = styled.div`
  width: 100%;
`;

const Answer = styled.button`
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

export const Choice = () => {
  const [page, setPage] = useState(1);

  const questions = [
    {
      q: ["질문1"],
      a: [
        { type: "I", text: "답변1" },
        { type: "E", text: "답변2" },
      ],
    },
    {
      q: ["질문 2"],
      a: [
        { type: "I", text: "답변3" },
        { type: "E", text: "답변4" },
      ],
    },
    {
      q: ["질문 3"],
      a: [
        { type: "I", text: "답변5" },
        { type: "E", text: "답변6" },
      ],
    },
    {
      q: ["질문 4"],
      a: [
        { type: "S", text: "답변7" },
        { type: "N", text: "답변8" },
      ],
    },
    {
      q: ["질문 5"],
      a: [
        { type: "S", text: "답변9" },
        { type: "N", text: "답변10" },
      ],
    },
    {
      q: ["질문 6"],
      a: [
        { type: "S", text: "답변11" },
        { type: "N", text: "답변12" },
      ],
    },
    {
      q: ["질문 7"],
      a: [
        { type: "F", text: "답변13" },
        { type: "T", text: "답변14" },
      ],
    },
    {
      q: ["질문 8"],
      a: [
        { type: "F", text: "답변15" },
        { type: "T", text: "답변16" },
      ],
    },
    {
      q: ["질문 9"],
      a: [
        { type: "F", text: "답변17" },
        { type: "T", text: "답변18" },
      ],
    },
    {
      q: ["질문 10"],
      a: [
        { type: "P", text: "답변19" },
        { type: "J", text: "답변20" },
      ],
    },
    {
      q: ["질문 11"],
      a: [
        { type: "P", text: "답변21" },
        { type: "J", text: "답변22" },
      ],
    },
    {
      q: ["질문 12"],
      a: [
        { type: "P", text: "답변23" },
        { type: "J", text: "답변24" },
      ],
    },
    {
      q: ["문제가 끝이 났어요! 결과 확인하러 갈까요?"],
      a: [{ type: "", text: "결과보러가기" }],
    },
  ];

  const [mbtiValue, setMbtiValue] = useState([
    { name: "I", count: 0 },
    { name: "E", count: 0 },
    { name: "S", count: 0 },
    { name: "N", count: 0 },
    { name: "F", count: 0 },
    { name: "T", count: 0 },
    { name: "P", count: 0 },
    { name: "J", count: 0 },
  ]);

  const handleAnswer = (type, index) => {
    let mbtiList = mbtiValue;
    for (let i = 0; i < mbtiList.length; i++) {
      if (mbtiList[i].name === type) {
        mbtiList[i].count = mbtiList[i].count + 1;
      }
    }

    setMbtiValue(mbtiList);
    // console.log(mbtiValue);
    setPage(page + 1);

    if (index + 1 === questions.length) {
      console.log("결과보기");
    }
  };
  return (
    <>
      <PageTitle titleName="유형테스트 페이지" />
      {page <= questions.length ? (
        <Box {...WrapSet}>
          <Flex
            maxW="480px"
            w="100%"
            h="100vh"
            bgColor="#c89f68"
            direction="column"
            {...WrapSet}
          >
            <Gage>{`${page}/${questions.length}`}</Gage>
            {questions.map((data, index) => (
              <MainBox
                key={index}
                style={{ display: page === index + 1 ? "flex" : "none" }}
              >
                {console.log(mbtiValue)}
                <Qwrap>
                  {data.q.map((qdata, qindex) => (
                    <Question key={qindex}>{qdata}</Question>
                  ))}
                </Qwrap>
                <DuckImg />
                <Awrap>
                  {data.a.map((adata, aindex) => (
                    <Answer
                      key={aindex}
                      onClick={() => handleAnswer(adata.type, index)}
                    >
                      {adata.text}
                    </Answer>
                  ))}
                </Awrap>
              </MainBox>
            ))}
          </Flex>
        </Box>
      ) : (
        <Result />
      )}
    </>
  );
};
