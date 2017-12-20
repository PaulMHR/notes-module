import React from 'react';
import {connect} from 'react-redux';

import Sidebar from './Sidebar';

const mapStateToProps = (state) => {
    return {
        title: (state.current.courseCode === undefined) ? state.current.courseCode : state.current.courseCode.replace('_', ' '),
        items: state.current.units
    }
};

const NoteSidebar = ({title, items}) => {
    return (
        <Sidebar title={title} items={items} />
    );
};

export default connect(mapStateToProps)(NoteSidebar);