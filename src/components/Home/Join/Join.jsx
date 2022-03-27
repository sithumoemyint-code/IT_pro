import React from 'react'
import { Link } from 'react-router-dom'
import JoinCss from './Join.module.css'
import { motion, AnimatePresence } from 'framer-motion'

const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
}
  
const modal = {
    hidden: {
        y: '-100vh',
        opacity: 0
    },
    visible: {
        y:'200px',
        opacity:1,
        transition: {delay: 0.5}
    }
}

const Join = ({showModal, setShowModal}) => {
    return (
        <AnimatePresence exitBeforeEnter>
            {showModal && (
                <motion.div className={JoinCss.backdrop}
                    variants={backdrop}
                    initial="hidden"
                    animate="visible"
                    exit='hidden'
                >
                    <motion.div className={JoinCss.create}
                        variants={modal}
                    >
                        <h2>Fill your information</h2>

                        <form>
                            <label>Title:</label>
                            <input type="text" required />
                            
                            <label>Body</label>
                            <textarea required></textarea>

                            <label>Choose ---</label>
                            <select>
                                <option value="frontend">frontend</option>
                                <option value="backend">backend</option>
                            </select>

                            <Link to='/' >
                                <button onClick={() => setShowModal(false)}>Back</button>
                            </Link>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Join