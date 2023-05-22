import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import { Container, Row, Col } from "react-bootstrap";

function Layout(props) {
  return (
    <Container className={classes.imsdisplay}>
      <Row>
        <Col>
          <MainNavigation />
          <main className={classes.main}>{props.children}</main>
        </Col>
      </Row>
    </Container>
  );
}

export default Layout;
