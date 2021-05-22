import React from 'react';
import './footer.css';

export default function Footer({ footerClass }) {

  return (
    <div className={footerClass}>
      <div className='trademark'>2021 : Nibii® marque Française déposée</div>

      <div className='socials'>
        <a className='' href="https://www.instagram.com/nibii__/" target="_blank" rel="noopener noreferrer">
          <svg className='footer-icons' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
           viewBox="0 0 512 512" xmlSpace="preserve">
            <path d="M363.273,0H148.728C66.719,0,0,66.719,0,148.728v214.544C0,445.281,66.719,512,148.728,512h214.544
              C445.281,512,512,445.281,512,363.273V148.728C512,66.719,445.281,0,363.273,0z M472,363.272C472,423.225,423.225,472,363.273,472
              H148.728C88.775,472,40,423.225,40,363.273V148.728C40,88.775,88.775,40,148.728,40h214.544C423.225,40,472,88.775,472,148.728
              V363.272z"/>
            <path d="M256,118c-76.094,0-138,61.906-138,138s61.906,138,138,138s138-61.906,138-138S332.094,118,256,118z M256,354
              c-54.037,0-98-43.963-98-98s43.963-98,98-98s98,43.963,98,98S310.037,354,256,354z"/>
            <circle cx="396" cy="116" r="20"/>
          </svg>
        </a>

        <a className='' href="https://www.etsy.com/fr/shop/NiBiibyframboise" target="_blank" rel="noopener noreferrer">
          <svg className='footer-icons etsy' version="1.0" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="100px" y="100px"
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
        </a>

        <a className='' href="https://www.facebook.com/framb0ise.creati0n" target="_blank" rel="noopener noreferrer">
          <svg className='footer-icons' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="100px" y="100px"
          	 viewBox="0 0 512 512" xmlSpace="preserve">
          		<path d="M452,0H60C26.916,0,0,26.916,0,60v392c0,33.084,26.916,60,60,60h392c33.084,0,60-26.916,60-60V60
          			C512,26.916,485.084,0,452,0z M472,452c0,11.028-8.972,20-20,20H338V309h61.79L410,247h-72v-43c0-16.975,13.025-30,30-30h41v-62
          			h-41c-50.923,0-91.978,41.25-91.978,92.174V247H216v62h60.022v163H60c-11.028,0-20-8.972-20-20V60c0-11.028,8.972-20,20-20h392
          			c11.028,0,20,8.972,20,20V452z"/>
          </svg>
        </a>

      </div>

      <div className='made-by'>
        Site réalisé par <span><a className='constance' href="https://www.linkedin.com/in/constancegobert/" target="_blank" rel="noopener noreferrer">Constance Gobert</a></span>
      </div>
    </div>
  );
}
