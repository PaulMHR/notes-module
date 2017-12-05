import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import getEnvironment from './environment';
import './common.css';

import MainMenu from './components/main_menu/index';
import About from './components/about/index';
import Note from './components/note/index';
import Editor from './components/editor/index';

let devRouter = () => (
    <Router>
        <div className="route_div">
            <Route exact={true} path="/" component={MainMenu} />
            <Route exact={true} path="/about" component={About} />
            <Route path="/note/:courseId" component={Note} />
            <Route path="/editor" component={Editor} />
        </div>
    </Router>
);

let productionRouter = () => (
    <Router>
        <div className="route_div">
            <Route exact={true} path="/notorious" component={MainMenu} />
            <Route exact={true} path="/notorious/about" component={About} />
            <Route path="/notorious/note/:courseId" component={Note} />
        </div>
    </Router>
);

export default (getEnvironment() === "PROD") ? productionRouter : devRouter;