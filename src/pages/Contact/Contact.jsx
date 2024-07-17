import { Link } from 'react-router-dom';
import styles from './Contact.module.css';

function Contact() {
  return (
    <>
      <section className={`${styles.intro}`}>
        <div className={styles.image}>
          <picture>
            <source srcSet="./images/contactpage-medium.jpg" media="(min-width: 769px) and (max-width: 1024px)" />
            <img src="./images/contactpage-small.jpg" alt="Imágen de la intro." />
          </picture>
        </div>
        <div className={`${styles.text} padding-lg m-auto py-12 bg-darkblue text-light`}>
          <h2 className='
            text-light text-xl leading-xl font-black m-auto
            xs:w-xs
            xs:max-w-xs
            xs:px-xs
            sm:w-sm
            sm:max-w-sm
            sm:px-sm
            md:w-md
            md:max-w-md
            md:px-md
          '>Contactanos</h2>
          <div className={`
              m-auto ${styles.content}
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
            <form action="#" className={`flex flex-col justify-start gap-6 ${styles.form} w-full`}>
              <div className='flex flex-col gap-1 justify-start'>
                <label htmlFor="name">Nombre</label>
                <input type="text" id='name' className='bg-white rounded-md h-12 px-4' />
              </div>
              <div className='flex flex-col gap-1 justify-start'>
                <label htmlFor="lastname">Apellido</label>
                <input type="text" id='lastname' className='bg-white rounded-md h-12 px-4' />
              </div>
              <div className='flex flex-col gap-1 justify-start'>
                <label htmlFor="phone">Teléfono</label>
                <input type="text" id='phone' className='bg-white rounded-md h-12 px-4' />
              </div>
              <div className='flex flex-col gap-1 justify-start'>
                <label htmlFor="email">Email</label>
                <input type="test" id='email' className='bg-white rounded-md h-12 px-4' />
              </div>
              <div className='flex flex-col gap-1 justify-start'>
                <label htmlFor="comment">Consulta</label>
                <textarea id='comment' className='bg-white rounded-lg px-4 min-h-[300px]'></textarea>
              </div>
              <button type='submit' className={`button-width border-2 border-lightblue bg-lightblue text-white mt-6 w-full`}>Enviar</button>
            </form>
            <div className={`${styles.info} w-full flex flex-col justify-start gap-8`}>
              <div className={styles.maps}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13126.945459554408!2d-58.37772667446186!3d-34.66136036733365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a3335230bd052b%3A0x9d632a18eea90a31!2sAvellaneda%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1721235965093!5m2!1ses!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa de Buenos Aires"
                ></iframe>
              </div>
              <div>
                <ul className='flex flex-col justify-start gap-6'>
                  <li>
                    <span className='text-md font-bold'>Ubicación</span>
                    <p>Avellaneda, Buenos Aires, Argentina</p>
                  </li>
                  <li>
                    <span className='text-md font-bold'>Teléfono</span>
                    <p>011 5616 6381</p>
                  </li>
                  <li>
                    <span className='text-md font-bold'>Email</span>
                    <p>ale_strangio@hotmail.com</p>
                  </li>
                  <li>
                    <span className='text-md font-bold'>Redes sociales</span>
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
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
