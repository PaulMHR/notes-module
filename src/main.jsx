import React from 'react';
import { connect } from 'react-redux';
import FixedMenu from './components/shared/FixedMenu';
import NoteSidebar from './components/shared/NoteSidebar';
import NotoriousRoute from './route';

const mapStateToProps = (state) => {
    return {
        displaySidebar: state.current.displaySidebar
    }
};

const main = ({displaySidebar}) => (
    <div>
        <FixedMenu/>
        {displaySidebar
        ? <NoteSidebar/>
        : <div/>}
        <NotoriousRoute/>
    </div>
);

export default connect(mapStateToProps)(main);