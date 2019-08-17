// import React, {Component, Suspense} from 'react';
import React, {Component} from 'react';
import {
    Route,
    Switch
} from "react-router-dom";
import * as ROUTES from "../../../config/constants/route-paths";
import Header from "../../layout/header";
import Footer from  "../../layout/footer";
import Home from "../../pages/home";

class RoutesComponent extends Component {
    render() {
        return (
            <section>

                <Switch>
                    <Route component={Header}/>
                </Switch>  

                <Switch>
                    <Route exact path={ROUTES.HOME} component={Home} />
                </Switch>

                <Switch>
                    <Route component={Footer}/>
                </Switch>

            </section>
        );
    }
}

export default RoutesComponent;
