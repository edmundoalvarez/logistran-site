import Hamburger from 'hamburger-react';
import PropTypes from 'prop-types';
import styles from './Header.module.css'

const Header = ({ onMenuToggle, isOpen }) => {
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
          sm:max-w-sm
          md:max-w-md
          lg:max-w-lg
          xl:max-w-xl"
        >
        <div className={styles.logo}>
          <h1 className="font-primary text-md font-bold h-[48px] flex flex-col justify-center">Logistran Logo</h1>
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
        sm:max-w-sm
        md:max-w-md
        lg:max-w-lg
        xl:max-w-xl"
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
