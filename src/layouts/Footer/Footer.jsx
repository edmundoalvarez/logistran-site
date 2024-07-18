import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
    const handleSmoothScroll = (event, targetId) => {
      event.preventDefault();
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, null, `#${targetId}`);
      }
    };

    return (
      <footer className="bg-graylighter text-darkblue max-w-[100%]">
        <ul className='
          flex flex-col justify-start items-start align-top gap-8 m-auto py-12
          xs:w-xs
          xs:max-w-[440px]
          xs:px-xs
          sm:w-sm
          sm:max-w-sm
          sm:px-sm
          md:w-md
          md:max-w-md
          md:px-md
          lg:w-lg
          lg:max-w-lg
          lg:px-0
          lg:flex-row
          lg:justify-between
        '>
          <li className='lg:w-[25%]'>
            <span className='font-bold text-sm'>Contacto</span>
            <ul className='text-xs'>
              <li>Avellaneda, Buenos Aires, Argentina.</li>
              <li>011 5616 6381</li>
              <li>info@logistran.com.ar</li>
            </ul>
          </li>
          <li className='lg:w-[25%]'>
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
          <li className='lg:w-[25%]'>
            <span className='font-bold text-sm'>Servicios</span>
            <ul className='text-xs'>
              <li>
                <Link onClick={(e) => handleSmoothScroll(e, 'retiro')}>Retiro puerto / aeropuerto.</Link>
              </li>
              <li>
                <Link onClick={(e) => handleSmoothScroll(e, 'deposito')}>Depósito cubierto.</Link>
              </li>
              <li>
                <Link onClick={(e) => handleSmoothScroll(e, 'distribucion')}>Desconsolidado, acopio y distribución de mercadería.</Link>
              </li>
            </ul>
          </li>
          <li className='
            flex flex-col align-top justify-center gap-2 text-center w-full border-t border-graydarker pt-8
            lg:w-[25%] 
            lg:border-t-0
            lg:pt-0
            lg:text-start
            lg:justify-center
            lg:align-middle
            lg:items-start
          '>
            <p className='text-[0.8rem]'>&copy; 2024 <span className='font-bold'>Logistran</span>. Todos los derechos reservados.</p>
            <p className='text-[0.8rem]'>Diseñado por <span className='font-bold'>Matias</span> y <span className='font-bold'>Edmundo</span></p>
          </li>
        </ul>
      </footer>
    );
  };
  
  export default Footer;