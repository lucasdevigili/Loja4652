import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom"
import Homepage from "../pages/Homepage/Index";
import SignUp from "../pages/SignUp/Index";

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={ Homepage } path="/" exact/>
                <Route component={ SignUp } path="/signup" exact/>
            </Switch>
        </BrowserRouter>
    )
} 

export default Routes