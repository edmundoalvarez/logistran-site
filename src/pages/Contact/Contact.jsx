import { Link } from 'react-router-dom';
import styles from './Contact.module.css';

function Contact() {
  return (
    <>
      <section className={`${styles.intro}`}>
        <div className={styles.image}>
          <picture>
            <img src="./images/contactpage-small.jpg" alt="Imágen de la intro." />
          </picture>
        </div>
        <div className={`${styles.text} padding-lg m-auto py-20 bg-darkblue text-light`}>
          <h2 className='text-light text-lg leading-lg font-black max-w-lg m-auto'>Contactanos</h2>
          <div className={`max-w-lg m-auto ${styles.content}`}>
            <form action="#" className={`flex flex-col justify-start gap-6 ${styles.form} w-full`}>
              <div className='flex flex-col gap-1 justify-start'>
                <label htmlFor="name">Nombre</label>
                <input type="text" id='name' className='bg-[#1c4157] rounded-md h-12 px-4' />
              </div>
              <div className='flex flex-col gap-1 justify-start'>
                <label htmlFor="lastname">Apellido</label>
                <input type="text" id='lastname' className='bg-[#1c4157] rounded-md h-12 px-4' />
              </div>
              <div className='flex flex-col gap-1 justify-start'>
                <label htmlFor="phone">Teléfono</label>
                <input type="text" id='phone' className='bg-[#1c4157] rounded-md h-12 px-4' />
              </div>
              <div className='flex flex-col gap-1 justify-start'>
                <label htmlFor="email">Email</label>
                <input type="test" id='email' className='bg-[#1c4157] rounded-md h-12 px-4' />
              </div>
              <div className='flex flex-col gap-1 justify-start'>
                <label htmlFor="comment">Consulta</label>
                <textarea id='comment' className='bg-[#1c4157] rounded-lg px-4 min-h-[300px]'></textarea>
              </div>
              <button type='submit' className={`button-width border-2 border-lightblue bg-lightblue text-white mt-6 w-full`}>Enviar</button>
            </form>
            <div className={`${styles.info} w-full flex flex-col justify-start gap-8`}>
              <div className={styles.maps}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.23949906467!2d-58.43329845000001!3d-34.615823750000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1721156132999!5m2!1ses!2sar"
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
                    <span className='text-md font-bold'>Dirección</span>
                    <p>Calle 123, CABA, Argentina</p>
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
