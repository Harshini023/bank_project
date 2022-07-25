import { Navbar, Container, Nav } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Bank from "./HNB_preview_rev_1.png";

export default function NavBar() {
  return (
    <>
      <Navbar class="navbar" expand="lg">
        <Container>
          <h2>MAGYAR NEMZETI BANK</h2>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Card style={{ width: "5rem" }}>
            <Card.Img variant="top" src={Bank} />
          </Card>
          &nbsp;&nbsp;
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                className="navbar-brand"
                activeClassName="navbar-brand--active"
                href="#/Home"
                title=" Home Page"
              >
                {" "}
                <h4>Home</h4>{" "}
              </Nav.Link>
              <Nav.Link
                className="navbar-brand"
                title="Create your Account"
                href="#/CreateAccount/"
              >
                {" "}
                <h4>CreateAccount</h4>{" "}
              </Nav.Link>
              <Nav.Link
                className="navbar-brand"
                title="Deposit in your Account"
                href="#/Deposit/"
              >
                <h4>Deposit</h4>{" "}
              </Nav.Link>
              <Nav.Link
                className="navbar-brand"
                title="Withdraw from your Account"
                href="#/Withdraw/"
              >
                <h4>WithDraw</h4>{" "}
              </Nav.Link>
              <Nav.Link
                className="navbar-brand"
                title="Track your Transactions"
                href="#/AllData/"
              >
                <h4>All Data</h4>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
