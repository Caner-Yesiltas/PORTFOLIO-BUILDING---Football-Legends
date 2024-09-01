import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useState } from "react";

const LegendCard = ({ img, name, official_career, statistics }) => {
  const [show, setShow] = useState(true);
  return (
    <Col xs={10} sm={8} m={6} lg={4} xl={3}>
      <Card onClick={() => setShow(!show)} role="button">
        {show ? (
          <Card.Img variant="top" src={img} title={name} />
        ) : (
          <Card.Body>
            <Card.Title>{name}</Card.Title>

            <ul className="m-auto">
              {statistics.map((item) => (
                <li className="list-unstyled text-start h5"> ⚽{item}</li>
              ))}
            </ul>
          </Card.Body>
        )}

        <Card.Footer>Carrer Years: {official_career}</Card.Footer>
      </Card>
    </Col>
  );
};

export default LegendCard;
