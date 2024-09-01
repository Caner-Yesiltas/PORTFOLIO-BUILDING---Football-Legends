import { CardFooter, Container } from "react-bootstrap";
import { data } from "../../helpers/data"; //export default olmadigi zaman boyle aliyoruz {data} suslu icinde half export gibi dusun
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Card from "react-bootstrap/Card";
import { useState } from "react";

const LegendContainer = () => {
  // componentlerin isimleri ile karisir her daim kendi isimlerini ver mycontainer gibi

  const [show,setShow] = useState(true) // show statenin baslangic degeri true olmus oldu toggle mantigi icin kullaniliyor

  console.log(data);

  return (
    <Container>
      <Row>
        {data.map((item) => (
        <LegendCard item={item} />
        ))}
      </Row>
    </Container>
  );
};

export default LegendContainer;
