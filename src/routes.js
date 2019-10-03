import React from 'react';
import {Switch,Route} from 'react-router-dom';

import Home from './Routes/Home/Home';
import Feed from './Routes/Feed/Feed';
import ImageLoad from './Routes/ImageLoad/index';

function Router(){
    return (
        <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/Feed" exact component={Feed}></Route>
            <Route path="/ImageLoad" exact component={ImageLoad}></Route>
        </Switch>
        
    )
}
export default Router