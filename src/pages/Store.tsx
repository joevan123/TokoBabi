
import { Col, Row, Container } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";

export function Store() {
  const imageSize: React.CSSProperties = { height: "400px", objectFit: "cover" };
  return (
    <Container>
      <h1 className="display-6 text-center mb-4">Toko Babi</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map(item => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
