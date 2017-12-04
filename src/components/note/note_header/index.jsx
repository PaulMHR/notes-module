import React from 'react';

import NoteHeader from './NoteHeaderTitle';
import NoteIntroduction from './NoteIntroduction';

export default ({subject, is_online, taken, instructor, introduction}) => {
    let note = introduction;
    note.unshift(
        "## Meta Info on these Notes",
        "* Taken online: " + is_online,
        "* Taken in: " + taken,
    );
    return (<div className="note-header-container">
        <NoteHeader subject={subject}/>
        <NoteIntroduction note={note}/>
    </div>);
}