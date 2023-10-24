import React from 'react';
import { images } from '../../constants'

import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavor"/>
      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
      <p className='p__opensans' style={{ margin: '2rem 0'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor bibendum nisi, non venenatis felis laoreet vel. Curabitur vel quam nec purus convallis tincidunt. Vivamus eget urna sed nulla luctus tincidunt. Nullam auctor, metus vel tristique convallis, erat tortor laoreet ex, et feugiat elit velit sit amet lorem. Aenean pulvinar purus id augue posuere, at bibendum purus tempus. Quisque vel massa non sapien euismod iaculis. Proin in ligula sit amet justo auctor eleifend. Donec tincidunt, eros a hendrerit luctus, nulla nisl lacinia est, ac varius erat mi vel est.</p>
      <button type="button" className='custom__button'>Explore Menu</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='header img'/>
    </div>

    
  </div>
);

export default Header;
