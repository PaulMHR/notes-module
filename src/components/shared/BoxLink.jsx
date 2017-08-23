import React from 'react';
import { Link } from 'react-router-dom'

import './styles/BoxLink.css'

export default ({courseId, courseTitle}) => (
    <Link to={"/note/" + courseId} style={{'text-decoration': 'none'}}>
        <div className="box_link_outer">
        <span className="box_link_inner">
            <p className="box_link_id">{courseId}</p>
            <p className="box_link_title">{courseTitle}</p>
        </span>
        </div>
    </Link>
);