
import styles from './styles.module.scss'
import { Autoplay, A11y } from 'swiper';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import "swiper/css/effect-coverflow";
import "swiper/css/a11y";

import { CardSliderProject } from './CardSliderProject';


interface Props extends React.HTMLAttributes<HTMLDivElement> { }

export const MyProjects = ({ ...rest}:Props) => {
    const card = [{ title: 'ssss' }, { title: 'saasa' }, { title: 'dddddd' }, { title: 'eeee' }]



    return(
        <section className={styles.container} {...rest}>
            <Swiper
                // effect={"slide"}
                modules={[Autoplay, A11y]}
                breakpoints={{
                    640: {
                        width: 640,
                        slidesPerView: 1
                    },
                    960: {
                        width: 960,
                        slidesPerView: 2
                    }
                }}
                centeredSlides={true}
                spaceBetween={40}
                grabCursor // mãozinha no item
                slidesPerView="auto" //quantos ver
                // loop={true}
                autoplay={{
                    delay: 15000,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false
                }}
            >
                {card.map((item) => (
                    <SwiperSlide key={item.title}>

                        <CardSliderProject title={item.title} />
                    </SwiperSlide>
                ))}



            </Swiper>
        </section>
    );
}
