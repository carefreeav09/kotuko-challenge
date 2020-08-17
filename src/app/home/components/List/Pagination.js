import React from 'react';

const Pagination = (props) => {

    const {pageNumber, setPageNumber, resultsPerPageOption} = props;

    return (
        <nav className="pagination is-medium" role="navigation" aria-label="pagination">
            <a className="pagination-previous">Previous</a>
            <a className="pagination-next">Next page</a>
            <ul className="pagination-list">
                <li><a className="pagination-link" aria-label="Goto page 1" aria-current="page">1</a></li>
                <li><a className="pagination-link" aria-label="Goto page 45">45</a></li>
                <li><a className="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a></li>
                <li><a className="pagination-link" aria-label="Goto page 47">47</a></li>
                <li><span className="pagination-ellipsis">…</span></li>
                <li><a className="pagination-link" aria-label="Goto page 86">86</a></li>
            </ul>
        </nav>

    );
};

export default Pagination;