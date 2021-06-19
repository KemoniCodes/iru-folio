import React from 'react'
import ColorChanger from '../../images/COLOR CHANGER.png'

const Home = () => {
    return (
        <div className="home">
            <h2>KEMONI IS A BRAND
                DESIGNER BASED IN 
                LA.
            </h2>
            <h2 className="left">CURATING AESTHETICS FOR <span>MODERN</span> 
                BRANDS.
            </h2>

            <div className="contact-menu">
                <ul>
                    <li>email</li>
                    <li>behance</li>
                    <li>instagram</li>
                </ul>
            </div>
            
            <img className="color-changer" src={ColorChanger} />

            <hr/>
        </div>
    )
}

export default Home
