import React, {createContext, useState} from 'react';
import {getLocalStorage, setLocalStorage} from "../../../utils/storageUtil";

export const SearchContext = createContext();

const SearchContextProvider = props => {
    const [searchInput, setSearchInput] = useState(null);
    const [sortOption, setSortOption] = useState('best');
    const [resultsPerPageOption, setResultsPerPageOption] = useState('10');
    const [pageNumber, setPageNumber] = useState (1);

    return (
        <SearchContext.Provider value={{
            searchInput: searchInput,
            setSearchInput: setSearchInput,
            sortOption: sortOption,
            setSortOption: setSortOption,
            resultsPerPageOption: resultsPerPageOption,
            setResultsPerPageOption: setResultsPerPageOption,
            pageNumber: pageNumber,
            setPageNumber: setPageNumber,
        }}>
            {props.children}
        </SearchContext.Provider>
    )
};

export default SearchContextProvider;