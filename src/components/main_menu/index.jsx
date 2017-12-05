import React from 'react';

import BoxLink from '../shared/BoxLink';

import "../../common.css";
import "./styles/MainMenu.css";

import getPageLink from '../../links';

export default () => (
    <div className="view_div">
        <h1>Notorious</h1>
        <hr/>
        <p>Notes written for some of the toughest courses at the University of Waterloo.</p>
        <p>Start studying with one of the courses below!</p>
        <hr/>
        <div className="box_links">
            <ul className="box_links_list">
                <li><BoxLink courseId="CS_241" courseTitle="Foundations of Sequential Programs"/></li>
                <li><BoxLink courseId="CS_350" courseTitle="Operating Systems"/></li>
                <li><BoxLink courseId="ENGL_200A" courseTitle="Survey of British Literature I"/></li>
                <li><BoxLink courseId="ENGL_251B" courseTitle="Literary Criticism II"/></li>
            </ul>
        </div>
        <hr/>
        <p>Want to learn more about Notorious?</p>
        <form className="main-page-about-button" action={getPageLink("ABOUT")}>
            <input type="submit" value="Click here to learn more about us!" />
        </form>
        <hr/>
    </div>
);