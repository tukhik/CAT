import styled from "styled-components";


import CategorieButtons from "./components/CategorieButtons";
import ImageBox from "./components/ImageBox";



function App() {


  return (
    <GeneralBox>
      <CategorieButtons />
      <ImageBox />
    </GeneralBox>
  );
}


const GeneralBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;
  background-color: lightgrey;
  background-size: 100% 100%;
  background-position: center center;
  background-repeat: repeat;
  width: 100%;
  `;


export default App;
