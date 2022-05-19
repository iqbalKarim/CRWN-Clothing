import { useContext } from 'react/cjs/react.development';
import { CartContext } from '../../contexts/cart.context';
import {
  Arrow,
  BaseSpan,
  CheckoutItemContainer,
  ImageContainer,
  Quantity,
  RemoveButton,
  Value,
} from './checkout-item.styles.jsx';

const CheckoutItem = ({ item }) => {
  const { name, imageUrl, price, quantity } = item;
  const { clearItemFromCart, removeItemFromCart, addItemToCart } =
    useContext(CartContext);

  const clearItemHandler = (item) => clearItemFromCart(item);
  const addItemHandler = (item) => addItemToCart(item);
  const removeItemHandler = (item) => removeItemFromCart(item);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={() => removeItemHandler(item)}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={() => addItemHandler(item)}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>$ {price}</BaseSpan>
      <RemoveButton onClick={() => clearItemHandler(item)}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
