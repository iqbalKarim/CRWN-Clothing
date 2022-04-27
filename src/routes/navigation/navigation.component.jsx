import { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.contexts';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <div className='navigation'>
        <Link to='/' className='logo-container'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link to='/shop' className='nav-link'>
            SHOP
          </Link>
          {/* Sign in if currentUser != null, Sign out if currentUser == null */}
          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link to='/auth' className='nav-link'>
              SIGN IN
            </Link>
          )}
          <Link to='' className='nav-link'></Link>
          <Link to='' className='nav-link'></Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
