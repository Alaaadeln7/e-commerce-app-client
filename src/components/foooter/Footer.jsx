import React, { useState } from 'react'
import { IoMailOutline } from "react-icons/io5";
import { FaFacebook, FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";
import './footer.css'


const Footer = () => {
    const [selectedLang, setSelectedLang] = useState("en");

    return (
        <div className="footer">
            <div className="container">
                <div className="content">
                    <div className="roomOne">
                        <div className="box">
                            <h1>about</h1>
                            <h5>home</h5>
                            <h5>shop</h5>
                            <h5>our story</h5>
                            <h5>blog</h5>
                            <select
                                value={selectedLang}
                                onChange={(e) => setSelectedLang(e.target.value)}
                                className="px-4 py-2 border rounded-lg"
                                >
                                <option value="en">English</option>
                                <option value="ar">العربية</option>
                                <option value="fr">Français</option>
                                <option value="de">Deutsch</option>
                                <option value="es">Español</option>
                            </select>
                        </div>
                        <div className="box">
                            <h1>help</h1>
                            <h5>Shipping & Returns</h5>
                            <h5>track order</h5>
                            <h5>FAQs</h5>
                        </div>
                        <div className="box">
                            <h1>contact</h1>
                            <h5>phone</h5>
                            <h4>(+1) 123 456 7893</h4>
                            <h5>email</h5>
                            <h4>name@email.com</h4>
                        </div>
                    </div>
                    <div className="roomTow">
                        <h1>Receive new promotions</h1>
                        <p>Duis ea tempor commodo amet reprehende</p>
                        <div className="form">
                            <label htmlFor="">
                                <IoMailOutline className='mail'/>
                                <input type="email" placeholder='input your email' required />
                            </label>
                            <button type='submit'>subscrip</button>
                        </div>
                        <div className="social">
                            <FaXTwitter />
                            <FaFacebook />
                            <FaLinkedin />
                            <FaYoutube />
                        </div>
                        <p>© 2025 Brand, Inc. privacy. terms. Sitemap</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
