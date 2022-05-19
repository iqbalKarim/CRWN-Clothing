import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';
import { CartIconContainer, ItemCount } from './cart-icon.styles.jsx';

const CartIcon = () => {
  const { cartCount, isCartOpen, setIsCartOpen } = useContext(CartContext);
  const toggleIsCardOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCardOpen}>
      <ShoppingIcon />
      <ItemCount className='item-count'>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
