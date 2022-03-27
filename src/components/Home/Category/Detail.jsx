import React from 'react'
import {languages} from '../slider-data'
import { useParams, Link } from 'react-router-dom'
import Category from './Language.module.css'
import {motion, AnimatePresence} from 'framer-motion'

const containerVariants = {
    hidden: {
        opacity: 0,
        y:'-50vw'
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring', 
            delay: 0.3
        }
    },
    exit: {
        y:'-50vw',
        transition: {ease: 'easeInOut'}
    }
}

const buttonVariants = {
    hover: {
        scale: 1.1,
        textShadow: "0px 0px 8px rgb(255,255,255)",
        boxShadow: "0px 0px 8px rgb(255,255,255)",
        transition: {
            duration: 0.3,
            yoyo: Infinity
        }
    }
  }

const Detail = ({setShowModal}) => {
    const {id} = useParams()

    return (
        <motion.div 
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
            className={Category.container}
        >
            <AnimatePresence>
                {languages.filter(language => language.id == id).map((card, index) => (
                    <div key={index} className={Category.detail_container}>
                        <div className={Category.left}>
                            <img src={card.image} alt="language" className={Category.image} />
                        </div>
                        <div className={Category.right}>
                            <h2>{card.heading}</h2>
                            <p>{card.des}</p>
                            
                            <div className={Category.btn_center}>
                                <motion.button 
                                    className={Category.enroll} 
                                    variants={buttonVariants}
                                    whileHover='hover'
                                    onClick={() => setShowModal(true)}
                                >
                                    Enroll
                                </motion.button>
                                <Link to='/' >
                                    <motion.button 
                                        className={Category.cancel} 
                                        variants={buttonVariants}
                                        whileHover='hover'
                                    >
                                        Cancel
                                    </motion.button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </AnimatePresence>
        </motion.div>
    )
}

export default Detail