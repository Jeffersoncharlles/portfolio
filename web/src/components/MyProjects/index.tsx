
import styles from './styles.module.scss'
import { Autoplay, A11y } from 'swiper';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

import { CardSliderProject } from './CardSliderProject';
import { useState } from 'react';
import Image from 'next/image';
import { projects } from '../../utils/helpers';


interface Props extends React.HTMLAttributes<HTMLDivElement> { }

export const MyProjects = ({ ...rest }: Props) => {
    const [active,setActive] = useState(0)





    return(
        <section className={styles.container} {...rest}>
            <h2>My Projects</h2>
            <Swiper
                // effect={"slide"}
                // modules={[Autoplay]}
                // breakpoints={{
                //     640: {
                //         width: 640,
                //         slidesPerView: 1
                //     },
                //     960: {
                //         width: 960,
                //         slidesPerView: 2
                //     }
                // }}
                centeredSlides={true}
                spaceBetween={40}
                grabCursor // mãozinha no item
                slidesPerView={"auto"} //quantos ver
                // speed={800}
                // onSlideChange={(cur) => setActive((cur?.realIndex))}
                loop={true}
                autoplay={{
                    delay: 15000,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false
                }}
            >
                {projects.map((item, index) => (
                    <SwiperSlide key={item.title}>
                        <CardSliderProject data={item}/>
                    </SwiperSlide>
                ))}


            </Swiper>
        </section>
    );
}
