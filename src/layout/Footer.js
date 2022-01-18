import "./Footer.css";
import instagram from '../assets/images/instagram-fill.png';
import youtube from '../assets/images/youtube-fill.png';
import facebook from '../assets/images/facebook-box-fill.png';
import twitter from '../assets/images/twitter-fill.png';

const Footer = () => {
    return (
        <footer className='signInFooter'>
            <span className="PEEKaMEET2020">
                PEEKaMEET©2020
            </span>
            <span className="Follow-Us">
                Follow Us:
            </span>

            <img src={instagram} alt=""
                className="instagram-fill"></img>
            <img src={youtube} alt=""
                className="youtube-fill"></img>
            <img src={facebook} alt=""
                className="facebook-box-fill"></img>
            <img src={twitter} alt=""
                className="twitter-fill"></img>
            
            <span className="FAQs">
                FAQs
            </span>
            <span className="Terms-Conditions">
                Terms {'&'} Conditions
            </span>
            <span className="Privacy-Policy">
                Privacy Policy
            </span>
            <span className="About-Us-Copy">
                About Us
            </span>
            <span className="Press">
                Press
            </span>
            <span className="Contact-Us">
                Contact Us
            </span>
            <span className="Perks">
                Perks
            </span>
            <span className="Blog">
                Blog
            </span>
        </footer>
    )
}

export default Footer