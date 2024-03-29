import { Offcanvas } from "react-bootstrap"
import { useShoppingCart } from "../context"

type ShoppingCartProps = {
    isOpen: boolean
}

const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
  const { closeCart } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
    </Offcanvas>
  )
}

export default ShoppingCart