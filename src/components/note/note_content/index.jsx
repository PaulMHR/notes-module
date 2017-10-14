import React from 'react';
import NoteHeader from './NoteTitle';
import NoteBody from './NoteBody';

export default ({title, unit_content}) => (
	<div>
		<NoteHeader title={title} />
		<NoteBody first_unit_note={unit_content["null"]} />
	</div>
);
