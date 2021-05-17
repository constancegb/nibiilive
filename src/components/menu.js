import React, { useState } from 'react';
import './menu.css';

const initialState = {
  menuContentClass: "homepage-menu-small-screen-content"
}

export default function Menu({homePageMenuClass, page}) {
  const [menuContentClass, setMenuContentClass] = useState(initialState.menuContentClass);

  return (
    <div style={{width: '100%'}}>

      <div className={homePageMenuClass}>
        <a className="homepage-menu-home" href='/'>
          NiBii
        </a>
        <div className="homepage-menu-items">
          <div className="homepage-menu-item example">
            <a className="hover hover-1" href="/collections">Collection<span className="letter-spacing-removed">s</span></a>
          </div>
          <div className="homepage-menu-item example">
            <a className="hover hover-1" href="/contact">Contac<span className="letter-spacing-removed">t</span></a>
          </div>
        </div>
        <div className="homepage-menu-aligner"></div>
      </div>

    <div className="homepage-menu-small-screen-wrapper">
      <div className="homepage-menu-small-screen" onClick={() => setMenuContentClass(`${menuContentClass} slide-right`)}>
        <div className="horizontal-span"></div>
        <div className="horizontal-span"></div>
        <div className="horizontal-span"></div>
        <div className="horizontal-span"></div>
      </div>
    </div>
    <div className={menuContentClass}>
      <div className="menu-closer">
        <svg onClick={() => setMenuContentClass(initialState.menuContentClass)} className="menu-closer-icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
           viewBox="0 0 496.096 496.096"  xmlSpace="preserve">
            <path d="M259.41,247.998L493.754,13.654c3.123-3.124,3.123-8.188,0-11.312c-3.124-3.123-8.188-3.123-11.312,0L248.098,236.686
              L13.754,2.342C10.576-0.727,5.512-0.639,2.442,2.539c-2.994,3.1-2.994,8.015,0,11.115l234.344,234.344L2.442,482.342
              c-3.178,3.07-3.266,8.134-0.196,11.312s8.134,3.266,11.312,0.196c0.067-0.064,0.132-0.13,0.196-0.196L248.098,259.31
              l234.344,234.344c3.178,3.07,8.242,2.982,11.312-0.196c2.995-3.1,2.995-8.016,0-11.116L259.41,247.998z"/>
        </svg>
      </div>
      <div className="menu-items">
        <div className="homepage-menu-item example">
          <a className="hover hover-1" href="/">Accueil</a>
        </div>
        <div className="homepage-menu-item example">
          <a className="hover hover-1" href="/collections">Collections</a>
        </div>
        <div className="homepage-menu-item example">
          <a className="hover hover-1" href="/contact">Contact</a>
        </div>
      </div>
      <div className="footer"></div>

    </div>

  </div>

  );
}
