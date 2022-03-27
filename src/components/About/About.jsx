import React, { useEffect, useState } from 'react'
import { FaReact, FaChalkboardTeacher } from 'react-icons/fa'
import { BsFillPersonFill, BsFacebook } from 'react-icons/bs'
import { FcApproval } from 'react-icons/fc'
import { experiences } from '../Home/slider-data'
import { motion } from 'framer-motion'
import { Footer } from '../Home'
import Person from '../../assets/face.jpg'
import AboutCss from './About.module.css'
import Loading from '../Loading/Loading'

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
            mass: 0.4,
            damping: 8,
            when: 'beforeChildren',
            staggerChildren: .4
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
      opacity: 1
    }
}
  
const experienceVariant = {
    hidden: {
        opacity: 0
    }, 
    visible: {
        opacity: 1,
        transition: {delay: 1, duration:1.2}
    },
    exit: {
        opacity: 0,
        transition: {ease: 'easeInOut'}
    }
}
  

const About = () => {

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
                <Loading />
                    :
                <>
                    <div className={AboutCss.container}>
                        <motion.div 
                            className={AboutCss.container_main} 
                            variants={containerVariants}
                            initial='hidden'
                            animate='visible'
                            exit='exit'
                        >
                            <img src={Person} className={AboutCss.person_image} alt="about" />
                            <h2>Hein Htet Aung</h2>
                            <motion.div className={AboutCss.icon} variants={childVariant}>
                                <FaReact style={{'marginRight' : '10px'}}  /> <span>Web Developer</span>
                            </motion.div>
                            <motion.div className={AboutCss.icon} variants={childVariant}>
                                <BsFillPersonFill style={{'marginRight' : '10px'}} /> <span> Founder of <i>ITpro</i> </span>
                            </motion.div>
                            <motion.div className={AboutCss.icon} variants={childVariant}>
                                <FaChalkboardTeacher style={{'marginRight' : '10px'}} /> <span> Teaching <i>Web Development Courses</i> </span>
                            </motion.div>
                            <div className={AboutCss.icon_footer}></div>
                        </motion.div>
                    </div>

                    <div className={AboutCss.main}>
                        <motion.div className={AboutCss.main_container}
                            variants={experienceVariant} 
                            initial='hidden'
                            animate='visible'
                            exit='exit'
                        >
                            <h2>Experiences</h2>
                            <div className={AboutCss.underline} />

                            {experiences.map((experience, id) => (
                                <div className={AboutCss.experience} key={id}>
                                    <div className={AboutCss.app_name}>
                                        <FcApproval /> <span>{experience.job_title}</span>
                                    </div>
                                    <div className={AboutCss.app_detail}>
                                        <div className={AboutCss.left}>
                                            <BsFacebook className={AboutCss.app_icon} />
                                        </div>
                                        <div className={AboutCss.right}>
                                            <p>{experience.des}</p>
                                        </div>
                                    </div> 
                                    <div className={AboutCss.underline_app} />
                                </div> 
                            ))}
                        </motion.div>
                    </div>
                    <motion.div
                        variants={experienceVariant} 
                        initial='hidden'
                        animate='visible'
                        exit='exit'
                    >
                        <Footer />
                    </motion.div>
                </>
            }
        </>
    )
}

export default About