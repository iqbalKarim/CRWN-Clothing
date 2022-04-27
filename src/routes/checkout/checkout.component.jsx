import { useContext } from 'react/cjs/react.development';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { CartContext } from '../../contexts/cart.context';

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div>
      {cartItems.map((item) => (
        <CheckoutItem item={item} />
      ))}
    </div>
  );
};

export default Checkout;
