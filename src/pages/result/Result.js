import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { PageTitle } from "../../components/PageTitle";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

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
    width: 100%;
  }
`;

const MbtiDuckImg = styled.div`
  max-width: 450px;
  width: 100%;
  img {
    width: 100%;
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
  cursor: pointer;

  a {
    color: #674211;
    line-height: 50px;
    width: 100%;
  }

  &:hover {
    background: #ffebd1;
  }
`;

export const Result = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const mbtiDuck = useLocation();
  const mbtiResult = mbtiDuck.state.name;

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
            <BottomBtn onClick={onOpen}>MBTI별 오리 모음집</BottomBtn>
            <ChakraProvider>
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent bgColor="#c89f68">
                  <ModalHeader>MBTI별 오리 모음집</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <MbtiDuckImg>
                      <img
                        src="https://cdn.discordapp.com/attachments/1182224641134170152/1186364861702226100/mbti_duck_img.png"
                        alt="mbti별 오리"
                      />
                    </MbtiDuckImg>
                  </ModalBody>
                  <ModalFooter>
                    <Button onClick={onClose}>닫기</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </ChakraProvider>

            <BottomBtn>
              <Link to="/">테스트 다시하기</Link>
            </BottomBtn>
          </BottomWrap>
        </Flex>
      </Box>
    </>
  );
};
