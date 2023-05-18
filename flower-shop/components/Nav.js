import Logo from "./Logo"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import index from "../pages/index"
import { ShoppingCart } from "phosphor-react";
import style from "@/styles/Nav.module.css"

export default function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Logo />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="./" className={style.nav_text}>home</Nav.Link>
            <Nav.Link href="./about" className={style.nav_text}>about</Nav.Link>
            <Nav.Link href="./contact" className={style.nav_text}>contact</Nav.Link>
            <Nav.Link href="./contact"className={style.nav_text}><ShoppingCart /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

