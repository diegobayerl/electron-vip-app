import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import LoginPage from './pages/loginPage';
import HomePage from './pages/homePage';

function Routes(){
    return(
        <HashRouter>
            <Switch>
                <Route path="/" exact component={LoginPage} />
                <Route path="/Home" exact component={HomePage} />
            </Switch>
        </HashRouter>
    );
};

export default Routes;