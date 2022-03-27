import React, { useRef, useEffect, useState } from 'react'
import Nav from './Navbar.module.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import logo from '../../assets/commerce.png'
import '../global.css'

const navVariants = {
    hidden: {y: -150},
    visible: {
        y: 0,
        transition: { delay: 0.2, type: 'spring', stiffness: 100 }
    }
}

const Navbar = () => {
    const [click, setClick] = useState(false)
    const headerRef = useRef(null)
    const headerColorRef = useRef(null)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {   
                headerRef.current.classList.add('shrink')
                headerColorRef.current.classList.add('shrink_color')
            } else{
                headerRef.current.classList.remove('shrink')
                headerColorRef.current.classList.remove('shrink_color')
            }
        })
        return () => {
            window.removeEventListener('scroll')
        }
    }, [])

    return (
        <motion.nav className='nav' ref={headerColorRef}
            variants={navVariants}
            initial="hidden"
            animate="visible"
        >
            <div className='wrapper' ref={headerRef}>
                <Link to='/'>
                    <img src={logo} className={Nav.img} alt="" />
                </Link>
                <div className='menu_icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <div className={click ? 'nav_menu active' : 'nav_menu'}>
                    <div className='nav_item'>
                        <Link className='rightLink' to='/' onClick={closeMobileMenu}>Home</Link>
                    </div>
                    <div className='nav_item'>
                        <Link className='rightLink' to='/about' onClick={closeMobileMenu}>About</Link>
                    </div>
                    <div className='nav_item'>
                        <Link className='rightLink' to='/course_map' onClick={closeMobileMenu}>Course Map</Link>
                    </div>
                </div>
            </div>
        </motion.nav>
    )
}

export default Navbar