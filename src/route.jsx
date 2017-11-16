import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import getEnvironment from './environment';
import './common.css';

import MainMenu from './components/main_menu/index';
import Note from './components/note/index';
import Editor from './components/editor/index';

let devRouter = () => (
    <Router>
        <div className="route_div">
            <Route exact={true} path="/" component={MainMenu} />
            <Route path="/note/:courseId" component={Note} />
            <Route path="/editor" component={Editor} />
        </div>
    </Router>
);

let productionRouter = () => (
    <Router>
        <div className="route_div">
            <Route exact={true} path="/notorious" component={MainMenu} />
            <Route path="/notorious/note/:courseId" component={Note} />
        </div>
    </Router>
);

export default (getEnvironment() === "PROD") ? productionRouter : devRouter;