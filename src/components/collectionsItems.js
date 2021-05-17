import React, { useState, useEffect } from 'react';
import CollectionView from './collectionView';
import CollectionsFilters from './collectionsFilters';
import { collections } from '../data/collections';
import './collections.css';
import {
  useParams,
  useLocation
} from "react-router-dom";

export default function CollectionsItems() {
  const [allCollections, setAllCollections] = useState(collections);
  let { colname } = useParams();
  const { state } = useLocation();

  console.log(111, colname, state)

  return (
    <div className='collections-content'>

      toto

    </div>
  );
}
