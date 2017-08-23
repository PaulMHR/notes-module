import React from 'react';

import BoxLink from '../shared/BoxLink'

import "../../common.css"

export default () => (
    <div className="view_div">
        <p>Welcome to Notorious!</p>
        <div className="box_links">
            <BoxLink courseId="CS241" courseTitle="Foundations of Sequential Programs"/>
        </div>
    </div>
);