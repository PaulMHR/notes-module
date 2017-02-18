import React from 'react';

function NoteHeader(props) {
	return (
		<div>
			<h3>{props.noteTitle}</h3>
			<h4>{props.noteDate}</h4>
		</div>
	);
}

export default NoteHeader;
