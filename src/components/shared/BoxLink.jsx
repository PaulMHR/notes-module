import React from 'react';
import { Link } from 'react-router-dom';
import getEnvironment from '../../environment';

import './styles/BoxLink.css'

export default ({courseId, courseTitle, imagePath}) => (
    <div id="box_link_outer" className="box_link_outer">
        <Link to={((getEnvironment() === "PROD") ? "/notorious" : "") + "/note/" + courseId} style={{'textDecoration': 'none'}}>
            <div>
                <img src={"images/" + courseId.toLowerCase() + ".jpg"} alt={"Background image for " + courseId.replace('_', ' ')}/>
                <span className="box_link_inner">
                    <p className="box_link_id">{courseId.replace('_', ' ')}</p>
                    <p className="box_link_title">{courseTitle}</p>
                </span>
            </div>
        </Link>
    </div>
);