import React from 'react';

import NoteHeader from './NoteHeaderTitle';
import NoteIntroduction from './NoteIntroduction';

export default ({subject, introduction}) => (
    <div className="note-header-container">
        <NoteHeader subject={subject}/>
        <NoteIntroduction introduction={introduction}/>
    </div>
);