import React from 'react';
import NoteHeader from './noteTitle';
import NoteBody from './noteBody';

export default () => (
	<div>
		<NoteHeader title="Test" date="September 6th, 2016" />
		<NoteBody content="React Rules!" />
	</div>
);
