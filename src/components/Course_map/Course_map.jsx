import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Footer } from '../Home'
import Course from './Course_map.module.css'
import Loading from '../Loading/Loading'
import { road_map } from '../Home/slider-data'

const containerVariants = {
    hidden: {
      opacity: 0,
      x:'100vw'
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring', 
            mass: 0.2,
            damping: 4,
            when: 'beforeChildren',
            staggerChildren: .2
        }
    },
    exit: {
      x: '-100vw',
      transition: {ease: 'easeInOut'}
    }
}

const childVariant = {
    hidden: {
        opacity: 0
    }, 
    visible: {
        opacity: 1,
        transition: {delay: .1, duration: .2}
    },
    exit: {
        opacity: 0,
        transition: {ease: 'easeInOut'}
    }
}

const Course_map = () => {

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, [])

    return (
        <>
            {isLoading ? 
                <Loading /> :
                <div className={Course.container}>
                    <motion.div 
                        className={Course.container_course}
                        variants={containerVariants}
                        initial='hidden'
                        animate='visible'
                        exit='exit'
                    >
                        <h2>Road Map</h2>
                        <div className={Course.underline} />

                        {road_map.map((road, id) => (
                            <div className={Course.road_main} key={id}>
                                <motion.div className={Course.road_container} variants={childVariant}>
                                    <div className={Course.left}>
                                        <div className={Course.left_container}>
                                            <img src={road.image} alt="" className={Course.left_img}/>
                                        </div>
                                    </div>
                                    <div className={Course.right}>
                                        <h3>{road.header}</h3>
                                        <p>{road.des}</p>
                                    </div>
                                </motion.div>
                                <motion.div className={Course.underline_app} variants={childVariant} />
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        variants={childVariant}
                        initial='hidden'
                        animate='visible'
                        exit='exit'
                    >    
                        <Footer />
                    </motion.div>
                </div>
            }
        </>
    )
}

export default Course_map