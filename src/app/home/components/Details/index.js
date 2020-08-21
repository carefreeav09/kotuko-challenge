import React, {useEffect} from 'react';
import Profile from "./Profile";
import {useParams} from "react-router-dom";
import Markdown from "./Markdown";

const Details = (props) => {
    const {name, project} = useParams();
    const {fetchRepositoryDetails, users, fetchUsersInfo, repositories} = props;

    useEffect(() => {
        fetchRepositoryDetails(`${name}/${project}`);
        fetchUsersInfo(`${name}`);
    }, [name, project]);


    return (
        <section className="section">
            <div className="container">
                <div className="columns">
                    <div className="column is-one-third">
                        <Profile {...props} />
                    </div>
                    <div className="column">
                        <p className="title is-3">{repositories?.name}</p>
                        <p className="subtitle is-6">{repositories?.description}</p>
                        <br/>
                        <p className="subtitle is-6 mb-0">Open Issues : <strong>{repositories?.open_issues_count}</strong></p>
                        <br/>
                        <p className="subtitle is-6 mb-0">Default Branch : <strong>{repositories?.default_branch}</strong></p>

                    </div>
                </div>

                <Markdown {...props} />
            </div>
        </section>
    );
};

export default Details;