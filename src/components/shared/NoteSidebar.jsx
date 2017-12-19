import React from 'react';
import {connect} from 'react-redux';

import Sidebar from './Sidebar';

const mapStateToProps = (state) => {
    return {
        title: state.current.courseCode.replace('_', ' ')
    }
};

const NoteSidebar = ({title}) => (
    <Sidebar title={title} items={['1', '2', '3']} />
);

export default connect(mapStateToProps)(NoteSidebar);