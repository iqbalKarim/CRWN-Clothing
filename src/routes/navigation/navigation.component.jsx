import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import { CartContext } from '../../contexts/cart.context';
import { UserContext } from '../../contexts/user.contexts';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import {
  LogoContainer,
  NavigationContainer,
  NavLink,
  NavLinks,
} from './navigation.styles.jsx';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>
          {/* Sign in if currentUser != null, Sign out if currentUser == null */}
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon />
          <NavLink to=''></NavLink>
          <NavLink to=''></NavLink>
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
