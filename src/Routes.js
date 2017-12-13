import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';


const Routes = () => (
    <Switch>  
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/' component={Home}/>
    </Switch>
)

export default Routes;


