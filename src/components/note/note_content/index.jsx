import React from 'react';
import NoteHeader from './NoteTitle';
import NoteBody from './NoteBody';

export default () => (
	<div>
		<NoteHeader title="Test" date="September 6th, 2016" />
		<NoteBody content="React Rules!" />
	</div>
);
