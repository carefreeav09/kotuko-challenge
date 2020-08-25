import React , {Fragment} from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import loadable from '@loadable/component';
import NotFound from '../app/shared/NotFound'

const AsyncHome = loadable(() => import('./search'));
const AsyncHomeDetails = loadable(() => import('./search/containers/Details/MainContainer'));

const App = () => (
    <Fragment>
        <Switch>
            <Route exact path="/:name/:project" component={AsyncHomeDetails} />
            <Route exact path="/404" component={NotFound}/>
            <Route path="/*" component={AsyncHome}/>
        </Switch>
    </Fragment>
);

export default withRouter(App);

