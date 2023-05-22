import { Card, Col, Container, Row } from "react-bootstrap";

function HomeSummary(){
    return <Card>
    <Card.Body>
      <Row className="header text-home-summary-value">Tuesday</Row>
      <Row>
        <Col lg="6" className="text-home-summary">
          ITEMS PICKED TODAY
        </Col>
        <Col lg="6" className="text-home-summary">
          PERCENT COMPLETE
        </Col>
      </Row>
      <Row>
        <Col lg="6" className="text-home-summary-value">
          2840
        </Col>
        <Col lg="6" className="text-home-summary-value">
          98
        </Col>
      </Row>
      <Row>
        <Col lg="6" className="text-home-summary">
          ITEMS PUTAWAY TODAY
        </Col>
        <Col lg="6" className="text-home-summary">
          AUDITS COMPLETED
        </Col>
      </Row>
      <Row>
        <Col lg="6" className="text-home-summary-value">
          4533
        </Col>
        <Col lg="6" className="text-home-summary-value">
          280
        </Col>
      </Row>
      <Row>
        <Col lg="6" className="text-home-summary">
          ACTIVE ADDRESS
        </Col>
        <Col lg="6" className="text-home-summary">
          ACTIVE CONTAINER
        </Col>
      </Row>
      <Row>
        <Col lg="6" className="text-home-summary-value">
          245
        </Col>
        <Col lg="6" className="text-home-summary-value">
          1467
        </Col>
      </Row>
    </Card.Body>
  </Card>
}

export default HomeSummary