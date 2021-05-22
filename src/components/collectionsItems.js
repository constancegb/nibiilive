import React, { useState, useEffect } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Footer from './footer';
import { collections } from '../data/collections';
import './collectionsItems.css';
import { useLocation } from "react-router-dom";

export default function CollectionsItems() {
  const loc = useLocation();
  const [collection, setCollection] = useState({});
  const [itemDisplayedIndex, setItemDisplayedIndex] = useState(0);
  const [items, setItems] = useState([]);
  const [imgStyle, setImgStyle] = useState({});
  const [open, setOpen] = useState(false);
  const [arrowsClass, setArrowsClass] = useState(['arrow-left-svg inactive-arrow', 'arrow-right-svg']);

  useEffect(() => {
    // Set collection
    let collection_;
    if (loc.hasOwnProperty('state') && loc.state) {
      collection_ = loc.state.collection
    } else {
      const colNameFromUrl = loc.pathname.split('/')[2];
      collection_ = collections.find(c => c.collectionName === colNameFromUrl)
    }
    setCollection(collection_)
    // Set items
    let items_, img_;
    if (collection_.isPermanent) {
      items_ = collection_.img
      img_ = items_[itemDisplayedIndex]
    } else {
      items_ = collection_.items
      img_ = items_[itemDisplayedIndex].img
    }
    setItems(items_)
    // Import image
    import(`../data/img/${img_}.jpg`).then(imageData => {
      setImgStyle({ backgroundImage: `url(${imageData})` })
    })
  }, [itemDisplayedIndex]);

  const formatDescription = (desc) => {
    return desc.split('.').map((d, i) => {
      return (<div key={i}>{d}</div>)
    })
  }

  const getAvailability = (isSold) => {
    if (isSold) {
      return (<div className='sold-out'>Sold out</div>)
    } else {
      return (<div className='available'>En stock</div>)
    }
  }

  const goToNextItem = () => {
    if (itemDisplayedIndex === (items.length - 2)) {
      setArrowsClass(['arrow-left-svg', 'arrow-right-svg inactive-arrow'])
      setItemDisplayedIndex(itemDisplayedIndex + 1)
    } else if (itemDisplayedIndex === (items.length - 1)) {

    } else {
      setItemDisplayedIndex(itemDisplayedIndex + 1)
      setArrowsClass(['arrow-left-svg', 'arrow-right-svg'])
    }
  }

  const goToPreviousItem = () => {
    if (itemDisplayedIndex === 1 || itemDisplayedIndex === 0) {
      setArrowsClass(['arrow-left-svg inactive-arrow', 'arrow-right-svg'])
      setItemDisplayedIndex(0)
    } else {
      setItemDisplayedIndex(itemDisplayedIndex - 1)
      setArrowsClass(['arrow-left-svg', 'arrow-right-svg'])
    }
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className='collection-content'>

        <div className='collection-main-info'>
          <div className='col-name'>{`Collection ${collection.collectionName}`}</div>
          { !collection.isPermanent ? (
            <div className='col-description'>{collection.collectionDescription}</div>
          ) : (<div></div>)}
        </div>

        <div className='collection-items-container'>

          <div className='slideshow-container'>
            <div className='arrow-left' onClick={goToPreviousItem}>
              <svg className={arrowsClass[0]} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 viewBox="0 0 240.823 240.823" style={{ enableBackground:'new 0 0 240.823 240.823' }} xmlSpace="preserve">
                <path id="Chevron_Right" d="M57.633,129.007L165.93,237.268c4.752,4.74,12.451,4.74,17.215,0c4.752-4.74,4.752-12.439,0-17.179
                  l-99.707-99.671l99.695-99.671c4.752-4.74,4.752-12.439,0-17.191c-4.752-4.74-12.463-4.74-17.215,0L57.621,111.816
                  C52.942,116.507,52.942,124.327,57.633,129.007z"/>
              </svg>
            </div>
            <div className='slideshow' style={imgStyle} onClick={handleClickOpen}></div>
            <div className='arrow-right' onClick={goToNextItem}>
              <svg className={arrowsClass[1]} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 viewBox="0 0 330 330" style={{ enableBackground:'new 0 0 330 330' }} xmlSpace="preserve">
              <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
                c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
                C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
                C255,161.018,253.42,157.202,250.606,154.389z"/>
              </svg>
            </div>
          </div>

          <div className='items-description'>
            { !collection.isPermanent && items.length !== 0 ? (
              <div className='items-wrapper'>
                <div className='item-name'>{items[itemDisplayedIndex].name}</div>
                <div className='item-description'>{formatDescription(items[itemDisplayedIndex].description)}</div>
                <div className='item-price-info'>
                  <div className='item-price'>{`Prix : ${items[itemDisplayedIndex].price}€`}</div>
                  <div className='item-availability'>{getAvailability(items[itemDisplayedIndex].isSold)}</div>
                </div>
                <a className='shop-btn' href="https://www.etsy.com/fr/shop/NiBiibyframboise" target="_blank" rel="noopener noreferrer">Acheter sur Etsy</a>
              </div>
            ) : (
              <div className='items-wrapper'>
                <div className='item-name'>Collection permanente</div>
                <div className='item-description'>{collection.collectionDescription}</div>
                <div className='item-price-info'>
                  <div className='item-price'>{`Prix : ${collection.price}€`}</div>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>

      <Dialog maxWidth='xl'
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <div className='img-zommed' style={imgStyle}></div>
        </DialogContent>
      </Dialog>

      <Footer footerClass='footer-container'/>
    </div>
  );
}
