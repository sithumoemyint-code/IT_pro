import React from 'react'
import load from './Load.module.css'
import { motion } from 'framer-motion'

const loaderVariants = {
    animationOne: {
        x: [-20, 20],
        y: [0, -30],
        transition: {
        x: {
            yoyo: Infinity,
            duration: 0.5,
        },
        y: {
            yoyo: Infinity,
            duration: 0.25,
            ease: 'easeOut'
        }
        }
    }
}

const Loading = () => {
    return (
        <>
            <div className={load.loader_container}>
                <div className={load.container}>
                    <motion.div className={load.loader} variants={loaderVariants} animate='animationOne' /> 
                </div>
            </div>
        </>
        
    )
}
export default Loading