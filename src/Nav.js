import React from 'react';
import './Nav.css';

function Nav() {
    return (
        <div className='nav nav__black'>
            <div className="nav__contents">
                <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
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
