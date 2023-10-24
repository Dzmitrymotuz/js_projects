import React from 'react';
import { images } from '../../constants'

import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt='g letter'/>
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__image"/>
        <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor bibendum nisi, non venenatis felis laoreet vel. Curabitur vel quam nec purus convallis tincidunt. Vivamus eget urna sed nulla luctus tincidunt. Nullam auctor, metus vel tristique convallis, erat tortor laoreet ex, et feugiat elit velit sit amet lorem. Aenean pulvinar purus id augue posuere, at bibendum purus tempus. Quisque vel massa non sapien euismod iaculis.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife}/>
      </div>
      <div className="app__aboutus-content_history">
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__image"/>
        <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor bibendum nisi, non venenatis felis laoreet vel. Curabitur vel quam nec purus convallis tincidunt. Vivamus eget urna sed nulla luctus tincidunt. Sed auctor bibendum nisi, non venenatis felis laoreet vel. Curabitur vel quam nec purus convallis tincidunt. Vivamus eget urna sed nulla luctus tincidunt.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
