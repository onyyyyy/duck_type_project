import styled from "styled-components";

const Container = styled.footer`
  max-width: 480px;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.6);
  background-color: white;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

const Copy = styled.h3`
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`;

export const Footer = () => {
  return (
    <Container>
      <Copy>&copy; 2023 kimLrLr onyyyyy</Copy>
    </Container>
  );
};
