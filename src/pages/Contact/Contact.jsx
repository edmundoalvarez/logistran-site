import styles from './Contact.module.css';
import FbIcon from '../../components/SVG/FbIcon/FbIcon';
import IgIcon from '../../components/SVG/IgIcon/IgIcon';
import WpIcon from '../../components/SVG/WpIcon/WpIcon';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const { register, handleSubmit, formState: { errors }, setError, reset } = useForm();

  const onSubmit = (data, event) => {
    event.preventDefault(); // Prevent the default form submission

    // Validación
    let valid = true;

    if (!data.name) {
      setError('name', { type: 'manual', message: 'El nombre es obligatorio' });
      valid = false;
    }

    if (!data.lastname) {
      setError('lastname', { type: 'manual', message: 'El apellido es obligatorio' });
      valid = false;
    }

    const phonePattern = /^\+?\d+$/;
    if (!data.phone) {
      setError('phone', { type: 'manual', message: 'El teléfono es obligatorio' });
      valid = false;
    } else if (!phonePattern.test(data.phone)) {
      setError('phone', { type: 'manual', message: 'El teléfono debe ser un número válido' });
      valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email) {
      setError('email', { type: 'manual', message: 'El email es obligatorio' });
      valid = false;
    } else if (!emailPattern.test(data.email)) {
      setError('email', { type: 'manual', message: 'El email debe ser válido' });
      valid = false;
    }

    if (!data.comment) {
      setError('comment', { type: 'manual', message: 'La consulta es obligatoria' });
      valid = false;
    }

    if (valid) {
      toast.success('Formulario enviado!', {
        position: "top-center",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      console.log(data);
      reset();
    }
  };

  return (
    <>
      <section className={`${styles.intro}`}>
        <div className={styles.image}>
          <picture>
            <source srcSet="./images/contactpage-xlbig.jpg" media="(min-width: 1400px)" />
            <source srcSet="./images/contactpage-xbig.jpg" media="(min-width: 1280px) and (max-width:1399px)" />
            <source srcSet="./images/contactpage-big.jpg" media="(min-width: 1024px) and (max-width: 1279px)" />
            <source srcSet="./images/contactpage-medium.jpg" media="(min-width: 768px) and (max-width: 1023px)" />
            <img src="./images/contactpage-small.jpg" alt="Imágen de la intro." />
          </picture>
        </div>
        <div className={`
          ${styles.text} m-auto py-12 text-light
          lg:py-20
          xl:py-40
        `}>
          <h2 className='
            text-light text-xl leading-xl font-black m-auto mt-[40px]
            xs:w-xs
            xs:max-w-xs
            xs:px-xs
            sm:w-sm
            sm:max-w-sm
            sm:px-sm
            md:w-md
            md:max-w-md
            md:px-md
            lg:text-center
            lg:text-xxl
            lg:font-black
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
              lg:w-full
              lg:max-w-full
              lg:px-lg
              lg:flex
              lg:flex-row
              lg:justify-center
              lg:align-top
              lg:items-center
              lg:mt-20
              xl:px-0
              xl:max-w-xl
              xl:items-center
            `}>
            <form onSubmit={handleSubmit((data, event) => onSubmit(data, event))} className={`
              flex flex-col justify-start gap-6 ${styles.form} w-full
              lg:w-[55%]
              lg:pr-8
              lg:gap-4
              xl:pr-10
              xl:w-[50%]
              2xl:w-[50%]
            `}>
              <div className='
                flex flex-col justify-start gap-6 w-full
                lg:flex-row
                lg:gap-2
                xl:gap-4
              '>
                <div className='flex flex-col gap-1 justify-start lg:w-[50%]'>
                  <label htmlFor="name">Nombre</label>
                  <input type="text" id='name' {...register('name')} className='bg-white rounded-md h-10 px-4 text-darkblue' />
                  {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                </div>
                <div className='flex flex-col gap-1 justify-start lg:w-[50%]'>
                  <label htmlFor="lastname">Apellido</label>
                  <input type="text" id='lastname' {...register('lastname')} className='bg-white rounded-md h-10 px-4 text-darkblue' />
                  {errors.lastname && <p className="text-red-500">{errors.lastname.message}</p>}
                </div>
              </div>
              <div className='
                flex flex-col justify-start gap-6 w-full
                lg:flex-row
                lg:gap-2
                xl:gap-4
              '>
                <div className='flex flex-col gap-1 justify-start lg:w-[50%]'>
                  <label htmlFor="phone">Teléfono</label>
                  <input type="text" id='phone' {...register('phone')} className='bg-white rounded-md h-10 px-4 text-darkblue' />
                  {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
                </div>
                <div className='flex flex-col gap-1 justify-start lg:w-[50%]'>
                  <label htmlFor="email">Email</label>
                  <input type="test" id='email' {...register('email')} className='bg-white rounded-md h-10 px-4 text-darkblue' />
                  {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </div>
              </div>
              <div className='flex flex-col gap-1 justify-start'>
                <label htmlFor="comment">Consulta</label>
                <textarea id='comment' {...register('comment')} className='bg-white rounded-lg py-3 px-4 min-h-[300px] max-h-[500px] resize-none text-darkblue'></textarea>
                {errors.comment && <p className="text-red-500">{errors.comment.message}</p>}
              </div>
              <button type='submit' className={`
                button-width border-2 border-lightblue bg-lightblue text-white mt-6 w-full py-[8px]
                hover:bg-[#22a4d7]
                hover:border-[#22a4d7]
                transition-all duration-200 ease-in-out
              `}>Enviar</button>
              <ToastContainer
                position="top-center"
                autoClose={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                theme="colored"
                transition= {Bounce}
              />
            </form>
            <div className={`
              ${styles.info} w-full flex flex-col justify-start gap-8
              lg:w-[45%]
              lg:pl-8
              xl:pl-10
              xl:w-[50%]
              2xl:w-[50%]
            `}>
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
                <ul className='flex flex-col justify-start gap-4'>
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
                    <p>info@logistran.com.ar</p>
                  </li>
                  <li>
                    <span className='text-md font-bold'>Redes sociales</span>
                    <ul className={`text-xs flex flex-row justify-start align-middle gap-4`}>
                      <li>
                        <FbIcon baseColor={'white'} hoverColor={'#0093CC'} height={'36px'} width={'36px'}/>
                      </li>
                      <li>
                        <IgIcon baseColor={'white'} hoverColor={'#0093CC'} height={'36px'} width={'36px'}/>
                      </li>
                      <li>
                        <WpIcon baseColor={'white'} hoverColor={'#0093CC'} height={'36px'} width={'36px'}/>
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
