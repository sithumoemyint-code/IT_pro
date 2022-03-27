import React from 'react'
import Review from './Review'
import Feedback_CSS from './Feedback.module.css'

const Feedback = () => {
    return (
        <main>
            <div className={Feedback_CSS.container}>
                <div className={Feedback_CSS.title}>
                    <h2>Feedback</h2>
                    <div className={Feedback_CSS.underline}></div>
                </div>

                <Review />
            </div>
        </main>
    )
}

export default Feedback