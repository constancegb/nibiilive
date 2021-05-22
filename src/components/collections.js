import React, { useState, useEffect } from 'react';
import CollectionView from './collectionView';
import CollectionsFilters from './collectionsFilters';
import Footer from './footer';
import { collections } from '../data/collections';
import './collections.css';

export default function Collections() {
  const [allCollections, setAllCollections] = useState(collections);

  const displayAllCollections = () => {
    return allCollections.map((col, i) => {
      return (
        <div key={i}>
          <CollectionView collection={col} />
        </div>
      )
    });
  }

  return (
    <div>
    <div className='collections-content'>

      <div className='all-collections'>
        <div className='all-collections__filters'>
          <CollectionsFilters collections={collections} onCollectionsFiltered={(col) => setAllCollections(col)}/>
        </div>
        <div id='all-collections__results_' className='all-collections__results'>
          { displayAllCollections() }
        </div>
      </div>

    </div>
    <Footer footerClass='footer-container'/>
    </div>
  );
}
