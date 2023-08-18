import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom"
import Homepage from "../pages/Homepage/Index";

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={ Homepage } path="/" exact/>
            </Switch>
        </BrowserRouter>
    )
} 

export default Routes