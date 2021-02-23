import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from './home';
import About from './about';
import Faq from './faq';
import Store from './store';

const navigationbar = () => {

    return (
        <Router>
            <h2>Hi, this is react router, test 1</h2>
            <div>
                <ul>
                    <li>
                        <Link to="/home">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/faq">
                            FAQ
                        </Link>
                    </li>
                    <li>
                        <Link to="/store">
                            Store
                        </Link>
                    </li>
                </ul>

                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/faq">
                        <Faq />
                    </Route>
                    <Route path="/store">
                        <Store />
                    </Route>
                </Switch>
            
            </div>
        </Router>
    );

}

export default navigationbar;