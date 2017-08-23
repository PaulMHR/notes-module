import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './common.css';

import MainMenu from './components/main_menu/index';
import Note from './components/note/index';

export default () => (
    <Router>
        <div className="route_div">
            <Route exact={true} path="/" component={MainMenu} />
            <Route path="/note/:courseId" component={Note} />
        </div>
    </Router>
);