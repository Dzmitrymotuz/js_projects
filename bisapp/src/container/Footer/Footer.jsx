import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi';
import {FooterOverlay, Newsletter} from "../../components";
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section_padding'>
    <FooterOverlay/>
    <Newsletter/>

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>17890 3239 Arium, Lincoln Pointe</p>
        <p className='p__opensans'>555-0123</p>
        <p className='p__opensans'>555-0987</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt='logo'/>
        <p className='p__opensans'>The best way to find yourself - is to lose yourself in the service of others</p>
        <img src={images.spoon} alt='spoon' style={{marginTop: '15px'}} className='spoon__image'/>
        <div className='app__footer-links_icons'>
          <FiFacebook/>
          <FiTwitter/>
          <FiInstagram/>
        </div>
      </div>
      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Mon-Fri</p>
        <p className='p__opensans'>10am - 2am</p>
        <p className='p__opensans'>Sat-Sun</p>
        <p className='p__opensans'>10am - 3 am</p>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2024 Dimitry Motuz. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
