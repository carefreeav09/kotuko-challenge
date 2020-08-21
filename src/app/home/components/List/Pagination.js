import React, {useEffect, useState} from 'react';
import {isEmpty, paginate} from '../../../../utils/commonUtil'

const Pagination = (props) => {

    const {pageNumber, repositoriesPagination, resultsPerPageOption, handleFetchRepositories} = props;
    const [numbersArray, setNumbersArray] = useState([]);
    const [startingItems, setStartingItems] = useState([]);
    const [lastItems, setLastItems] = useState([]);

    const handlePagination = (e, item) => {
        handleFetchRepositories(e, item);
    }

    useEffect(() => {
        let results = paginate(repositoriesPagination, pageNumber, resultsPerPageOption, 6);
        setNumbersArray(results.pages);
        setStartingItems(results.firstItems);
        setLastItems(results.lastItems);
    }, [repositoriesPagination,pageNumber,resultsPerPageOption])

    return (
        <nav className="pagination is-medium" role="navigation" aria-label="pagination">
            <a className="pagination-previous">Previous</a>
            <a className="pagination-next">Next page</a>

            <ul className="pagination-list">
                {!isEmpty(startingItems) && <React.Fragment>
                    {startingItems.map((item, itemIndex) => (
                        <li key={itemIndex}>
                            <a className={`pagination-link ${pageNumber === item && 'is-current'}`} aria-label={`Goto Page ${item}`} aria-current="page"
                               onClick={(e) => handlePagination(e, item)}
                            >
                                {item}
                            </a>
                        </li>
                        )
                    )}
                    <li><span className="pagination-ellipsis">…</span></li>
                </React.Fragment>}
                {numbersArray.map((item, itemIndex) => (
                    <li key={itemIndex}>
                        <a className={`pagination-link ${pageNumber === item && 'is-current'}`} aria-label={`Goto Page ${item}`} aria-current="page"
                            onClick={(e) =>  handlePagination(e, item)}
                        >
                            {item}
                        </a>
                    </li>
                ))}
                {!isEmpty(lastItems) && <React.Fragment>
                    <li><span className="pagination-ellipsis">…</span></li>
                    {lastItems.map((item, itemIndex) => (
                            <li key={itemIndex}>
                                <a className={`pagination-link ${pageNumber === item && 'is-current'}`} aria-label={`Goto Page ${item}`} aria-current="page"
                                   onClick={(e) => handlePagination(e, item)}
                                >
                                    {item}
                                </a>
                            </li>
                        )
                    )}
                </React.Fragment>}
            </ul>
        </nav>

    );
};

export default Pagination;