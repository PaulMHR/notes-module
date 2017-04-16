import React from 'react';
import Note from './note/index';
import NotesHeader from './notesHeader';

export default ({subject}) => (
    <div>
        <NotesHeader subject={subject} />
        <Note />
    </div>
);