import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to='/'>
          Tienda de Productos
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to='/'>
              Home
          </Nav.Link>
          <Nav.Link as={Link} to='/category/sillones'>Sillones</Nav.Link>
          <Nav.Link as={Link} to='/category/respaldos'>Respaldos</Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  )
}

export default NavBar;