import Hamburger from 'hamburger-react';
import PropTypes from 'prop-types';
import styles from './Header.module.css'

const Header = ({ onMenuToggle, isOpen }) => {
  return (
    <>
      <header
        className="bg-primary text-white p-4 flex flex-row justify-between items-center m-auto w-full
          xs:max-w-xs
          xs:absolute
          xs:top-0
          xs:left-1/2
          xs:transform
          xs:-translate-x-1/2
          sm:max-w-sm 
          md:max-w-md  
          lg:max-w-lg  
          xl:max-w-xl"
      >
        <div className={styles.logo}>
          <h1 className="font-primary text-md font-bold h-[48px] flex flex-col justify-center">Logistran Logo</h1>
        </div>
      </header>
      <div className="z-20 fixed bg-primary text-white p-4 flex flex-row justify-end items-center m-auto w-full
        xs:max-w-xs
        xs:absolute
        xs:top-0
        xs:left-1/2
        xs:transform
        xs:-translate-x-1/2
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
