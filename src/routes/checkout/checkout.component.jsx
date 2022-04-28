import { useContext } from 'react/cjs/react.development';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { CartContext } from '../../contexts/cart.context';

const Checkout = () => {
  let total = 0;
  const { cartItems } = useContext(CartContext);
  return (
    <div>
      {cartItems.map((item) => {
        total += item.quantity * item.price;
        return <CheckoutItem key={item.id} item={item} />;
      })}
      <h1>{total}</h1>
    </div>
  );
};

export default Checkout;
