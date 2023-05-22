import { Card, Col, Container, Row } from "react-bootstrap";
import HomeSummary from "./HomeSummary";

function Home(props) {
  return (
    <Container fluid xs="12">
      <Row>
        <Col xs="12" lg="6">
          <HomeSummary>{props.children}</HomeSummary>
        </Col>
        <Col>
          <Card>
            <Card.Body>Home sub data goes here</Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
