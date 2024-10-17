

import { Container, Row, Col, Button, Card, Carousel, Form, Image } from "react-bootstrap"; // Added Image import
import { Link } from "react-router-dom";

export function About() {
  return (
    <Container>
    
      <header className="text-center my-5">
        <h1 className="display-5">About TokoBabi</h1>
        <p>Passionate about bringing authentic pork cuisine to your table.</p>
      </header>

    
      <section className="align-items-center text-center">
      
          
            <b>Our Story</b>
            <p>
              TokoBabi was founded with the mission to share the rich flavors of Indonesian pork dishes with the world. 
              Our recipes are rooted in tradition, crafted with love, and served with pride.
            </p>
            <p>
              We believe in supporting local farmers and using only the freshest ingredients to deliver an unforgettable dining experience.
            </p>
          
      </section>

      
      <section className="mb-5 text-center">
        <h2>Our Values</h2>
        <Row className="mt-4">
          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>Quality</Card.Title>
                <Card.Text>We are committed to providing the highest quality products.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>Tradition</Card.Title>
                <Card.Text>Our dishes are rooted in traditional recipes passed down through generations.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>Community</Card.Title>
                <Card.Text>We support local farmers and give back to our community.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

     
      <section className="mb-5">
        <h2 className="text-center">Meet Our Team</h2>
        <Row className="g-4 mt-4">
          <Col md={4}>
            <Card className="text-center h-100 shadow-sm">
              <Image src="/imgs/john.jpeg" roundedCircle fluid style={{ height: "200px", objectFit: "cover" }} />
              <Card.Body>
                <Card.Title>John Doe</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Head Chef</Card.Subtitle>
                <Card.Text>With over 15 years of experience, John brings authentic flavors to your table.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center h-100 shadow-sm">
              <Image src="/imgs/jane.jpeg" roundedCircle fluid style={{ height: "200px", objectFit: "cover" }} />
              <Card.Body>
                <Card.Title>Jane Smith</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">General Manager</Card.Subtitle>
                <Card.Text>Jane ensures that every aspect of TokoBabi runs smoothly.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center h-100 shadow-sm">
              <Image src="/imgs/alex.jpeg" roundedCircle fluid style={{ height: "200px", objectFit: "cover" }} />
              <Card.Body>
                <Card.Title>Alex Johnson</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Marketing Lead</Card.Subtitle>
                <Card.Text>Alex is passionate about sharing our story with the world.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      <div className="text-center my-5">
        <h3>Join Us on Our Culinary Journey!</h3>
        <Link to="/store">
          <Button variant="primary" size="lg">Explore Our Menu</Button>
        </Link>
      </div>
    </Container>
  );
}

