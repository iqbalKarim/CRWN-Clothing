import { useContext } from 'react/cjs/react.development';
import { CartContext } from '../../contexts/cart.context';
import './checkout-item.styles.scss';

const CheckoutItem = ({ item }) => {
  const { name, imageUrl, price, quantity } = item;
  const { clearItemFromCart, removeItemFromCart, addItemToCart } =
    useContext(CartContext);

  const clearItemHandler = (item) => clearItemFromCart(item);
  const addItemHandler = (item) => addItemToCart(item);
  const removeItemHandler = (item) => removeItemFromCart(item);

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeItemHandler(item)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItemHandler(item)}>
          &#10095;
        </div>
      </span>
      <span className='price'>$ {price}</span>
      <div className='remove-button' onClick={() => clearItemHandler(item)}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
