import React , {Fragment} from 'react';
import {Switch, Route} from 'react-router-dom';
import loadable from '@loadable/component';

import Header from '../layout/header'

const AsyncHome = loadable(() => import('./home'));

const App = () => (
    <Fragment>
        <Header />
        <Switch>
            <Route path="/" exact component={AsyncHome} />
        </Switch>
    </Fragment>
);

export default App;

