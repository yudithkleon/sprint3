import React from "react";
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button} from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavBar1 = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src="https://res.cloudinary.com/danimel/image/upload/v1633143009/Sprint3/logo-amazon_jmuiav.png" />
          </Navbar.Brand>
          <Nav className="me-auto">
              <Link to="/MapView">
              <Nav.Link href="#home">Hola</Nav.Link>
              </Link >
                          <Nav.Link href="#features">
              <Form className="d-flex">
             
              <NavDropdown   title="Todo" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Bebes</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Hogar</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Tecnología
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Electrodomesticos
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Libros</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Otros</NavDropdown.Item>
              </NavDropdown>
          
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="mr-2"
                  aria-label="Search"
                />
                <Button variant="warning"><img src="https://res.cloudinary.com/danimel/image/upload/v1630787233/sprint2/buscar_w5aorc.png" /></Button>
              </Form>
                          
            </Nav.Link>
            <Nav.Link href="#pricing"><Link to="/login" >Identificate</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link to="/producto" >Vender</Link></Nav.Link>
          </Nav>
          
        </Container>
      </Navbar>
    </div>
  );
};
