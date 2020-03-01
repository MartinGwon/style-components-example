import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components";

const Container = styled.View`
  display: flex
  flex: 1
  justify-content: center;
  align-items: center;
  background: pink;
  padding: 15px 10px 15px 10px;
  border: 1px solid black;
  margin: 60px;
`;

const Title = styled.Text`
  text-align: center
  font-size: 26;
  color: black;
`;

export default function App() {
  return (
    <>
      <Container>
        <Title>Using Styled Components is AWESOME</Title>
      </Container>
      <Container>
        <Title>Using Styled Components is AWESOME</Title>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
