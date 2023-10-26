import React from 'react';
import { images } from '../../constants'
import { SubHeading } from '../../components'
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(0);

  const scroll=(direction)=>{
    const {current} = scrollRef;
    
    if(direction === 'left') {
      current.scrollLeft -= 300;
    }else{
      current.scrollLeft += 300;
    }
  }

  const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04 ];

  return (
  <div className='app__gallery flex__center'>
    <div className='app__gallery-content'>
      <SubHeading title="Instagram"/>
      <h1 className="headtext__cormorant">Photo Gallery</h1>
      <p className='p__opensans' style={{color: "#AAA", marginTop: '2rem' }}>In rhoncus enim. Integer leo nisi, egestas eu mattis vel, sodales condimentum arcu. Integer a erat rutrum, laoreet nisl sit amet, porttitor orci. Vivamus a eros odio. Morbi in lectus velit. Maecenas et libero imperdiet, egestas odio id, malesuada arcu. Aenean semper non erat vitae sagittis. Proin feugiat tincidunt dui, scelerisque ultricies ante dignissim nec. </p>
      <button type='button' className='custom__button'>View More</button>
    </div>
    <div className='app__gallery-images'>
      <div className='app__gallery-images_container' ref={scrollRef}>
        {galleryImages.map((image, index)=>(
          <div className='app__gallery-images_card flex__center' key={`gallery_image-${index+1}`}>
            <img src={image} alt="gallery"/>
            <BsInstagram className='gallery__image-icon'/>
          </div>
        ))}
      </div>
      <div className='app__gallery-images_arrows'>
        <BsArrowLeftShort className='gallery__arrow-icon' onClick={()=>scroll('left')}/>
        <BsArrowRightShort className='gallery__arrow-icon' onClick={()=>scroll('right')}/>

      </div>

    </div>
  </div>)
};

export default Gallery;
