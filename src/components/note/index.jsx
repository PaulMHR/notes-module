import React from 'react';
import Note from './note_content/index';
import NotesHeader from './note_header/notesHeader';

export default ({match}) => (
    <div>
        <NotesHeader subject={match.params.courseId} />
        <Note />
    </div>
);