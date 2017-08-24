import React from 'react';

import BoxLink from '../shared/BoxLink'

import "../../common.css"

export default () => (
    <div className="view_div">
        <p>Welcome to Notorious!</p>
        <div className="box_links">
            <BoxLink courseId="CS_241" courseTitle="Foundations of Sequential Programs"/>
            <BoxLink courseId="CS_350" courseTitle="Operating Systems"/>
            <BoxLink courseId="ENGL_200A" courseTitle="Survey of British Literature I"/>
            <BoxLink courseId="ENGL_251B" courseTitle="Literary Criticism II"/>
        </div>
    </div>
);