import React from 'react';
import { connect } from 'react-redux';
import FixedMenu from './components/shared/FixedMenu';
import Sidebar from './components/shared/Sidebar';
import NotoriousRoute from './route';

const mapStateToProps = (state) => {
    return {
        displaySidebar: !state.options.bingeMode && state.current.onCourse
    }
};

const main = ({displaySidebar}) => (
    <div>
        <FixedMenu/>
        {displaySidebar
        ? <Sidebar title="Hello! This is a title." items={['1', '2', '3']}/>
        : <div/>}
        <NotoriousRoute/>
    </div>
);

export default connect(mapStateToProps)(main);