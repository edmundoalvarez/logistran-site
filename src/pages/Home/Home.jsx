import { Link, useLocation } from "react-router-dom";
import styles from "./Home.module.css";
import { useEffect } from "react";

const Home = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace("#", ""));
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [hash]);

    return (
        <>
            <section
                className={`
        ${styles.intro}
        lg:flex
        lg:flex-row
        lg:justify-center
        lg:h-full
        xl:flex
        xl:flex-row
        xl:justify-center
        xl:h-full
      `}
            >
                <div className={styles.image}>
                    <picture>
                        <source
                            srcSet="./images/intro-xlbig.jpg"
                            media="(min-width: 1400px)"
                        />
                        <source
                            srcSet="./images/intro-xbig.jpg"
                            media="(min-width: 1280px) and (max-width:1399px)"
                        />
                        <source
                            srcSet="./images/intro-big.jpg"
                            media="(min-width: 1024px) and (max-width: 1279px)"
                        />
                        <source
                            srcSet="./images/intro-medium.jpg"
                            media="(min-width: 768px) and (max-width: 1023px)"
                        />
                        <img
                            src="./images/intro-small.jpg"
                            alt="Imágen de la intro."
                        />
                    </picture>
                </div>
                <div
                    className={`
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
          lg:pt-[300px]
          lg:pb-[400px]
          xl:pt-[300px]
          xl:pb-[400px]
          xl:w-[50%]
          2xl:pt-[300px]
          2xl:pb-[500px]
          2xl:px-[40px]
        `}
                >
                    <h2
                        className="
            text-darkblue text-xl leading-xl font-black
            lg:max-w-[380px]
            xl:max-w-[600px]
            xl:text-xxl
            xl:leading-xxl
            2xl:text-xxl
            2xl:leading-xxl
          "
                    >
                        Expertos en Transporte y Logística con 25 Años de
                        Experiencia
                    </h2>
                    <p
                        className="
            text-sm
            lg:max-w-[380px]
            xl:max-w-[500px]
            2xl:text-md
          "
                    >
                        Ofrecemos soluciones logísticas personalizadas,
                        incluyendo retiro de contenedores en puertos y
                        aeropuertos, almacenaje seguro con vigilancia 24/7, y
                        distribución eficiente de mercadería.
                    </p>
                    <div className="flex flex-row flex-wrap justify-start items-start gap-4">
                        <Link
                            to={"/contacto"}
                            className={`
              button border-2 border-lightblue bg-lightblue text-white
              hover:bg-[#22a4d7]
              hover:border-[#22a4d7]
              transition-all duration-200 ease-in-out
            `}
                        >
                            Contactanos
                        </Link>
                    </div>
                </div>
            </section>

            <section
                className={`
        ${styles.services} ${styles.spacer} ${styles.layer} pb-4
        lg:relative
        lg:top-0
        2xl:pb-0
      `}
            >
                <div
                    className={`
          m-auto flex flex-col justify-start items-stretch
          xs:w-xs
          xs:max-w-[420px]
          xs:px-xs
          sm:w-sm
          sm:max-w-[420px]
          sm:px-sm
          md:w-md
          md:max-w-[500px]
          md:px-full
          lg:w-md
          lg:max-w-full
          lg:flex-row
          lg:items-stretch
          lg:px-0
          xl:w-xl
          xl:max-w-xl
        `}
                >
                    <div
                        id="retiro"
                        className={`
            ${styles.service} 
            w-[80%] m-0 mx-auto border-b-[1px] border-graylighter flex flex-col justify-center align-middle items-center gap-4 text-center py-10
            md:w-full
            lg:w-[33%]
            lg:border-0
            lg:border-r-[1px]
            lg:px-14
            lg:py-0
            lg:my-14
            lg:gap-4
            xl:gap-4
          `}
                    >
                        <div
                            className={`${styles.img} ${styles["retiro"]}`}
                        ></div>
                        <h3
                            className="
              text-darkblue text-md leading-md font-black
              lg:h-[65px]
              lg:flex
              lg:flex-col
              lg:justify-center
              lg:align-center
              max-w-[250px]
            "
                        >
                            Retiro puerto / aeropuerto
                        </h3>
                        <p
                            className="
              text-darkblue text-sm leading-sm font-book
              lg:h-[72px]
              xl:h-[60px]
              max-w-[250px]
            "
                        >
                            Retiro de contenedores, cargas sueltas, cargas IMO,
                            mercadería fuera de medida, etc.
                        </p>
                        <Link
                            to={"/contacto"}
                            className={`
              button-width border-2 border-lightblue bg-white text-lightblue mt-4
              transition-all duration-200 ease-in-out
              hover:bg-lightblue
              hover:text-white
            `}
                        >
                            Saber más
                        </Link>
                    </div>
                    <div
                        id="deposito"
                        className={`
            ${styles.service} 
            w-[80%] m-0 mx-auto border-b-[1px] border-graylighter flex flex-col justify-center align-middle items-center gap-4 text-center py-10
            md:w-full
            lg:w-[33%]
            lg:border-0
            lg:border-r-[1px]
            lg:px-14
            lg:py-0
            lg:my-14
            lg:gap-4
            xl:gap-4           
          `}
                    >
                        <div
                            className={`${styles.img} ${styles["almacenamiento"]}`}
                        ></div>
                        <h3
                            className="
              text-darkblue text-md leading-md font-black
              lg:h-[65px]
              lg:flex
              lg:flex-col
              lg:justify-center
              lg:align-center
              max-w-[250px]
            "
                        >
                            Depósito cubierto
                        </h3>
                        <p
                            className="
              text-darkblue text-sm leading-sm font-book
              lg:h-[72px]
              xl:h-[60px]
              max-w-[250px]
            "
                        >
                            Cuentamos con un total de 800 m2 y sistema de
                            alarmas custodiado la 24 hs.
                        </p>
                        <Link
                            to={"/contacto"}
                            className={`
              button-width border-2 border-lightblue bg-white text-lightblue mt-4
              transition-all duration-200 ease-in-out
              hover:bg-lightblue
              hover:text-white
            `}
                        >
                            Saber más
                        </Link>
                    </div>
                    <div
                        id="distribucion"
                        className={`
            ${styles.service} w-[80%] m-0 mx-auto mb-0 border-b-0 flex flex-col justify-center align-middle items-center gap-4 text-center py-10
            md:w-full
            lg:w-[33%]
            lg:border-0
            lg:px-14
            lg:py-0
            lg:my-14
            lg:gap-4
            xl:gap-4
          `}
                    >
                        <div
                            className={`${styles.img} ${styles["entrega"]}`}
                        ></div>
                        <h3
                            className="
              text-darkblue text-md leading-md font-black
              lg:h-[65px]
              lg:flex
              lg:flex-col
              lg:justify-center
              lg:align-center
              max-w-[250px]
            "
                        >
                            Desconsolidado, acopio y distribución de mercadería
                        </h3>
                        <p
                            className="
              text-darkblue text-sm leading-sm font-book
              lg:h-[72px]
              xl:h-[60px]
              max-w-[250px]
            "
                        >
                            Ofrecemos soluciones logísticas eficientes para
                            optimizar el manejo y la entrega de sus productos.
                        </p>
                        <Link
                            to={"/contacto"}
                            className={`
              button-width border-2 border-lightblue bg-white text-lightblue mt-4
              transition-all duration-200 ease-in-out
              hover:bg-lightblue
              hover:text-white
            `}
                        >
                            Saber más
                        </Link>
                    </div>
                </div>
            </section>

            <section
                id="clientes"
                className={`${styles.clients} bg-darkblue relative`}
            >
                <div
                    className="
        m-auto py-32
        xs:w-xs
        xs:max-w-xs
        xs:px-xs
        sm:w-sm
        sm:max-w-sm
        sm:px-sm
        md:w-md
        md:max-w-md
        md:px-md
        lg:w-lg
        lg:max-w-xl
        lg:px-lg
        lg:pb-40
        xl:pt-10
        xl:pb-52
      "
                >
                    <h2 className="text-white text-lg leading-lg font-black">
                        Algunos de Nuestros Clientes
                    </h2>
                    <div
                        className="
          grid grid-cols-2 gap-4 mt-4
          xs:grid-cols-1
          xs:mt-14
          sm:grid-cols-2 
          lg:grid-cols-4
          lg:mt-10
        "
                    >
                        <a
                            className={`${styles.client} w-full max-w-[300px] h-[80px] px-4 m-auto text-center flex flex-col justify-center items-center`}
                            href="https://meip.com.ar/"
                        >
                            MEIP Ingeniería
                        </a>

                        <a
                            className={`${styles.client} w-full max-w-[300px] h-[80px] px-4 m-auto text-center flex flex-col justify-center items-center`}
                            href="https://www.linkedin.com/company/coca-cola-reginald-lee-s.a./?originalSubdomain=ar"
                        >
                            Reginald Lee
                        </a>

                        <a
                            className={`${styles.client} w-full max-w-[300px] h-[80px] px-4 m-auto text-center flex flex-col justify-center items-center`}
                            href="https://www.abyper.com.ar/"
                        >
                            Abecom
                        </a>

                        <a
                            className={`${styles.client} w-full max-w-[300px] h-[80px] px-4 m-auto text-center flex flex-col justify-center items-center`}
                            href="https://www.tamboresdelcomahue.com.ar/"
                        >
                            Tambores del comahue
                        </a>

                        <a
                            className={`${styles.client} w-full max-w-[300px] h-[80px] px-4 m-auto text-center flex flex-col justify-center items-center`}
                            href="https://tecnoheaters.com/"
                        >
                            Tecno Heater
                        </a>

                        <a
                            className={`${styles.client} w-full max-w-[300px] h-[80px] px-4 m-auto text-center flex flex-col justify-center items-center`}
                            href="https://www.eitgroup.com.ar/"
                        >
                            Eit Group
                        </a>

                        <a
                            className={`${styles.client} w-full max-w-[300px] h-[80px] px-4 m-auto text-center flex flex-col justify-center items-center`}
                            href="https://maps.app.goo.gl/qs3BgkNBHxnY254i8"
                        >
                            Güemes Construcciones
                        </a>

                        <a
                            className={`${styles.client} w-full max-w-[300px] h-[80px] px-4 m-auto text-center flex flex-col justify-center items-center`}
                            href="https://maps.app.goo.gl/v3gXthPfWnXX9HvY9"
                        >
                            Salec SRL
                        </a>
                    </div>
                </div>
            </section>

            <section>
                <div className={`m-auto py-20 ${styles["contact-us"]}`}>
                    <div
                        className="
            flex flex-col justify-start max-w-lg m-auto gap-10
          "
                    >
                        <div className={`${styles.logo} m-auto`}>
                            <picture>
                                <img
                                    src="/images/logistran-logo.svg"
                                    alt="Logo de Logistran"
                                />
                            </picture>
                        </div>
                        <div className="text-center flex flex-col justify-center align-middle gap-4">
                            <h2 className=" text-light text-lg leading-lg font-black mb-2">
                                Contactanos
                            </h2>
                            <div className="">
                                <p
                                    className="text-light m-auto
                  xs:w-xs
                  xs:max-w-xs
                  xs:px-xs
                  sm:w-sm
                  sm:max-w-[500px]
                  sm:px-sm
                  md:w-md
                  md:max-w-[600px]
                  md:px-md
                "
                                >
                                    Ofrecemos flexibilidad en la cotización y
                                    presupuesto de nuestros servicios,
                                    asegurando siempre la optimización de costos
                                    operativos para su negocio.
                                </p>
                            </div>
                            <Link
                                to={"/contacto"}
                                className={`
                button border-2 border-lightblue bg-transparent text-white m-auto mt-6
                transition-all duration-200 ease-in-out
                hover:bg-lightblue
              `}
                            >
                                Ir a formulario
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
