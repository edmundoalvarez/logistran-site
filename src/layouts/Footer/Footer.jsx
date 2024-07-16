import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
    return (
      <footer className="bg-graylighter text-darkblue p-10">
        <ul className='flex flex-col justify-start items-start align-top gap-8'>
          <li>
            <span className='font-bold text-sm'>Contacto</span>
            <ul className='text-xs'>
              <li>Calle 123, CABA, Argentina</li>
              <li>011 5616 6381</li>
              <li>ale_strangio@hotmail.com</li>
            </ul>
          </li>
          <li>
            <span className='font-bold text-sm'>Redes Sociales</span>
            <ul className={`text-xs flex flex-row justify-start align-middle gap-4`}>
              <li>
                <Link className={`${styles.social} ${styles['social-fb']}`}>
                  <p>Facebook</p>
                </Link>
              </li>
              <li>
                <Link className={`${styles.social} ${styles['social-ig']}`}>
                  <p>Instagram</p>
                </Link>
              </li>
              <li>
                <Link className={`${styles.social} ${styles['social-wp']}`}>
                  <p>Whatsapp</p>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <span className='font-bold text-sm'>Servicios</span>
            <ul className='text-xs'>
              <li>Servicio 1</li>
              <li>Servicio 2</li>
              <li>Servicio 3</li>
            </ul>
          </li>
          <li className='flex flex-col align-top justify-center gap-2 text-center'>
            <p className='text-[0.8rem]'>&copy; 2024 <span className='font-bold'>Logistran</span>. Todos los derechos reservados.</p>
            <p className='text-[0.8rem]'>Diseñado por <span className='font-bold'>Matias</span> y <span className='font-bold'>Edmundo</span></p>
          </li>
        </ul>
      </footer>
    );
  };
  
  export default Footer;