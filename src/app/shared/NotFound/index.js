import React from 'react';
import {Link} from 'react-router-dom'

const Index = () => {
    return (
        <section className="hero">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <h1 className="title has-text-centered">
                        Github project doesn't exist
                    </h1>

                    <Link to={{
                        pathname: "/",

                    }}>
                        <button className="button is-small mb-5 is-rounded">
                        <span className="icon">
                          <i className="fas fa-search"/>
                        </span>
                            <span>Go to home</span>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Index;