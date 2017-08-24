import React from 'react';
import { Link } from 'react-router-dom'

import './styles/BoxLink.css'

export default ({courseId, courseTitle, imagePath}) => (
    <div id="box_link_outer" className="box_link_outer">
        <Link to={"/note/" + courseId} style={{'textDecoration': 'none'}}>
            <div>
                <img src={"images/" + courseId + ".jpg"} alt={"Background image for " + courseId}/>
                <span className="box_link_inner">
                    <p className="box_link_id">{courseId.replace('_', ' ')}</p>
                    <p className="box_link_title">{courseTitle}</p>
                </span>
            </div>
        </Link>
    </div>
);