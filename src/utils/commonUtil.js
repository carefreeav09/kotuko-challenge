export const isEmpty = (obj) => {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) return false;
    }
    return true;
};


export const paginate = (totalItems, currentPage, pageSize, maxPages = 5) => {
    let firstItems = [];
    let lastItems = [];
    let totalPages = Math.ceil(totalItems/pageSize);

    if(currentPage < 1){
        currentPage= 1;
    }
    else if (currentPage > totalPages){
        currentPage = totalPages;
    }

    let startPage, endPage;
    if(totalPages <= maxPages)
    {
        startPage = 1;
        endPage = totalPages;
    }
    else {
        let maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
        let maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
        if (currentPage <= maxPagesBeforeCurrentPage) {
            startPage = 1;
            endPage = maxPages;
        } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
            startPage = totalPages - maxPages + 1;
            endPage = totalPages;
        } else {
            startPage = currentPage - maxPagesBeforeCurrentPage;
            endPage = currentPage + maxPagesAfterCurrentPage;
        }
    }
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages in the pager control

    let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

    if(!pages.includes(2)){
        firstItems.push(1, 2);
    }

    if(!pages.includes(totalPages))
    {
        lastItems.push(totalPages)
    }

    return {
        totalItems: totalItems,
        currentPage: currentPage,
        pageSize: pageSize,
        totalPages: totalPages,
        startPage: startPage,
        endPage: endPage,
        startIndex: startIndex,
        endIndex: endIndex,
        pages: pages,
        firstItems: firstItems,
        lastItems: lastItems,
    };
}