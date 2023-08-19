'use client';

import { useState } from 'react';

const SearchInput = () => {
  const [search, setSearch] = useState('');
  return (
    <div className="">
      <input
        className="search_input"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        name="searchInput"
        placeholder="🔍Search"
      />
    </div>
  );
};
export default SearchInput;
