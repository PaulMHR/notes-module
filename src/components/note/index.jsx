import React from 'react';
import Note from './note_content/index';
import NotesHeader from './note_header/SubjectHeader';

import ENGL251B_Note from '../../notes/engl251b';

import "../../common.css";

let {course_content_by_units} = ENGL251B_Note;

export default ({match}) => (
    <div className="view_div">
        <NotesHeader subject={match.params.courseId.replace('_', ' ')} />
        {
            Object.keys(course_content_by_units)
                .map((key) =>
                    <Note key={key} title={key} unit_content={course_content_by_units[key]} />)
        }
    </div>
);