import React, {useEffect, useState} from 'react';
import {isEmpty, paginate} from '../../../../utils/commonUtil'

const Pagination = (props) => {

    const {pageNumber, repositoriesPagination, resultsPerPageOption, handleFetchRepositories} = props;
    const [numbersArray, setNumbersArray] = useState([]);
    const [startingItems, setStartingItems] = useState([]);
    const [lastItems, setLastItems] = useState([]);

    const createArrayWithNumbers = () => {
        let totalPaginationArrayLength = Math.ceil(repositoriesPagination/resultsPerPageOption);
        let tempArray = Array.from({length: totalPaginationArrayLength}, (v, i ) => i+1);

        setNumbersArray(tempArray);
    };

    const handlePagination = (e, item) => {
        handleFetchRepositories(e, item);
    }

    useEffect(() => {
        //Total items only set to default 1000 as github allows to fetch only 1000 data.
        let x = paginate(1000, pageNumber, resultsPerPageOption, 6);
        setNumbersArray(x.pages);
        setStartingItems(x.firstItems);
        setLastItems(x.lastItems);
    }, [])

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
                {/*<li><a className="pagination-link" aria-label="Goto page 45">45</a></li>*/}
                {/*<li><a className="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a></li>*/}
                {/*<li><a className="pagination-link" aria-label="Goto page 47">47</a></li>*/}
                {/*<li><span className="pagination-ellipsis">…</span></li>*/}
                {/*<li><a className="pagination-link" aria-label="Goto page 86">86</a></li>*/}
            </ul>
        </nav>

    );
};

export default Pagination;