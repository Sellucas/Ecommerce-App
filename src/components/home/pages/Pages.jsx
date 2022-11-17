import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { Footer } from '../../common/Footer';
import { Header } from '../../common/Header';
import { Details } from '../details/Details';
import { Home } from '../Home';

export const Pages = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/cart/:id'>
                    <Details />
                </Route>
            </Switch>
            <Footer />
        </Router >
    )
}
