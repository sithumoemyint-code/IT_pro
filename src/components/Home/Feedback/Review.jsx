import React, {useState} from 'react'
import {reviews} from '../slider-data'
import Feedback_CSS from './Feedback.module.css'
import { motion } from 'framer-motion'
import '../../global.css'


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


const Review = () => {
    const [index, setIndex] = useState(0)
    const [people] = useState(reviews)

    const checkNumber = number => {
        if (number > people.length - 1) {
            return 0
        }
    
        if (number < 0) {
            return people.length - 1
        }
    
        return number
    }
    
    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1
            return checkNumber(newIndex)
        })
    }
    
    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1
            return checkNumber(newIndex)
        })
    }
    
    const randomItem = () => {
        let random = Math.ceil(Math.random() * people.length)
        if (random === index) {
            random = index + 1
        }
        setIndex(checkNumber(random))
    }

    return (
        <div className={Feedback_CSS.review}>

            {people.map((person, personIndex) => {
                const {id, name, job, image, text} = person

                let position = 'nextSlide'
                if (personIndex === index) {
                    position = 'activeSlide'
                }
                if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
                    position = 'lastSlide'
                }
                return (
                    <article className={position}  key={id}>
                        {personIndex === index &&
                            <>
                                <div className={Feedback_CSS.img_container}>
                                    <img src={image} alt={name} className={Feedback_CSS.person_img} />   
                                    <span className={Feedback_CSS.quote_icon}>
                                        <i class="fas fa-quote-left" />
                                    </span>
                                </div>
                                <h4 className={Feedback_CSS.author}>{name}</h4>
                                <p className={Feedback_CSS.job}>{job}</p>
                                <p className={Feedback_CSS.info}>{text}</p>
                            </>
                        }
                    </article>
                )
            })}


            <div className={Feedback_CSS.button_container}>
                <button className={Feedback_CSS.prev_btn} onClick={prevPerson}>
                    <i class="fas fa-angle-left" />
                </button>
                <button className={Feedback_CSS.next_btn} onClick={nextPerson}>
                    <i class="fas fa-angle-right" />
                </button>
            </div>

            <motion.button 
                className={Feedback_CSS.random_btn} 
                variants={buttonVariants}
                whileHover='hover'
                onClick={randomItem}
            >
                Suprise me
            </motion.button>
        </div>
    )
}

export default Review