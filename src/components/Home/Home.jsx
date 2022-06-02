import React, { useEffect, useCallback } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { sliderData, languages } from './slider-data'
import { Language, Buttom, Footer, Feedback} from '../Home'
import Filter from './Filter/Filter'
import {motion, AnimatePresence} from 'framer-motion'
import HomeCss from './Home.module.css'
import '../global.css'

const containerVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {delay: .3, duration: 1}
    },
    exit: {
        opacity: 0,
        transition: {ease: 'easeInOut'}
    }
}

const Home = () => {
    const [lang, setLang] = React.useState([])
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const slideLength = sliderData.length

    const [select, setSelect] = React.useState(null)

    const autoScroll = true
    let slideInterval
    let intervalTime = 6000

    const nextSlide = useCallback(() => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
    }, [currentSlide, slideLength])

    const prevSlide = useCallback(() => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1)
    }, [currentSlide, slideLength])

    useEffect(() => {
        if (autoScroll) auto()
        return () => clearInterval(slideInterval)
    }, [currentSlide])

    function auto() {
        slideInterval = setInterval(nextSlide, intervalTime)
    }

    useEffect(() => {
        setCurrentSlide(0)
        fetchLanguage()
    }, [])

    const fetchLanguage = () => {
        setLang(languages)
    }

    console.log(languages)

    const filterItems = (category = null) => {
        if (category === 'all') {
            setLang(languages)
            setSelect(category)
            return
        }
        
        if (category != null) {
            const newItems = languages.filter(language => language.category === category)
            console.log(newItems)
            setLang(newItems)
            setSelect(category)
        }
    }

    return (
        <motion.div
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <div className='slider'>
                <AiOutlineArrowLeft className='arrow prev' onClick={prevSlide}/>
                <AiOutlineArrowRight className='arrow next' onClick={nextSlide}/>
                {sliderData.map((slide, index) => {
                    return (
                        <div className={index === currentSlide ? 'slide current' : 'slide'} key={index}>
                            {index === currentSlide && (
                                <>
                                    <img src={slide.image} alt="slide" />
                                    <div className='content'>
                                        <h2>{slide.heading}</h2>
                                        <p>{slide.desc}</p>
                                    </div>
                                </>
                            )}
                        </div>
                    )
                })}       
            </div>
            <div className={HomeCss.language_container}>
                <h2 className={HomeCss.text_center}>Course</h2>
                <div className={HomeCss.underline} />
                <Filter select={select} filterItems={filterItems} />
                <motion.div layout className={HomeCss.main_container}>
                    <AnimatePresence>
                        {lang.map(language => (
                            <Language language={language} key={language.id} />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
            <Buttom /> 
            <Feedback />
            <Footer />    
        </motion.div>
    )
}

export default Home