import { Link } from 'react-router-dom';
import styles from './About.module.css'
function About() {
    return (
        <>
        <section className={`${styles.intro}`}>
          <div className={styles.image}>
            <picture>
              <img src="./images/about-small.jpg" alt="Imágen de la intro." />
            </picture>
          </div>
          <div className={`${styles.text} py-20 max-w-lg m-auto flex flex-col justify-start items-start gap-6`}>
            <h2 className='text-darkblue text-lg leading-lg font-black'>Quiénes somos</h2>
            <p>En LogiStran, brindamos servicios integrales de Transporte y Logística, respaldados por 25 años de experiencia. Nos especializamos en el retiro de contenedores y cargas desde puertos y aeropuertos, la gestión de mercadería fuera de medida, y contamos con un depósito seguro de 800 m² con vigilancia 24/7.</p>

            <p>También ofrecemos servicios de desconsolidado, acopio y distribución de mercadería, respaldados por una flota diversa de vehículos que cumplen con todas las normativas de tránsito. Además, proporcionamos presupuestos flexibles y cotizaciones personalizadas para optimizar los costos operativos de su empresa.</p>

            <p>Nos comprometemos a ofrecer atención personalizada y los recursos necesarios para apoyar sus proyectos logísticos de manera eficiente y segura.</p>

            <div className='flex flex-row justify-start items-start gap-4 mt-4'>
              <Link className={`button-width border-2 border-lightblue bg-lightblue text-white`}>Contactanos</Link>
              {/* <Link className={`button-width border-2 border-lightblue bg-light text-lightblue`}>Button</Link> */}
            </div>
          </div>
        </section>
      </>
    );
}

export default About;