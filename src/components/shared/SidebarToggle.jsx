import React from 'react';
import {connect} from 'react-redux';

import {setDisplaySidebar} from "../../actions/index";

const mapStateToProps = (state) => {
    return {
        displaySidebar: state.current.displaySidebar
    }
};

let SidebarToggle = ({displaySidebar, dispatch}) => (
    <div className={(displaySidebar) ? "sidebar-toggle-container" : "sidebar-toggle-container-off"}>
        <input id="slide-sidebar" type="checkbox" role="button" onChange={() => dispatch(setDisplaySidebar(!displaySidebar))} checked={displaySidebar} />
        <label htmlFor="slide-sidebar"><span>close</span></label>
    </div>
);

export default connect(mapStateToProps)(SidebarToggle);