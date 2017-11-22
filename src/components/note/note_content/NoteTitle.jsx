import React from 'react';

import "../styles/NoteTitle.css";

export default ({title}) => (
	<div className="note-content-title-container">
		<h1 className="note-title">{title}</h1>
		<hr/>
	</div>
);
