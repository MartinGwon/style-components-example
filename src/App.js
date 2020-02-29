import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    padding:0;
    margin:0;
  }
`;

class App extends React.Component {
  render() {
    return (
      <Container>
        <GlobalStyle />
        <Button>Accept</Button>
        <Button danger>Deny</Button>
        <Anchor as="a" href="http://www.google.com">
          Back to Google
        </Anchor>
      </Container>
    );
  }
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: pink;
`;

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 100px;
  color: white;
  font-weight: 400;
  -webkit-appearance: none;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  background-color: ${props => (props.danger ? "#e74c3c" : "#2ecc71")};
`;

const Anchor = styled(Button)`
  text-decoration: none;
`;

export default App;
