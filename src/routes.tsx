import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import LoginPage from './pages/loginPage';
import CreateProduct from './pages/createProduct';
import ListenItens from './pages/listenItensPage';
import RequestsPage from './pages/Requests';

function Routes(){
    return(
        <HashRouter>
            <Switch>
                <Route path="/" exact component={LoginPage} />
                <Route path="/listen" exact component={ListenItens} />
                <Route path="/create" exact component={CreateProduct} />
                <Route path="/request" exact component={RequestsPage} />
            </Switch>
        </HashRouter>
    );
};

export default Routes;