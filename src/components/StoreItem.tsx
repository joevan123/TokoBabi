import { Button, Card } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"
import { BlockchainProduct } from "../types/BlockchainProduct.type"

type StoreItemProps = {
  product: BlockchainProduct
}

export function StoreItem({ product }: StoreItemProps) {
  const imageSize: React.CSSProperties = { height: "400px", objectFit: "cover" };
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart()
  const quantity = getItemQuantity(product.id)

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={product.image}
        height="200px"
        style={imageSize}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{product.name}</span>
          <span className="ms-2 text-muted">{formatCurrency(Number(product.price))}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseCartQuantity(product.id)}>
              + Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button onClick={() => decreaseCartQuantity(product.id)}>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button onClick={() => increaseCartQuantity(product.id)}>+</Button>
              </div>
              <Button
                onClick={() => removeFromCart(product.id)}
                variant="danger"
                size="sm"
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  )
}