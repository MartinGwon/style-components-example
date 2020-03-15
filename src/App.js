import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`;

const Card = styled.div`
  background-color: black;
`;

const Button = styled.button`
  border-radius: 30px;
  padding: 25px 15px;
  background-color: ${props => props.theme.successColor};
`;

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <GlobalStyle />
          <Form />
        </Container>
      </ThemeProvider>
    );
  }
}

const Form = () => {
  return (
    <Card>
      <Button>Hello</Button>
    </Card>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #322f20;
  ${Card}:last-child {
    background-color: violet;
  }
`;

export default App;
