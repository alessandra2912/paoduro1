import React from 'react';
import paodurologo from './paodurologo.png';
import './Footer.css';

function Footer() {
    return (
  <footer>  
    <div className='footer'>
      <img src={paodurologo}  alt="logo" className='footer-img'/>
      <p>Panificadora Pão Duro © 2016. Todos os direitos Reservados.</p>
    </div>
  </footer>
        );
    }
    
    export default Footer;