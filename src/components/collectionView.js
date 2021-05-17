import React, { useState, useEffect } from 'react';
import {
  useRouteMatch,
  Link
} from "react-router-dom";
import './collectionView.css';

export default function CollectionView({ collection }) {
  const [image, setImage] = useState('');
  const [imgStyle, setImgStyle] = useState({});
  const {
    collectionName,
    collectionDescription,
    img,
    items
  } = collection;
  const [colnamePath] = useState(collectionName.replace(' ', '-'));
  let { path, url } = useRouteMatch();

  useEffect(() => {
    import(`../data/img/${img}.jpg`).then(imageData => {
      setImage(imageData)
      setImgStyle({ backgroundImage: `url(${imageData})` })
    })
  }, []);

  const getItems = () => {
    const soldItemsLength = items.filter(i => i.isSold).length;
    const itemsAvailable = items.length - soldItemsLength;
    return itemsAvailable === 0 ? 'SOLD OUT' : (
      <div className='items-available__wrapper'>
        <span className='items-available'>{itemsAvailable}</span><br/> pièces disponibles
      </div>
    )
  }

  const goToCollectionFilters = () => {

  }

  return (
    <div className='collection-container-wrapper'>
      <Link to={{
        pathname: `${url}/${colnamePath}`,
        state: { collection }
      }}>
        <div className='collection-container' style={imgStyle} onClick={goToCollectionFilters}>

          <div className='collection-info'>
            <div className='first-col'>
              <div className='collection-name'>{ `Collection ${collectionName}` }</div>
              <div className='collection-description'>{ collectionDescription }</div>
            </div>
            <div className='second-col'>
              <div className='collection-items'>{ getItems() }</div>
            </div>
          </div>

        </div>
      </Link>
    </div>
  );
}
