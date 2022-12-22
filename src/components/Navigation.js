import { Navbar, Container, Nav } from "react-bootstrap";
import { Github } from "react-bootstrap-icons";

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Movie Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="https://github.com/Kyungmo-Lee">
              <Github />
            </Nav.Link>
            <Nav.Link href="https://maze-pram-f56.notion.site/0186ed1fcb594e38a8e55c59e001ed97">
              Notion
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
