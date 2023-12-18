import { Box, Flex } from "@chakra-ui/react";
import { PageTitle } from "../../components/PageTitle";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Modal from "react-modal";

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
    width: 100%;
  }

  &:hover {
    background: #ffebd1;
  }
`;

const ImgWrap = styled.div`
  max-width: 480px;
  width: 100%;
  height: 80%;
`;

const CloseBtn = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 50px;
  border-radius: 10px;
  background-color: #fff;
  font-size: 20px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

export const Result = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const modalStyles = {
    overlay: {
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    content: {
      backgroundColor: "#c89f68",
      width: "480px",
      height: "600px",
      margin: "auto",
      padding: "20px",
      fontSize: "30px",
      fontWeight: "600",
      border: "none",
    },
  };

  const mbtiDuck = useLocation();

  const mbtiResult = mbtiDuck.state.name;

  console.log(mbtiResult);

  return (
    <>
      <PageTitle titleName="결과페이지" />
      <DuckImg>
        <img src={mbtiResult.img} alt="mbti오리" />
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
            <BottomBtn onClick={openModal}>MBTI별 오리 모음집</BottomBtn>
            <Modal
              isOpen={isOpen}
              onRequestClose={closeModal}
              style={modalStyles}
            >
              <h3>MBTI별 오리 모음집</h3>
              <ImgWrap>
                <img src="" alt="" />
              </ImgWrap>
              <CloseBtn onClick={closeModal}>닫기</CloseBtn>
            </Modal>
            <BottomBtn>
              <Link to="/">테스트 다시하기</Link>
            </BottomBtn>
          </BottomWrap>
        </Flex>
      </Box>
    </>
  );
};
