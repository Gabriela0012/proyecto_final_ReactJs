import React from 'react';
import './FooterA.css';
import Instagram from './../../imagenes/instagram.png';
import Facebook from './../../imagenes/facebook.png';
import Twitter from './../../imagenes/twitter.png';
import Whatsapp from './../../imagenes/whatsapp.png';
import Nosotros from '../Nosotros/Nosotros'



function footer() {
  return (
    <div>
      <div className='navegacion d-flex justify-content-around align-items-center'>
        <div className='d-flex-row'>
          <img src={Instagram} className='img-redes'alt='instagram' />
          <img src={Facebook} className='img-redes'alt='facebook' />
          <img src={Twitter} className='img-redes'alt='twitter' />
          <img src={Whatsapp} className='img-redes'alt='whatsapp' />

        </div>
      
       
        <Nosotros />
   
      </div>


    </div>
  )
}

export default footer