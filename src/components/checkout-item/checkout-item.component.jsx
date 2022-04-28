import { useContext } from 'react/cjs/react.development';
import { CartContext } from '../../contexts/cart.context';
import './checkout-item.styles.scss';

const CheckoutItem = ({ item }) => {
  const { removeItemFromCart, addItemToCart } = useContext(CartContext);
  const deleteHandler = (item) => {};
  const increaseItemCount = (item) => {
    addItemToCart(item);
  };
  const decreaseItemCount = (item) => {
    removeItemFromCart(item);
  };

  return (
    <div>
      <h1>{item.name}</h1> <span>{item.quantity}</span>
      <button onClick={() => deleteHandler(item)}>delete</button>
      <button onClick={() => increaseItemCount(item)}>Increase</button>
      <button onClick={() => decreaseItemCount(item)}>decrease</button>
    </div>
  );
};

export default CheckoutItem;
