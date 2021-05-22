import React, { useState } from 'react';
import CollectionView from './collectionView';
import CollectionsFilters from './collectionsFilters';
import NoCollection from './noCollection';
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

  const displayNoCollection = () => {
    return (
      <NoCollection />
    )
  }

  return (
    <div>
    <div className='collections-content'>

      <div className='all-collections'>
        <div className='all-collections__filters'>
          <CollectionsFilters collections={collections} onCollectionsFiltered={(col) => setAllCollections(col)}/>
        </div>
        <div id='all-collections__results_' className='all-collections__results'>
          { allCollections.length !== 0 ? (
            displayAllCollections()
          ) : (
            displayNoCollection()
          ) }
        </div>
      </div>

    </div>
    <Footer footerClass='footer-container'/>
    </div>
  );
}
