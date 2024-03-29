import styles from './styles.module.css'
import Image from 'next/image';
import { projects } from '../../../utils/helpers';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import "swiper/css/pagination";
import { GetStaticProps, GetStaticPropsContext } from 'next';


interface Props extends React.HTMLAttributes<HTMLDivElement> {
    carousel: {
        slug: string;
        title: string;
        body: string;
        imageProjects: string;
    }[]
}

export const CarrosselProject = ({ carousel,...rest}:Props) => {

    return(
        <section className={styles.container} {...rest}>
            <h2 className={styles.title}>My Projects</h2>
            <>
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={20}
                    slidesPerView={3}
                    breakpoints={{
                        375: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                            centeredSlides:true
                        },
                        960: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1440: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    }}
                    grabCursor // mãozinha no item
                    loop={true}
                    autoplay={{
                        delay: 8000,
                        pauseOnMouseEnter: true,
                        disableOnInteraction: false
                    }}
                    className={styles.cards}
                >
                    {carousel.map((item, index) => (
                        <SwiperSlide key={item.slug} className={styles.card}  >
                            <div>
                                 <Image src={item.imageProjects} alt="" width={570} height={380.65} />
                                <div className={styles.cards_body}>
                                    <h3 className={styles.titleCard}>{item.title}</h3>
                                    <p className={styles.body}>{item.body.length >= 78 ? item.body.slice(0, 78).concat('...') : item.body}</p>
                                </div>
                           </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </>
        </section>
    );
}
