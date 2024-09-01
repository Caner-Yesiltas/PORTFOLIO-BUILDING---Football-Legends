
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useState } from "react";


const LegendCard = ({item}) => {
  const [show,setShow] = useState(true) 
  return (
    <Col xs={10} sm={8} m={6} lg={4} xl={3}>
            <Card>
                {
                
                 show ? <Card.Img  onClick={()=>setShow(false)} variant="top" src={item.img} /> : <Card.Body onClick={()=> setShow(true)} >
                 <Card.Title>{item.name}</Card.Title>
                 
                 <ul className="m-auto" >
                     {item.statistics.map(item => <li className="list-unstyled text-start h5"  >  ⚽{item}</li>  )} 
                 </ul>
                
               </Card.Body >
                } 
            
            
              <CardFooter>
                Carrer Years: {item.official_career}
              </CardFooter>
            </Card>
          </Col>
  )
}

export default LedendCard
