import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import MainMenu from './components/main/index';
import Note from './components/note/index';


export default () => (
    <Router>
        <div>
            <Route exact={true} path="/">
                <MainMenu />
            </Route>

            <Route path="/note/:courseId" component={Note} />
        </div>
    </Router>
);