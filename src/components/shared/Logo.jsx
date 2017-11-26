import React from 'react';
import './styles/Logo.css';
import getEnvironment from '../../environment';

export default () => (
    <a href={(getEnvironment() === "PROD") ? "/notorious" : "/"} style={{'textDecoration': 'none'}}>
        <div className="logo_div">
            <p className="logo-text">N</p>
        </div>
    </a>
);