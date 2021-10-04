import React from 'react'
import {
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { Producto } from '../components/Producto';

export const DashBoardRouters = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/producto" component={Producto} />
                <Redirect  to="/producto" />

              
            </Switch>
        </div>
    )
}