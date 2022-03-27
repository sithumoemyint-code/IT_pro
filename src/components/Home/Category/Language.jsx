import React from 'react'
import { useHistory } from 'react-router-dom'
import {motion} from 'framer-motion'
import Category from './Language.module.css'


const Language = ({language}) => {

    const history = useHistory()

    const get = id => {
        history.push(`/detail/${id}`)
    }

    return (
        <motion.div
            layout 
            animate={{opacity: 1, scale: 1}}
            initial={{opacity: 0, scale: 0}}
            exit={{opacity: 0, scale: 0}}
            className={Category.cards__item__link}
        >
            <figure className={Category.cards}>
                <img src={language.image} alt="language" className={Category.category_img} onClick={() => get(language.id)} />
            </figure>
            <div className={Category.cards__item__info}>
                <h3 className={Category.cards__item__text}>{language.heading}</h3>
            </div>
        </motion.div>
    )
}

export default Language