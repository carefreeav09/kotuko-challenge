import React , {Fragment} from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import loadable from '@loadable/component';
import NotFound from '../app/shared/NotFound'

const AsyncHome = loadable(() => import('./search'));
const AsyncHomeDetails = loadable(() => import('./search/containers/Details/MainContainer'));

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

