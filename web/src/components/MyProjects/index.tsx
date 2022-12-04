import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper';
// Import Swiper styles

// import 'swiper/css/autoplay';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import styles from './styles.module.scss'
import { CardSliderProject } from './CardSliderProject';

interface Props extends React.HTMLAttributes<HTMLDivElement> { }

export const MyProjects = ({ ...rest}:Props) => {
    const card = [{ title: 'ssss' }, { title: 'saasa' }, { title: 'dddddd' }, { title: 'eeee' }]
    return(
        <section className={styles.container} {...rest}>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 300,
                    modifier: 3,
                    slideShadows: false,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className='w-screen h-[640px] flex justify-center items-center'
            >
                    <SwiperSlide >
                        <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                    </SwiperSlide>
            </Swiper>
        </section>
    );
}
