

import { Container, Row, Col, Button, Card, Carousel, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import storeItems from "../data/items.json";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useProductList } from "../hooks/useProducts";
import { formatCurrency } from "../utilities/formatCurrency";

export function Home() {
  const imageSize: React.CSSProperties = { height: "400px", objectFit: "cover" };
  const { increaseCartQuantity } = useShoppingCart();
  const {products, isLoading} = useProductList();

  return (
    <Container>
     
      <header className="text-center my-5">
        <h1 className="display-4">Welcome to TokoBabi</h1>
        <p className="lead">Experience the Authentic Taste of Indonesian Pork Cuisine</p>
        <Link to="/store">
          <Button variant="primary" size="lg">Shop Now</Button>
        </Link>
      </header>

 
      <Carousel className="mb-5">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/imgs/Foto-babi1.jpeg"
            alt="Delicious Dish 1"
            style={imageSize}
          />
          <Carousel.Caption>
            <h3>Delight in Every Bite</h3>
            <p>Our pork dishes are prepared with the freshest ingredients.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/imgs/Foto-babi2.jpeg"
            alt="Delicious Dish 2"
            style={imageSize}
          />
          <Carousel.Caption>
            <h3>A Taste of Tradition</h3>
            <p>Experience recipes passed down through generations.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Featured Products */}
      <h2 className="mb-4 text-center">Featured Products</h2>
      <Row md={2} lg={3} className="g-3">
        {isLoading && <>Loading...</>}
        {products.slice(0, 3).map(item => (
          <Col key={item.id}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={item.image}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body className="d-flex flex-column text-center">
                <Card.Title className="fs-4">{item.name}</Card.Title>
                <Card.Text className="mt-2">
                  {item.description}
                </Card.Text>
                <div className="mt-auto">
                  <span className="text-muted">{formatCurrency(Number(item.price))}</span>
                  <Button
                    className="w-100 mt-2"
                    onClick={() => increaseCartQuantity(item.id)}
                  >
                    Add to Cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>


      <section className="my-5 text-center">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Get the latest updates and offers.</p>
        <Form className="d-flex justify-content-center">
          <Form.Control
            type="email"
            placeholder="Enter your email"
            style={{ maxWidth: "300px" }}
          />
          <Button variant="primary" type="submit" className="ms-2">
            Subscribe
          </Button>
        </Form>
      </section>
    </Container>
  );
}

