import React from 'react';

import BoxLink from '../shared/BoxLink'

import "../../common.css"
import "./styles/main_menu.css"

export default () => (
    <div>
        <h1>Notorious!</h1>
        <p>Notes written for students, by students.</p>
        <p>Start studing with one of the courses below!</p>
        <div className="box_links">
            <ul>
                <li><BoxLink courseId="CS_241" courseTitle="Foundations of Sequential Programs"/></li>
                <li><BoxLink courseId="CS_350" courseTitle="Operating Systems"/></li>
                <li><BoxLink courseId="ENGL_200A" courseTitle="Survey of British Literature I"/></li>
                <li><BoxLink courseId="ENGL_251B" courseTitle="Literary Criticism II"/></li>
            </ul>
        </div>
    </div>
);