import { Link } from 'react-router-dom';
import { useContext } from 'react/cjs/react.development';
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>
        <Link to='checkout'> GO TO CHECKOUT</Link>
      </Button>
    </div>
  );
};

export default CartDropdown;
