import React, {useContext} from 'react';
import './style.css'

import Search from "./Search";
import Result from "./Result";

import {SearchContext} from "../../../shared/Contexts/SearchContext";

const List = (props) => {
    const searchContextData = useContext(SearchContext);

    return (
        <section className="section">
            <div className="container">

                <Search {...props} {...searchContextData} />

                <Result {...props} {...searchContextData} />
            </div>
        </section>
    );
};

export default List;