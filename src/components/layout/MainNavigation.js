import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { Container,  Navbar } from "react-bootstrap";

function MainNavigation() {
  return (
    <Navbar collapseOnSelect expand="md" className={classes.header}>
      <Container>
        <Navbar.Brand>IMS Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <ul className="me-auto navbar-nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/putaway">Putaway</Link>
          </li>
          <li className="nav-item">
            <Link to="/picking">Picking</Link>
          </li>
        </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavigation;
