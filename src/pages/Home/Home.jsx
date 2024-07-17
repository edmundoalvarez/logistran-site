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

    // const handleSmoothScroll = (event, targetId) => {
    //   event.preventDefault();
    //   const targetElement = document.getElementById(targetId);
    //   if (targetElement) {
    //     targetElement.scrollIntoView({ behavior: 'smooth' });
    //     window.history.pushState(null, null, `#${targetId}`);
    //   }
    // };
    
    return (
      <>
        <section className={`${styles.intro}`}>
          <div className={styles.image}>
            <picture>
              <source srcSet="./images/intro-medium.jpg" media="(min-width: 769px) and (max-width: 1024px)" />
              <img src="./images/intro-small.jpg" alt="Imágen de la intro." />
            </picture>
          </div>
          <div className={`
            ${styles.text} pt-12 pb-20 m-auto flex flex-col justify-start items-start gap-6
            xs:w-xs
            xs:max-w-xs
            xs:px-xs
            sm:w-sm
            sm:max-w-sm
            sm:px-sm
            md:w-md
            md:max-w-md
            md:px-md
          `}>
            <h2 className='text-darkblue text-xl leading-xl font-black'>Expertos en Transporte y Logística con 25 Años de Experiencia</h2>
            <p className='text-sm'>Ofrecemos soluciones logísticas personalizadas, incluyendo retiro de contenedores en puertos y aeropuertos, almacenaje seguro con vigilancia 24/7, y distribución eficiente de mercadería.</p>
            <div className='flex flex-row flex-wrap justify-start items-start gap-4'>
              <Link to={'/contacto'} className={`button border-2 border-lightblue bg-lightblue text-white`}>Contactanos</Link>
              {/* <Link onClick={(e) => handleSmoothScroll(e, 'clientes')} className={`button border-2 border-lightblue bg-light text-lightblue`}>Nuestros Clientes</Link> */}
            </div>
          </div>
        </section>

        <section className={`${styles.services} ${styles.spacer} ${styles.layer} pb-24`}>
          <div className={`
            m-auto flex flex-col justify-start items-start
            xs:w-xs
            xs:max-w-[420px]
            xs:px-xs
            sm:w-sm
            sm:max-w-[420px]
            sm:px-sm
            md:w-md
            md:max-w-[500px]
            md:px-full

          `}>
            <div id='retiro' className={`
              ${styles.service} 
              w-[80%] m-0 mx-auto border-b-[1px] border-graylighter flex flex-col justify-center align-middle items-center gap-4 text-center py-10
              md:w-full
            `}>
              <div className={`${styles.img} ${styles['retiro']}`}></div>
              <h3 className='text-darkblue text-md leading-md font-black'>Retiro puerto / aeropuerto</h3>
              <p className='text-darkblue text-sm leading-sm font-book'>Retiro de contenedores, cargas sueltas, cargas IMO, mercadería fuera de medida, etc.</p>
              <Link className={`button-width border-2 border-lightblue bg-white text-lightblue mt-4`}>Saber más</Link>
            </div>
            <div id='deposito' className={`
              ${styles.service} 
              w-[80%] m-0 mx-auto border-b-[1px] border-graylighter flex flex-col justify-center align-middle items-center gap-4 text-center py-10
              md:w-full
            `}>
              <div className={`${styles.img} ${styles['almacenamiento']}`}></div>
              <h3 className='text-darkblue text-md leading-md font-black'>Depósito cubierto</h3>
              <p className='text-darkblue text-sm leading-sm font-book'>Cuentamos con un total de 800 m2 y sistema de alarmas custodiado la 24 hs.</p>
              <Link className={`button-width border-2 border-lightblue bg-white text-lightblue mt-4`}>Saber más</Link>
            </div>
            <div id='distribucion' className={`
              ${styles.service} w-[80%] m-0 mx-auto mb-0 border-b-0 flex flex-col justify-center align-middle items-center gap-4 text-center py-10
              md:w-full
            `}>
              <div className={`${styles.img} ${styles['entrega']}`}></div>
              <h3 className='text-darkblue text-md leading-md font-black'>Desconsolidado, acopio y distribución de mercadería</h3>
              <p className='text-darkblue text-sm leading-sm font-book'>Ofrecemos soluciones logísticas eficientes para optimizar el manejo y la entrega de sus productos.</p>
              <Link className={`button-width border-2 border-lightblue bg-white text-lightblue mt-4`}>Saber más</Link>
            </div>
          </div>
        </section>

        <section id='clientes'>
          <div className='
            m-auto py-20
            xs:w-xs
            xs:max-w-xs
            xs:px-xs
            sm:w-sm
            sm:max-w-sm
            sm:px-sm
            md:w-md
            md:max-w-md
            md:px-md
          '>
            <h2 className='text-darkblue text-lg leading-lg font-black'>Nuestros Clientes</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mt-4">
              <div className={`${styles.client} w-full max-w-[300px] h-[100px] m-auto`}></div>
              <div className={`${styles.client} w-full max-w-[300px] h-[100px] m-auto`}></div>
              <div className={`${styles.client} w-full max-w-[300px] h-[100px] m-auto`}></div>
              <div className={`${styles.client} w-full max-w-[300px] h-[100px] m-auto`}></div>
            </div>
          </div>
        </section>

        <section>
          <div className={`m-auto py-20 ${styles['contact-us']}`}>
            <div className='flex flex-col justify-start max-w-lg m-auto gap-10'>
              <div className={`${styles.logo} m-auto`}>
                <picture >
                  <img src="/images/logistran-logo.svg" alt="Logo de Logistran" />
                </picture>
              </div>
              <div className='text-center flex flex-col justify-center align-middle gap-4'>
                <h2 className=' text-light text-lg leading-lg font-black mb-2'>Contactanos</h2>
                <div className="">
                  <p className='text-light m-auto
                    xs:w-xs
                    xs:max-w-xs
                    xs:px-xs
                    sm:w-sm
                    sm:max-w-[500px]
                    sm:px-sm
                    md:w-md
                    md:max-w-[600px]
                    md:px-md
                  '>
                    Ofrecemos flexibilidad en la cotización y presupuesto de nuestros servicios, asegurando siempre la optimización de costos operativos para su negocio.</p>
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
  