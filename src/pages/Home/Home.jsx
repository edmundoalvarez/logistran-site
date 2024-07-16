import { Link, useLocation } from 'react-router-dom';
import styles from './Home.module.css';
import { useEffect } from 'react';

const Home = () => {

  const { hash } = useLocation();

    useEffect(() => {
      if (hash) {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [hash]);

    const handleSmoothScroll = (event, targetId) => {
      event.preventDefault();
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, null, `#${targetId}`);
      }
    };
    
    return (
      <>
        <section className={`${styles.intro}`}>
          <div className={styles.image}>
            <picture>
              <img src="./images/intro-small.jpg" alt="Imágen de la intro." />
            </picture>
          </div>
          <div className={`${styles.text} pt-16 pb-20 max-w-lg m-auto flex flex-col justify-start items-start gap-6`}>
            <h2 className='text-darkblue text-lg leading-lg font-black'>Expertos en Transporte y Logística con 25 Años de Experiencia</h2>
            <p>Ofrecemos soluciones logísticas personalizadas, incluyendo retiro de contenedores en puertos y aeropuertos, almacenaje seguro con vigilancia 24/7, y distribución eficiente de mercadería.</p>
            <div className='flex flex-row justify-start items-start gap-4'>
              <Link to={'/contacto'} className={`button border-2 border-lightblue bg-lightblue text-white`}>Contactanos</Link>
              <Link onClick={(e) => handleSmoothScroll(e, 'clientes')} className={`button border-2 border-lightblue bg-light text-lightblue`}>Nuestros Clientes</Link>
            </div>
          </div>
        </section>

        <section className={`${styles.services} ${styles.spacer} ${styles.layer} pb-24`}>
          <div className={`max-w-lg m-auto flex flex-col justify-start items-start`}>
            <div className={`${styles.service} flex flex-col justify-center align-middle items-center gap-4 text-center py-10 mx-10`}>
              <div className={`${styles.img} ${styles['retiro']}`}></div>
              <h3 className='text-darkblue text-md leading-md font-black'>Retiro puerto / aeropuerto</h3>
              <p className='text-darkblue text-sm leading-sm font-book'>Retiro de contenedores, cargas sueltas, cargas IMO, mercadería fuera de medida, etc.</p>
              <Link className={`button-width border-2 border-lightblue bg-lightblue text-white mt-4`}>Contactar</Link>
            </div>
            <div className={`${styles.service} flex flex-col justify-center align-middle items-center gap-4 text-center py-10 mx-10`}>
              <div className={`${styles.img} ${styles['almacenamiento']}`}></div>
              <h3 className='text-darkblue text-md leading-md font-black'>Depósito cubierto</h3>
              <p className='text-darkblue text-sm leading-sm font-book'>Cuentamos con un total de 800 m2 y sistema de alarmas custodiado la 24 hs.</p>
              <Link className={`button-width border-2 border-lightblue bg-lightblue text-white mt-4`}>Contactar</Link>
            </div>
            <div className={`${styles.service} flex flex-col justify-center align-middle items-center gap-4 text-center py-10 mx-10`}>
              <div className={`${styles.img} ${styles['entrega']}`}></div>
              <h3 className='text-darkblue text-md leading-md font-black'>Desconsolidado, acopio y distribución de mercadería</h3>
              <p className='text-darkblue text-sm leading-sm font-book'>Ofrecemos soluciones logísticas eficientes para optimizar el manejo y la entrega de sus productos.</p>
              <Link className={`button-width border-2 border-lightblue bg-lightblue text-white mt-4`}>Contactar</Link>
            </div>
          </div>
        </section>

        <section id='clientes'>
          <div className='max-w-lg m-auto py-20'>
            <h2 className='text-darkblue text-2xl leading-xl font-black'>Nuestros Clientes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className={`${styles.client} w-full max-w-[300px] h-[100px] m-auto`}></div>
              <div className={`${styles.client} w-full max-w-[300px] h-[100px] m-auto`}></div>
              <div className={`${styles.client} w-full max-w-[300px] h-[100px] m-auto`}></div>
              <div className={`${styles.client} w-full max-w-[300px] h-[100px] m-auto`}></div>
            </div>
          </div>
        </section>

        <section>
          <div className={`padding-lg m-auto py-20 ${styles['contact-us']}`}>
            <div className='flex flex-col justify-start max-w-lg m-auto gap-6'>
              <div className={`${styles.logo} m-auto`}>
                <picture >
                  <img src="/images/logistran-logo.svg" alt="Logo de Logistran" />
                </picture>
              </div>
              <div className='text-center'>
                <h2 className=' text-light text-2xl leading-xl font-black'>Contactanos</h2>
                <div className="">
                  <p className='text-light'>Ofrecemos flexibilidad en la cotización y presupuesto de nuestros servicios, asegurando siempre la optimización de costos operativos para su negocio.</p>
                </div>
                <Link to={'/contacto'} className={`button border-2 border-lightblue bg-transparent text-white m-auto mt-6`}>Ir a formulario</Link>
              </div>

            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default Home;
  