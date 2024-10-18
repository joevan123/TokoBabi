
import { Col, Row, Container } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";
import { useProductList } from "../hooks/useProducts";

export function Store() {
  const { products, isLoading, error } = useProductList();
  console.log(products);
  
  const imageSize: React.CSSProperties = { height: "400px", objectFit: "cover" };
  return (
    <Container>
      <h1 className="display-6 text-center mb-4">Toko Babi</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {isLoading && <p>Loading...</p>}
        {products?.map(item => (
          <Col key={item.id}>
            <StoreItem product={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
