import styled from "styled-components";
import Header from "./components/Header";
import './App.css';

function App() {
  return (
    <TodoAppDiv>
      <Header />
    </TodoAppDiv>
  );
}

const TodoAppDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export default App;
