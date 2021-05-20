import useLayout from "./useLayout";
import styled from "styled-components";

const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.number}, 1fr);
`;

const Block = styled.div`
    width: 100px;
    height: 100px;
    background-color: aqua;
    margin-top: 1px;
    border: 2px solid black;
`;

function App() {
  let width = useLayout();
  return (
    <Layout number={width}>
     <Block className="block"> 
     </Block>
     <Block className="block"> 
     </Block>
     <Block className="block"> 
     </Block>
     <Block className="block"> 
     </Block>
     <Block className="block"> 
     </Block>
     <Block className="block"> 
     </Block>
    </Layout>
  );
}

export default App;
