import React from 'react';

import "../styles/NoteTitle.css";

export default ({title, date}) => (
	<div>
		<ul className="note_title_list">
			<li><p className="note_title_name"><strong>{title}</strong></p></li>
			<li className="note_title_date"><p>{date}</p></li>
		</ul>
	</div>
);
