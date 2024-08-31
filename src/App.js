import Container from "react-bootstrap/Container"
import Header from "./components/header/Header";
import LegendContainer from "./components/legends/LegendContainer";

function App() {
  return (
 <Container className="text-center my-5 ">   
 {/* Containeri div gibi dusun text centerda bootstrapden ortaliyor
 ayrica boostrap ise buyuk harfle baslarlar htmller 
 */}
<Header/> 
<LegendContainer/>
 </Container>
  );
}

export default App;


