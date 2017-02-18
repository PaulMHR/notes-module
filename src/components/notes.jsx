import React from 'react';
import NoteHeader from './noteHeader';
import NoteBody from './noteBody';

function Notes() {
	return (
		<div>
			<NoteHeader noteTitle="Test" noteDate="September 6th, 2016" />
			<NoteBody noteContent="React Rules!" />
		</div>
	);
}

export default Notes;
