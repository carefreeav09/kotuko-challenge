import React, {useContext} from 'react';
import './style.css'

import Search from "./Search";
import Result from "./Result";

import {SearchContext} from "../../../shared/Contexts/SearchContext";

const List = (props) => {
    const searchContextData = useContext(SearchContext);
    const {setPageNumber, searchInput, sortOption, resultsPerPageOption} = searchContextData;

    const handleFetchRepositories = (e, page) => {
        e.preventDefault();
        setPageNumber(page);

        const searchQuery = `${searchInput}&sort=${sortOption}&per_page=${resultsPerPageOption}&page=${page}`
        props.fetchRepositories(searchQuery);
    }

    return (
        <section className="section">
            <div className="container">
                <Search {...props} {...searchContextData} handleFetchRepositories={handleFetchRepositories} />

                <Result {...props} {...searchContextData} handleFetchRepositories={handleFetchRepositories} />
            </div>
        </section>
    );
};

export default List;