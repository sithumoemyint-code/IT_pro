import React from 'react'
import { BsFacebook, BsYoutube, BsInstagram, BsTelephoneFill } from 'react-icons/bs'
import { HiLocationMarker, HiMail } from 'react-icons/hi'
import Foot from './Footer.module.css'

const Footer = () => {
    return (
        <div className={Foot.container}>
            <div className={Foot.footer_container}>
                <div className={Foot.left}>
                    <h2>LAMA.</h2>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.</p>
                    <div className={Foot.social_container}>
                        <div className={Foot.social_icon} style={{'background-color' : '#3B5999'}}>
                            <BsFacebook />
                        </div>
                        <div className={Foot.social_icon} style={{'background-color' : '#E4405F'}}>
                            <BsYoutube />
                        </div>
                        <div className={Foot.social_icon} style={{'background-color' : '#55ACEE'}}>   
                            <BsInstagram />
                        </div>
                    </div>
                </div>
                <div className={Foot.right}>
                    <h2>Contact</h2>
                    <div className={Foot.contact_item}>
                        <HiLocationMarker style={{'marginRight' : '10px'}} /> <span>622 Dixie Path , South Tobinchester 98336</span> 
                    </div>
                    <div className={Foot.contact_item}>
                        <BsTelephoneFill style={{'marginRight' : '10px'}} /> <span>+1 234 56 78</span>
                    </div>
                    <div className={Foot.contact_item}>
                        <HiMail style={{'marginRight' : '10px'}} /> <span>contact@lama.dev</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer