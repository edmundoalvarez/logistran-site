import Hamburger from 'hamburger-react';
import PropTypes from 'prop-types';
import styles from './Header.module.css'
import { Link, useLocation } from 'react-router-dom';

const Header = ({ onMenuToggle, isOpen }) => {

  const location = useLocation();

  const isSelected = (path) => location.pathname === path ? styles.selected : '';

  const logoBackgroundClass = location.pathname === '/quienes-somos' ? styles.logoDark : styles.logo;

  const menuTextColorClass = location.pathname === '/contacto' ? 'text-white' : 'text-darkblue';

  return (
    <>
      <header
        className="
          text-white 
          p-4 
          flex flex-row justify-between items-center 
          m-auto 
          absolute
          top-0
          left-1/2
          transform
          -translate-x-1/2
          xs:w-xs
          sm:max-w-full
          md:max-w-full
          lg:max-w-lg
          lg:py-8
          lg:z-[2]
          xl:max-w-xl"
        >
        <div className={logoBackgroundClass}>
          <h1 className="font-primary text-md font-bold h-[48px] flex flex-col justify-center">Logistran Logo</h1>
        </div>
        <div className="
          xs:hidden
          sm:hidden
          md:hidden
          lg:flex
          xl:flex
        ">
          <ul className={`${styles.menu} flex flex-row justify-items-center items-start align-middle gap-6 ${menuTextColorClass}`}>
            <li className={isSelected('/')}>
              <Link to='/' className='flex flex-row justify-center align-middle items-center gap-4 font-medium text-[0.8rem] leading-xs'>Home</Link>
            </li>
            <li className={isSelected('/quienes-somos')}>
              <Link to='/quienes-somos' className='flex flex-row justify-center align-middle items-center gap-4 font-medium text-[0.8rem] leading-xs'>Quiénes somos</Link>
            </li>
            <li className={isSelected('/contacto')}>
              <Link to='/contacto' className='flex flex-row justify-center align-middle items-center gap-4 font-medium text-[0.8rem] leading-xs'>Contacto</Link>
            </li>
          </ul>
        </div>
      </header>
      <div className="
        z-20 
        bg-primary 
        text-white p-4 
        flex flex-row justify-end items-center 
        m-auto
        absolute
        top-0
        right-1/2
        transform
        translate-x-1/2
        xs:w-xs
        sm:max-w-full
        md:max-w-full
        lg:hidden
        xl:hidden"
      >
        <Hamburger size={30} rounded distance="sm" toggled={isOpen} toggle={onMenuToggle} />
      </div>
    </>
  );
};

Header.propTypes = {
  onMenuToggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Header;
