import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import Home from './pages/Home';
import Create from './pages/Create';
import Promo from './pages/Promo';
import Produto from './pages/Produto';
import Dados from './pages/Dados';
import Settings from './pages/Settings';
import Detalhe from './pages/Detalhes';

function Routes(){
    return(
        <HashRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/create" component={Create} />
                <Route path="/promo" component={Promo} />
                <Route path="/produto" component={Produto} />
                <Route path="/dados" component={Dados} />
                <Route path="/settings" component={Settings} />
                <Route path="/detalhe/:id" component={Detalhe} />
            </Switch>
        </HashRouter>
    );
};

export default Routes;