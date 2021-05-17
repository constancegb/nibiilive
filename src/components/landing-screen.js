import React, { useState, useEffect } from 'react';
import Menu from './menu';
import './landing-screen.css';
import { pages } from '../helpers/pages';

const { HOMEPAGE } = pages;
let last_known_scroll_position = 0;
let ticking = true;

export default function LandingScreen({ page, setChildrenVisible }) {
  const [callToActionClass, setCallToActionClass] = useState('call-to-action');
  const [logoClass, setLogoClass] = useState('animation-container__text');
  const [homepageClass, setHomepageClass] = useState(`${page} homepage`);
  const [pathClass, setPathClass] = useState('path');
  const [homePageMenuClass, setHomePageMenuClass] = useState('homepage-menu');
  const [mainTitleClass, setMainTitleClass] = useState('homepage-title-main');
  const [subTitleClass, setSubTitleClass] = useState('homepage-title-sub');

  const loadLogo = () => {
    setLogoClass(`${logoClass} active`);
  };

  const displayHomePage = () => {
    setHomepageClass(`${homepageClass} homepage-active`);
    // 3. Logo fadeout
    setLogoClass(`${logoClass} inactive`);
    setPathClass(`${pathClass} path-inactive`)
  };

  const moveHomePageOnTop = () => {
    setHomepageClass(`${homepageClass} homepage-active homepage-on-top`);
  }

  const displayHomePageContent = () => {
    setHomePageMenuClass(`${homePageMenuClass} fade-in`);
    setSubTitleClass(`${subTitleClass} slide-up`);
    setMainTitleClass(`${mainTitleClass} fade-in`);

    setChildrenVisible(true);

    if (page === HOMEPAGE && !callToActionClass.includes('slide-up')) {
      setCallToActionClass(`${callToActionClass} slide-up`)
    }
  }

  useEffect(() => {
    async function animate() {
      // 1. Logo loading
      loadLogo();

      // 2. Display homepage
      await setTimeout(() => {
        displayHomePage();
      }, 2000);

      // 4. Move homepage on top
      await setTimeout(() => {
        moveHomePageOnTop();
      }, 2500);

      // 5. Display homepage menu and main title
      await setTimeout(() => {
        displayHomePageContent();
      }, 4000);
    }

    animate()
  }, []);

  const renderPageOverflow = () => {
    if (page === HOMEPAGE) {
      return (
        <div className={callToActionClass}>
          <a href='collections'>
            <button className='call-to-action__button'>Découvrir les collections</button>
          </a>
        </div>
      )
    } else {
      return (
        <div className={callToActionClass}>
          <div className='page'>{page}</div>
          <svg fill='#e0d8cf' xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z'/></svg>
        </div>
      )
    }
  }

  const displayPageAction = () => {
    if (page !== HOMEPAGE && !callToActionClass.includes('slide-up')) {
      setCallToActionClass(`${callToActionClass} slide-up`);
    }
  }

  const displayNavbar = () => {
    if (!homePageMenuClass.includes('whited')) {
      setHomePageMenuClass(`${homePageMenuClass} whited`);
    }
  }

  const hideNavbar = () => {
    setHomePageMenuClass(homePageMenuClass.replace(' whited', ''));
  }


  const displayMenuBackground = () => {
    last_known_scroll_position = window.scrollY;
    if (ticking) {
      window.requestAnimationFrame(() => {
        if (last_known_scroll_position >= 50) {
          displayNavbar()
        } else {
          hideNavbar()
        }
        ticking = true;
      });

      ticking = false;
    }
  }

  const onWheelHandler = () => {
    displayPageAction();
    displayMenuBackground();
  }

  return (
    <div onScroll={() => onWheelHandler() } onWheel={() => onWheelHandler() }>
      <div className='animation-container'>
        <div className={logoClass}>NiBii</div>

        <svg height='100vh' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
          <path className={pathClass}  strokeWidth='1' fill='#fffefb' d='M17.4,-22.6C27.5,-16.5,44.3,-18.2,50.8,-13C57.3,-7.8,53.7,4.2,50.1,16.5C46.4,28.8,42.8,41.4,34.5,44.8C26.1,48.2,13.1,42.5,4.3,36.5C-4.4,30.6,-8.9,24.4,-17.4,21.1C-25.9,17.8,-38.6,17.2,-48.6,10.2C-58.6,3.2,-66,-10.3,-65.8,-24.6C-65.6,-38.8,-57.8,-53.8,-45.6,-59.2C-33.3,-64.6,-16.7,-60.3,-6.5,-51.3C3.6,-42.3,7.2,-28.6,17.4,-22.6Z' transform='translate(100 100)' />
        </svg>
      </div>

      <div className={homepageClass} >
        <div className='homepage-content'>
        <Menu homePageMenuClass={homePageMenuClass} page={page}/>
          <div className='homepage-title'>
            <div className={mainTitleClass}>NiBii</div>
            <div className={subTitleClass}>Créations uniques au crochet. 100% fait main.</div>
          </div>
        </div>

        { renderPageOverflow() }

      </div>
    </div>
  );
}
