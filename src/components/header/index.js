import React from 'react';
import './styles.scss';
import './../../app.scss';
import Logo from './../../assets/graphics/logo.jpeg';

const Header = (props) => {
    return (
        <header className="headerComponent">

            <div className='wrap' >
                <div className="logo">
                  <img className="logoIMG" src={Logo} alt="Logo" />  


                </div>
            </div>

        </header>
    )
};

export default Header;