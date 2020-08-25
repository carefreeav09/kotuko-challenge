import React, {useContext, useEffect} from 'react';
import './style.css'

import Search from "./Search";
import Result from "./Result";

import {SearchContext} from "../../../shared/Contexts/SearchContext";
import {useParams} from "react-router";

const List = (props) => {
    const {name} = useParams();
    const searchContextData = useContext(SearchContext);
    const {setPageNumber, searchInput, sortOption, resultsPerPageOption} = searchContextData;

    const handleFetchRepositories = (e, page) => {
        e.preventDefault();
        setPageNumber(page);

        console.log(searchInput, 'search query');

        const searchQuery = `${searchInput}&sort=${sortOption}&per_page=${resultsPerPageOption}&page=${page}`
        props.fetchRepositories(searchQuery);
    }

    useEffect(() => {
        let urlParams = props.match.params[0];
        searchContextData.setSearchInput(urlParams);
        setPageNumber(props?.location?.state?.pageNumber ?? 1);

        const searchQuery = `${urlParams}&sort=${sortOption}&per_page=${resultsPerPageOption}&page=${props?.location?.state?.pageNumber ?? 1}`
        props.fetchRepositories(searchQuery);
    },[name]);

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