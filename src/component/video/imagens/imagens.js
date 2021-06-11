import React, { useState } from 'react';
import { allImg } from '../../consts';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import useManageMenus from '../../../hooks/useManageMenus';
import "./imagens.css";

const Imagens = () => {

  const [current, setCurrent] = useState(0);
  const length = allImg.length;
  useManageMenus();

  const nextSlider = () => {
    setCurrent( current === length - 1 ? 0 : current + 1);
  };

  const prevSlider = () => {
    setCurrent( current === 0 ? length - 1 : current - 1);
  };

  if(!Array.isArray(allImg) || allImg.length <= 0) {
    return null;
  }

  return (
    <div>
      <section className="slider">
        <IoIosArrowBack className="left-arrow" onClick={prevSlider}/>
        <IoIosArrowForward className="right-arrow" onClick={nextSlider}/>
        <div className="works">
          <div className="photosNumber">{allImg[current].id} of {length}</div>
          {
            allImg.map((item, index )=> ( 
              <div key={index} className={index === current ? 'slide active' : 'slide'}>
              {
                index === current && ( <img src={item.src} alt={item.alt}  className={item.className} />)
              }
              </div>
            ))
          }
        </div>
      </section>
    </div> 
  )
}

export default Imagens;
