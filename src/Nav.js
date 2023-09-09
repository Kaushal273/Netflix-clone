import React, { useEffect } from 'react';
import './Nav.css';
import { useState } from 'react';

function Nav() {

    const[show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    },[])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__contents">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                    className='nav__logo'
                    alt="logo"
                />
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
                    className='nav__avatar'
                    alt="" />
            </div>
        </div>
    )
}

export default Nav
