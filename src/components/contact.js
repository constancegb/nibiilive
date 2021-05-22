import React, { useState } from 'react';
import Toaster from './toaster';
import Footer from './footer';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './contact.css';

export default function Contact() {
  const [open, setOpen] = useState(false);
  const [toasterVisible, setToasterVisible] = useState(false);
  const [mail] = useState('Framb0ise.creatrice@gmail.com');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCopyMail = () => {
    navigator.clipboard.writeText(mail);
    setToasterVisible(true);
    setTimeout(() => {
      setToasterVisible(false);
    }, 1000);
  }

  return (
    <div>
      <div className='contact-content'>

        <div className='mail-container'>
          <a className='mail' href={`mailto:${mail}`} >{mail}</a>
          <button onClick={handleCopyMail} className='mail__button'>
            <div>
              <svg className='mail-btn-icon' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 viewBox="0 0 469.333 469.333" xmlSpace="preserve">
                    <path d="M330.667,0h-256C51.093,0,32,19.093,32,42.667v298.667h42.667V42.667h256V0z"/>
                    <path d="M394.667,85.333H160c-23.573,0-42.667,19.093-42.667,42.667v298.667c0,23.573,19.093,42.667,42.667,42.667h234.667
                      c23.573,0,42.667-19.093,42.667-42.667V128C437.333,104.427,418.24,85.333,394.667,85.333z M394.667,426.667H160V128h234.667
                      V426.667z"/>
              </svg>
            </div>
            <div>
              Copier
            </div>
          </button>
        </div>

        <div className='social-networks-container'>

          <div className='social-network-icon' onClick={handleClickOpen}>
            <svg className='social-network-icon-content' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
               viewBox="0 0 513.64 513.64" xmlSpace="preserve">
                <path d="M499.66,376.96l-71.68-71.68c-25.6-25.6-69.12-15.359-79.36,17.92c-7.68,23.041-33.28,35.841-56.32,30.72
                  c-51.2-12.8-120.32-79.36-133.12-133.12c-7.68-23.041,7.68-48.641,30.72-56.32c33.28-10.24,43.52-53.76,17.92-79.36l-71.68-71.68
                  c-20.48-17.92-51.2-17.92-69.12,0l-48.64,48.64c-48.64,51.2,5.12,186.88,125.44,307.2c120.32,120.32,256,176.641,307.2,125.44
                  l48.64-48.64C517.581,425.6,517.581,394.88,499.66,376.96z"/>

            </svg>
            <div className='sni__title'>Téléphone</div>
            <div className='sni__data'>06 62 74 59 19</div>
          </div>


          <a className='social-network-icon' href="https://www.instagram.com/nibii__/" target="_blank" rel="noopener noreferrer">
            <svg className='social-network-icon-content' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          	 viewBox="0 0 512 512" xmlSpace="preserve">
          		<path d="M363.273,0H148.728C66.719,0,0,66.719,0,148.728v214.544C0,445.281,66.719,512,148.728,512h214.544
          			C445.281,512,512,445.281,512,363.273V148.728C512,66.719,445.281,0,363.273,0z M472,363.272C472,423.225,423.225,472,363.273,472
          			H148.728C88.775,472,40,423.225,40,363.273V148.728C40,88.775,88.775,40,148.728,40h214.544C423.225,40,472,88.775,472,148.728
          			V363.272z"/>
          		<path d="M256,118c-76.094,0-138,61.906-138,138s61.906,138,138,138s138-61.906,138-138S332.094,118,256,118z M256,354
          			c-54.037,0-98-43.963-98-98s43.963-98,98-98s98,43.963,98,98S310.037,354,256,354z"/>
          		<circle cx="396" cy="116" r="20"/>
            </svg>
            <div className='sni__title'>Instagram</div>
            <div className='sni__data'>nibii__</div>
          </a>

          <a className='social-network-icon' href="https://www.facebook.com/framb0ise.creati0n" target="_blank" rel="noopener noreferrer">
            <svg className='social-network-icon-content' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="100px" y="100px"
            	 viewBox="0 0 512 512" xmlSpace="preserve">
            		<path d="M452,0H60C26.916,0,0,26.916,0,60v392c0,33.084,26.916,60,60,60h392c33.084,0,60-26.916,60-60V60
            			C512,26.916,485.084,0,452,0z M472,452c0,11.028-8.972,20-20,20H338V309h61.79L410,247h-72v-43c0-16.975,13.025-30,30-30h41v-62
            			h-41c-50.923,0-91.978,41.25-91.978,92.174V247H216v62h60.022v163H60c-11.028,0-20-8.972-20-20V60c0-11.028,8.972-20,20-20h392
            			c11.028,0,20,8.972,20,20V452z"/>
            </svg>
            <div className='sni__title'>Page Facebook</div>
            <div className='sni__data'>Framb0ise créati0n</div>
          </a>

          <a className='social-network-icon' href="https://www.etsy.com/fr/shop/NiBiibyframboise" target="_blank" rel="noopener noreferrer">
            <svg className='social-network-icon-content' version="1.0" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="100px" y="100px"
               height="512.000000pt" viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet" xmlSpace="preserve">
               <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                stroke="none">
               <path d="M4262 5100 c-507 -39 -768 -45 -1832 -45 -569 0 -1275 6 -1569 13
               -293 7 -536 10 -540 7 -7 -8 -5 -228 3 -261 4 -13 19 -30 34 -38 15 -8 122
               -33 237 -56 267 -52 333 -81 386 -167 44 -70 47 -131 59 -903 13 -840 -1
               -2918 -21 -3026 -6 -33 -20 -78 -32 -99 -45 -80 -117 -109 -428 -172 l-229
               -46 0 -154 0 -153 60 0 c34 0 230 7 438 16 413 18 1498 15 2990 -7 409 -6 754
               -8 768 -5 13 4 28 14 33 24 5 9 18 96 30 192 101 844 151 1266 151 1286 0 24
               -1 24 -107 24 -166 0 -161 5 -291 -300 -95 -224 -211 -464 -255 -530 -82 -121
               -201 -218 -319 -260 -99 -34 -183 -40 -708 -48 -594 -9 -951 -1 -1022 22 -132
               42 -200 117 -233 257 -12 54 -15 188 -15 885 0 782 1 822 18 826 31 9 954 -12
               1032 -22 137 -19 233 -83 276 -187 9 -21 39 -123 65 -227 27 -103 55 -200 61
               -214 24 -48 60 -65 152 -70 98 -5 153 9 166 43 5 12 12 423 16 914 l7 891
               -137 0 c-76 0 -145 -4 -155 -10 -26 -13 -34 -39 -96 -293 -30 -125 -64 -250
               -76 -277 -28 -65 -84 -115 -151 -135 -92 -27 -368 -46 -780 -52 l-398 -6 0
               952 0 952 25 25 25 25 873 -3 873 -3 76 -38 c98 -48 170 -124 226 -238 60
               -125 76 -172 148 -427 68 -247 83 -285 113 -302 11 -5 74 -10 140 -10 l120 0
               5 53 c5 42 87 1363 86 1390 0 9 -14 8 -298 -13z"/></g>
            </svg>
            <div className='sni__title'>Store Etsy</div>
            <div className='sni__data'>NiBiibyframboise</div>
          </a>

        </div>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Téléphone</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              06 62 74 59 19
            </DialogContentText>
          </DialogContent>
        </Dialog>

        <Toaster
            visible={toasterVisible}
            type='success'
            content='Email copié dans le presse papier'/>

      </div>
      <Footer footerClass='footer-container bordered'/>
    </div>
  );
}
