import styled from "styled-components";
import "./App.css";
import DropZone from "./components/DropZone";
import Login from "./components/Login";

export default function App() {
  return (
    <Main className="App">
      <DropZone />
      <Login />
    </Main>
  );
}

const Main = styled.div`
  display: flex;

`;
