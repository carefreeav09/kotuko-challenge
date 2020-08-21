import React, {createContext, useState} from 'react';
import {getLocalStorage, setLocalStorage} from "../../../utils/storageUtil";

export const SearchContext = createContext();

const SearchContextProvider = props => {
    const [searchInput, setSearchInput] = useState(null);
    const [sortOption, setSortOption] = useState('best');
    const [resultsPerPageOption, setResultsPerPageOption] = useState('10');
    const [pageNumber, setPageNumber] = useState(getLocalStorage('pageNumber') || 1);

    const handleFetchRepositories = (e, page) => {
        e.preventDefault();
        setPageNumber(page);
        setLocalStorage('pageNumber', page);
        const searchQuery = `${searchInput}&sort=${sortOption}&per_page=${resultsPerPageOption}&page=${page}`
        props.fetchRepositories(searchQuery);
    }
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
            handleFetchRepositories: handleFetchRepositories
        }}>
            {props.children}
        </SearchContext.Provider>
    )
};

export default SearchContextProvider;