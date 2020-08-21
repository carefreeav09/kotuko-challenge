import React, {Fragment} from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom'
import Loading from '../../../shared/Loading'
import Pagination from "./Pagination";
import {isEmpty} from "../../../../utils/commonUtil";

const Result = (props) => {
    const {repositories, repositoriesLoading} = props;

    if (repositoriesLoading) {
        return <Loading/>
    }

    const getLastUpdatedTime = (date) => {
        let returnedDate = moment(date);
        let currentDate = moment(new Date());
        return currentDate.from(returnedDate)
    };

    return (
        <Fragment>
            <h3 className="title is-6">
                {!isEmpty(repositories) && <span>{repositories?.length} repository results</span>}
            </h3>
            {repositories?.map((item,itemIndex) =>
                <div className="box" key={itemIndex}>
                    <article className="media">
                        <div className="media-left">
                            <figure className="image is-64x64">
                                <img src={item?.owner?.avatar_url} alt="profile"/>
                            </figure>
                        </div>
                        <div className="media-content">
                            <Link to={{
                                pathname: `/${item?.full_name}`,
                                state : {
                                    searchInput: props.searchInput,
                                    sortOption: props.sortOption,
                                    resultsPerPageOption: props.resultsPerPageOption,
                                    pageNumber: props.pageNumber
                                }
                            }}>
                                <div className="content">
                                    <p>
                                        <strong>{item?.full_name}</strong> <small>{item?.owner?.login}</small>
                                        <br/>
                                        {item.description ? item.description : 'No description provided'}
                                        <br/>
                                        <span><small>Last
                                            updated {getLastUpdatedTime(item.updated_at)} ({moment(item.updated_at).format('L')})</small>
                                        </span>
                                    </p>

                                    <nav className="level is-mobile">
                                        <div className="level-left">
                                            <span className="level-item" aria-label="reply">
                                            <span className="icon is-small">
                                              <i className="fas fa-star has-text-warning mr-3" aria-hidden="true"/>
                                            </span>
                                                {item.stargazers_count}
                                            </span>
                                            <span className="level-item" aria-label="retweet">
                                            <span className="icon is-small">
                                              <i className="fas fa-code-branch mr-3" aria-hidden="true"/>
                                            </span>
                                                {item.forks_count}
                                            </span>
                                        </div>
                                    </nav>


                                </div>
                            </Link>
                        </div>
                    </article>
                </div>
            )}

            {!isEmpty(repositories) && <Pagination {...props}/>}
        </Fragment>
    );
};

export default Result;