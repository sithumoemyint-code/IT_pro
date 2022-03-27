import React from 'react'
import Button from './Buttom.module.css'
import steve from '../../../assets/Addicted-2-Success.jpg'

const Buttom = () => {

    return (
        <div className={Button.container}>
            <h2 className={Button.text_center}>Quotes</h2>
            <div className={Button.underline} />
            <div className={Button.steve_container}>
                <div className={Button.left}>
                    <p>Everybody in this country should learn how to program a computer, should learn a computer language. Because it teaches you how to think.</p>
                    <h2>STEVE JOBS</h2>
                    <h4>Co-Founter & CEO, Apple Inc.</h4>
                </div>    
                <div className={Button.right}>
                    <div className={Button.right_container}>
                        <img src={steve} alt="" className={Button.person_img} />
                    </div> 
                </div>   
            </div>
        </div>
    )
}

export default Buttom