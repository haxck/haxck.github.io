import { useState } from 'react';
import { searchClient } from '@algolia/client-search';
import { InstantSearch, SearchBox, Hits, Highlight } from 'react-instantsearch';

import 'instantsearch.css/themes/reset.css';
import 'instantsearch.css/themes/satellite.css';

const Client = searchClient('DNP8PAXCUO', 'f1b23dfb34a221977b044cd9146d10ca');

function Hit({ hit }) {
  return (
    <div className='truncate'>
      <a className='text-black text-wrap' href={hit.link}>
        <h1 className='text-wrap'>{hit.title}</h1>
        <Highlight attribute="content" hit={hit} className=' truncate' />
      </a>
    </div>
  );
}

export default function() {
  const [query, setQuery] = useState(false);
  const handleSearchChange = (query, search) => {
    if (query !== "") {
      setQuery(true);
      search(query)
    } else {
      setQuery(false)
    }

  };
  return (
    <InstantSearch searchClient={Client} indexName="blog">
      <SearchBox queryHook={handleSearchChange} />
      {query && (
        <Hits
          hitComponent={Hit} />
      )}
    </InstantSearch>
  );
}



