
import styles from './styles.module.scss'
import { Autoplay, EffectCoverflow } from 'swiper';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


import { CardSliderProject } from './CardSliderProject';
import { useState } from 'react';
import { projects } from '../../utils/helpers';


interface Props extends React.HTMLAttributes<HTMLDivElement> { }

export const MyProjects = ({ ...rest }: Props) => {
    const [active,setActive] = useState<null| number>(null)





    return(
        <section className={styles.container} {...rest}>
            <h2 className={styles.title}>My Projects</h2>
            <Swiper
                onSlideChange={(curr) => setActive(curr.realIndex +1)}
                modules={[Autoplay]}
                className={styles.swiper_container}
                breakpoints={{
                    640: {
                        width: 640,
                        slidesPerView: 1,
                    },
                    960: {
                        width: 960,
                        slidesPerView: 2,
                        spaceBetween: 200,
                    }
                }}
                slidesPerView={2}
                grabCursor // mãozinha no item
                loop={true}
                autoplay={{
                    delay: 12000,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false
                }}
            >
                {projects.map((item, index) => (
                    <SwiperSlide key={index}>
                        <CardSliderProject data={item} active={active === index} />
                    </SwiperSlide>
                ))}


            </Swiper>
        </section>
    );
}
