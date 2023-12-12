import styled from "styled-components";

const Container = styled.footer`
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.6);
`;

export const Footer = () => {
  return <Container>&copy; 2023 kimLrLr onyyyyy</Container>;
};
