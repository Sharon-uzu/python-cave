import React from 'react';
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";


const Footer = () => {
  return (
    <div>
        <footer>
            <div className="footer">

                <div className="foot1">
                    <h3>PYTHONS CAVE</h3>
                    <p>The Ultimate Arena Where Innovation Meets Opportunities.</p>
                    <div className="icons">
                        <a href="https://www.instagram.com/pythonscave/"><FaSquareInstagram className='f-i'/></a>
                        <a href="https://www.facebook.com/pythonscave/"><FaSquareFacebook className='f-i'/></a>
                        <a href="https://www.linkedin.com/company/pythonscave"><FaLinkedin className='f-i'/></a>
                        <a href="https://www.youtube.com/@PythonsCave"><FaSquareYoutube className='f-i'/></a>
                        <a href="https://x.com/pythons_cave?mx=2"><FaSquareXTwitter className='f-i'/></a>
                    </div>
                </div>

                <div className="foot2 foot2a">
                    <h4>About</h4>
                    <li><Link to='/python'>Pythons</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/sponsors'>Sponsors</Link></li>
                </div>

                <div className="foot2">
                    <h4>Season 1 Schedule</h4>
                    <li><a href="">1. Registration</a></li>
                    <li><a href="">2. Audition</a></li>
                    <li><a href="">3. Pythons Cave</a></li>
                </div>


                <div className="foot2">
                    <h4>Contact Us</h4>
                    <li><a href="mailto:pitch@pythonscave.com">pitch@pythonscave.com</a></li>
                    <li><a href="mailto:sponsor@pythonscave.com">sponsor@pythonscave.com</a></li>
                    <li><a href="tel:07049623723">+234-704-962-3723</a></li>
                    <li><a href="tel:08084741214">+234-808-474-1214</a></li>
                </div>

            </div>

        </footer>
    </div>
  )
}

export default Footer