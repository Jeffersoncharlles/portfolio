import styles from './styles.module.css'
import Image from 'next/image';
import { motion} from 'framer-motion'
import { projects } from '../../utils/helpers';
import { useEffect, useRef, useState } from 'react';

export const Carrossel = () => {
    const [width,setWidth] = useState(0)
    const carousel = useRef<any>(null)

    useEffect(() => {
        setWidth(Number(carousel.current?.scrollWidth)  - carousel.current?.offsetWidth)
    },[])
    return(
        <div className={styles.container}>
            <h2>My Projects</h2>
            <div className='max-w-6xl'>
                <motion.div className='cursor-grab overflow-hidden' whileTap={{ cursor: "grabbing" }} ref={carousel}>
                <motion.div className='flex'
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        transition={{duration:0.8}}
                        initial={{ x: 200 }}
                        animate={{x:0}}
                >
                    {projects.map((item) => (
                        <motion.div key={item.title} className="min-h-[300px] min-w-[600px] p-6">
                            <Image src={item.imageUrl} alt="" width={648} height={431}  className="w-full h-[70%] pointer-events-none"/>
                            <div className='flex flex-col justify-center items-start '>
                                <h4 className='mt-6'>{item.title}</h4>
                                <p className='mt-4'>{item.body}</p>
                            </div>
                        </motion.div>

                ))}

                </motion.div>
            </motion.div>
            </div>
        </div>
    );
}
