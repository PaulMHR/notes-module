import React from 'react';
import { Link } from 'react-router-dom'

import './styles/BoxLink.css'

export default ({linkText, link}) => (
    <Link to={link}>
        <div className="box_link_outer">
            <span className="box_link_inner">
                <p>{linkText}</p>
            </span>
        </div>
    </Link>
);