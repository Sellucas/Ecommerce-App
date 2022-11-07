import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { Footer } from '../../common/Footer';
import { Header } from '../../common/Header';
import { Home } from '../Home';

export const Pages = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
            {/* <Footer /> */}
        </Router>
    )
}
