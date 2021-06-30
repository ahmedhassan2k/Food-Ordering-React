import React from 'react';
import { Router, Switch, NavLink, Route } from 'react-router-dom';
import history from '../components/History';
import Fastfood from './Fastfood';
import BBQ from './BBQ';
import Beverages from './Beverages';
import Chinese from './Chinese';
import Desi from './Desi';
import IceCream from './IceCream';
function _navigation(){

    return(
        <Router history = {history}>
        <div className='nav'>
            

                <NavLink exact to  = "/">
                    <li>Fast Food</li>
                </NavLink>
                <NavLink to  = "/BBQ">
                    <li>BBQ</li>
                </NavLink>
                <NavLink to  = "/Desi">
                    <li>Desi</li>
                </NavLink>
                <NavLink to  = "/Chinese">
                    <li>Chinese</li>
                </NavLink>
                <NavLink to  = "/IceCream">
                    <li>IceCream</li>
                </NavLink>
                <NavLink to  = "/Beverages">
                    <li>Beverages</li>
                </NavLink>
            
            
        </div>
        <Switch>
            <Route exact path = "/" component={Fastfood} ></Route>
            <Route path = "/BBQ" component={BBQ} ></Route>
            <Route path = "/Desi" component={Desi} ></Route>
            <Route path = "/Chinese" component={Chinese} ></Route>
            <Route path = "/IceCream" component={IceCream} ></Route>
            <Route path = "/Beverages" component={Beverages} ></Route>
            
        </Switch>
        </Router>
    )
}
export default _navigation;