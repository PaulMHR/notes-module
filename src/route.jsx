import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import getEnvironment from './environment';
import './common.css';

import MainMenu from './components/main_menu/index';
import About from './components/about/index';
import Note from './components/note/index';

import {setCurrentCourse,
    setCurrentUnit,
    resetCurrentCourseAndUnit} from "./actions/index";

const mapStateToProps = (state) => {
    return {
        displaySidebar: !state.options.bingeMode && state.current.onCourse
    }
};

const ReduxRoute = ({component: Component, path, onMatch, ...rest}) => (
    <Route {...rest}
        path={(getEnvironment() === "PROD") ? '/notorious' + path : path}
        render={props => {
            onMatch(props.match);
            return <Component {...props} />;
        }}
    />
);

let router = ({displaySidebar, dispatch}) => (
    <Router>
        <div className="route_div">
            <input id="slide-sidebar" type="checkbox" role="button" checked={!displaySidebar} />
            <label><span>close</span></label>

            <ReduxRoute exact={true} path="/" component={MainMenu}
                        onMatch={() => dispatch(resetCurrentCourseAndUnit())} />
            <ReduxRoute exact={true} path="/about" component={About}
                        onMatch={() => dispatch(resetCurrentCourseAndUnit())} />
            <ReduxRoute exact={true} path="/note/:courseId" component={Note}
                        onMatch={(match) => dispatch(setCurrentCourse(match.courseId))} />
            <ReduxRoute exact={true} path="/note/:courseId/u/:unitId" component={Note}
                        onMatch={(match) => dispatch(setCurrentUnit(match.unitId))} />
        </div>
    </Router>
);

export default connect(mapStateToProps)(router);