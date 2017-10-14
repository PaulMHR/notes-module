import React from 'react';

import "../styles/NoteBody.css";

// TODO figure out what to do with date ;~;
export default ({first_unit_note}) => {
	console.log(first_unit_note);
	return (
		<div className="note_body_container">
            {first_unit_note.map(function(content_item, i) {
                return <p key={i}>{content_item}</p>;
            })}
		</div>
    );
}
