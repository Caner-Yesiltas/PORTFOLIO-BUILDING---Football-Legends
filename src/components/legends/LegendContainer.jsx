import { CardFooter, Container } from "react-bootstrap";
import { data } from "../../helpers/data"; //export default olmadigi zaman boyle aliyoruz {data} suslu icinde half export gibi dusun
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LegendCard from "./LegendCard";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Form from "react-bootstrap/Form";

const LegendContainer = () => {
  // componentlerin isimleri ile karisir her daim kendi isimlerini ver mycontainer gibi

 // show statenin baslangic degeri true olmus oldu toggle mantigi icin kullaniliyor

const [search, setSearch]=useState("")
  console.log(data);

  const handleChange=(e) => {
    setSearch(e.target.value)
  }


  const filterData=data.filter(legend=> legend.name.toLocaleLowerCase().includes(search.toLowerCase()))

  return (
    <>
      {" "}
      <Form.Control onChange={(e)=> handleChange(e)}   type="search" placeholder="Search Legends" />
      <Container>
        <Row>
          {filterData.map((legend) => (
            <LegendCard key={legend.id} {...legend} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default LegendContainer;
