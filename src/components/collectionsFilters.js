import React, { useState } from 'react';
import Select from 'react-select'

import { categories } from '../data/categories';
import './collectionsFilters.css';

const categoryOptions = () => {
  return categories.filter(c => c.isActive).map((cat, i) => {
    return { value: cat.key, label: cat.name }
  });
}

const seasonOptions = [
  { value: 'ete', label: 'Printemps / été' },
  { value: 'hiver', label: 'Automne / hiver' }
];

export default function CollectionsFilters({ collections, onCollectionsFiltered }) {
  const [categories, setCategories] = useState([]);
  const [seasons, setSeasons] = useState(seasonOptions);

  const filterCollections = (cat, sea) => {
    const filteredCols =  collections.filter((col, i) => {
      return (
        (cat.map(i => i.value).includes(col.category) || cat.length === 0) &&
        (sea.map(i => i.value).some(item => col.seasonality.includes(item)) || sea.length === 0)
      )
    });
    onCollectionsFiltered(filteredCols)
  }

  const handleCategoryChange = async (cat, key) => {
    const catVal = cat ? cat : [];
    setCategories(catVal)
    filterCollections(catVal, seasons)
  }

  const handleSeasonChange = async (sea, key) => {
    const seaVal = sea ? sea : [];
    setSeasons(seaVal)
    filterCollections(categories, seaVal)
  }

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#c7bcb1' : 'transparent',
      color: state.isFocused ? 'white' : '#737373',
      fontFamily: 'Oswald',
      fontSize: '1.1em',
      letterSpacing: '1px',
      ':hover': {
          ...provided[':hover'],
        backgroundColor: '#c7bcb1',
        color: 'white',
      }
    }),
    placeholder: (provided) => ({ ...provided, fontFamily: 'Oswald', fontSize: '1.1em' }),
    valueContainer: (provided) => ({ ...provided, padding: '4px 8px' }),
    control: (provided) => ({
       ...provided,
       borderColor: 'transparent',
       ':hover': {
           ...provided[':hover'],
         border: '1px solid #e2e2e2',
       }
    }),
    noOptionsMessage: (provided) => ({ ...provided, fontFamily: 'Oswald', fontSize: '1.1em' }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: '#c7bcb1',
      color: 'white',
      fontFamily: 'Oswald',
      fontSize: '1.1em',
      letterSpacing: '1px'
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      ':hover': {
          ...provided[':hover'],
          backgroundColor: '#b9ac9e',
          color: '#white',
          cursor: 'pointer'
      }
    }),
    multiValueLabel: (provided) => ({ ...provided, color: 'white' })
}

  return (
    <div className='collections-filter-content'>

      <div className='category-filter filter'>
        <Select
            isMulti
            value={categories}
            name='category'
            options={categoryOptions()}
            className='collections-select'
            placeholder='Catégories'
            onChange={handleCategoryChange}
            styles={customStyles}/>
      </div>

      <div className='season-filter filter'>
        <Select
            value={seasons}
            name='seasonality'
            isMulti
            options={seasonOptions}
            className='collections-select'
            onChange={handleSeasonChange}
            styles={customStyles}/>
      </div>

    </div>
  );
}
