import React from 'react';
import Profile from "../../containers/Details/Profile";

const Details = (props) => {
    return (
        <section className="section">
            <div className="container">

                <div className="columns">
                    <div className="column is-one-third">
                        <Profile {...props} />
                    </div>
                    <div className="column">Auto</div>
                    <div className="column">Auto</div>
                </div>
            </div>
        </section>
    );
};

export default Details;