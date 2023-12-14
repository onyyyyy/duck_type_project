import { Box, Flex } from "@chakra-ui/react";
import styled from "styled-components";
import { IMG_URL } from "../../constants";
import { useState } from "react";
import { PageTitle } from "../../components/PageTitle";
import { questions } from "../../components/questions";
import { Loading } from "../../components/Loading";

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

const GaugeBar = styled.div`
  width: 90%;
  height: 5px;
  background-color: aquamarine;
  border-radius: 10px;
  overflow: hidden;
`;

const Gauge = styled.div`
  width: ${(props) => props.$width}%;
  height: 100%;
  background-color: red;
`;

const Qwrap = styled.div`
  width: 100%;
`;

const Question = styled.h3`
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

  const [gauge, setGauge] = useState();

  const handleAnswer = (type, index) => {
    const progress = (page / questions.length) * 100;
    setGauge(progress);
    // console.log(progress);
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
      // console.log("결과보기");
    }
  };
  // console.log(gauge);
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
            <GaugeBar>
              <Gauge $width={Math.round(gauge)}></Gauge>
            </GaugeBar>

            {questions.map((data, index) => (
              <MainBox
                key={index}
                style={{ display: page === index + 1 ? "flex" : "none" }}
              >
                {/* {console.log(mbtiValue)} */}

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
        <Loading />
      )}
    </>
  );
};
