import { Button, Col, Row } from 'react-bootstrap';

const About = () => {
  return (
    <Row className="mt-5 mr-auto">
      <Col className="text-center">
        <Button
          variant="primary"
          href="https://github.com/thuccv98"
          size="lg"
          target="_blank"
        >
          Visit my github page
        </Button>
      </Col>
    </Row>
  );
};

export default About;
