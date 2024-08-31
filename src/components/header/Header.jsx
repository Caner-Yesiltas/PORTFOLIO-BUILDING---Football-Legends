import React from "react";
import { Image } from "react-bootstrap";
import  Container  from "react-bootstrap/Container";
import logo from "../../assets/logo.png"
import headerStyle from "./Header.module.css"

const Header = () => {
  return (
    <Container>
        <Image src={logo} width={200} /> <br />
        <h1 className={`${headerStyle.title}  my-2 `} >Football Legends</h1>
        
   
    </Container>
  );
};

export default Header;
