import React from 'react';
import NoteHeader from './NoteTitle';
import NoteBody from './NoteBody';

export default ({title, unit_content}) => {
    const dates = Object.keys(unit_content);
    return (
        <div>
            <NoteHeader title={title} />
            {dates.map((date, i) => <NoteBody key={i} date={date} date_note={unit_content[date]} />)}
        </div>
    );
}
