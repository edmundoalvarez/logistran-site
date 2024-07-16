import { Link } from 'react-router-dom';
import styles from './MenuMobile.module.css';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

const MenuMobile = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isOpen]);

  return (
    <div className={`${styles['menu-mobile']} ${isOpen ? styles.open : ''} bg-darkblue text-light`}>
      <ul className={`${styles.menu} flex flex-col justify-items-center items-start align-middle pt-[30vh] px-[10vw] gap-16`}>
        <li>
          <Link to='/' className='flex flex-row justify-center align-middle items-center gap-4 font-medium text-md leading-md' onClick={onClose}>
            <span className={`${styles.icon} ${styles['home-icon']}`}></span>
            <p className='flex flex-row justify-center'>Home</p>
          </Link>
        </li>
        <li>
          <Link to='/quienes-somos' className='flex flex-row justify-center align-middle items-center gap-4 font-medium text-md leading-md' onClick={onClose}>
            <span className={`${styles.icon} ${styles['about-icon']}`}></span>
            <p className='flex flex-row justify-center'>Quiénes somos</p>
          </Link>
        </li>
        <li>
          <Link to='/contacto' className='flex flex-row justify-center align-middle items-center gap-4 font-medium text-md leading-md' onClick={onClose}>
            <span className={`${styles.icon} ${styles['contact-icon']}`}></span>
            <p className='flex flex-row justify-center'>Contacto</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

MenuMobile.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default MenuMobile;
