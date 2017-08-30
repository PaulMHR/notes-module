import React from 'react';
import Note from './note_content/index';
import NotesHeader from './note_header/SubjectHeader';

import "../../common.css";

export default ({match}) => (
    <div className="view_div">
        <NotesHeader subject={match.params.courseId.replace('_', ' ')} />
        <Note />
    </div>
);