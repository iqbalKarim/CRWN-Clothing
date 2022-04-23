import { Link, Outlet } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation.styles.scss';

const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link to='/' className='logo-container'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link to='/shop' className='nav-link'>
            Shop
          </Link>
          <Link to='' className='nav-link'></Link>
          <Link to='' className='nav-link'></Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
