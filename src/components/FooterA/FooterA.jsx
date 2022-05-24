import React from 'react';
import './FooterA.css';
import Instagram from './../../imagenes/instagram.png';
import Facebook from './../../imagenes/facebook.png';
import Twitter from './../../imagenes/twitter.png';
import Whatsapp from './../../imagenes/whatsapp.png';




function footer() {
  return (
    <div>
      <div className='navegacion d-flex justify-content-center align-items-center'>
        <div className='d-flex-row col-4'>
          <img src={Instagram} className='img-redes'alt='instagram' />
          <img src={Facebook} className='img-redes'alt='facebook' />
          <img src={Twitter} className='img-redes'alt='twitter' />
          <img src={Whatsapp} className='img-redes'alt='whatsapp' />

        </div>
        <div className='d-flex-row col-5 p-3'>
          <h4>NOSOTROS</h4>
          <h4>Somos Lovely, una gran familia. Hace un año nos dedicamos a la venta online. Valoramos tener talles para todos los cuerpos</h4>
        </div>
   
      </div>


    </div>
  )
}

export default footer