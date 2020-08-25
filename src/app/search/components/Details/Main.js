import React, {useEffect} from 'react';
import Profile from "./Profile";
import {Link, useParams} from "react-router-dom";
import Markdown from "./Markdown";

import Loading from '../../../shared/Loading'

const Details = (props) => {
    const {name, project} = useParams();
    const {fetchRepositoryDetails, fetchUsersInfo, repositories, repositoriesLoading} = props;

    useEffect(() => {
        fetchRepositoryDetails(`${name}/${project}`);
        fetchUsersInfo(`${name}`);
    }, [name, project]);

    const markdownProps = {
        user: name,
        project: project,
        branch: repositories?.default_branch
    }

    if (repositoriesLoading) {
        return <Loading/>
    }

    return (
        <section className="section">
            <div className="container">

                <Link to={{
                    pathname: `/${props?.location?.state?.searchQuery}`,
                    state: {pageNumber : props?.location?.state?.pageNumber}
                }}>
                    <button className="button is-small mb-5 is-rounded">
                        <span className="icon">
                          <i className="fas fa-chevron-left"/>
                        </span>
                        <span>Go back</span>
                    </button>
                </Link>


                <div className="columns">
                    <div className="column is-one-third">
                        <Profile {...props} />
                    </div>
                    <div className="column">
                        <p className="title is-3">
                            <a href={repositories?.html_url} target="_blank">
                                {repositories?.name}
                            </a>
                        </p>
                        <p className="subtitle is-6">{repositories?.description}</p>
                        <br/>
                        <p className="subtitle is-6 mb-0">Open Issues
                            : <strong>{repositories?.open_issues_count}</strong></p>
                        <br/>
                        <p className="subtitle is-6 mb-0">Default Branch
                            : <strong>{repositories?.default_branch}</strong></p>

                    </div>
                </div>
                <Markdown {...props} {...markdownProps}/>
            </div>
        </section>
    );
};

export default Details;