import React , {Fragment} from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import loadable from '@loadable/component';

const AsyncHome = loadable(() => import('./home'));
const AsyncHomeDetails = loadable(() => import('./home/containers/Details'));

const NotFound = props => {
    return (<section className="hero">
        <div className="hero-body">
            <div className="container">
                <h1 className="title has-text-centered">
                    Github project doesn't exist
                </h1>
            </div>
        </div>
    </section>)
}

const App = () => (
    <Fragment>
        {/*<Header />*/}
        <Switch>
            <Route exact path="/" component={AsyncHome}/>
            <Route exact path="/:name/:project" component={AsyncHomeDetails} />
            <Route exact path="/*" component={NotFound}/>
        </Switch>
    </Fragment>
);

export default withRouter(App);

