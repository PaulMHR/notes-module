import React from 'react';
import Markdown from 'react-markdown';

import "../styles/NoteBody.css";

// TODO fix Markdown parsing for numbered lists. And for lists in general.
export default ({date, date_note}) => {
	return (
		<div className="note_body_container">
			<div className="date_div">
				{date !== "null" ?
					<p>{date}</p> :
					<span></span>
				}
			</div>

			<Markdown
				className="markdown-text"
				source={date_note.reduce((a, b) => a + ((a.split('\n').slice(-1)[0].indexOf('*') === 0 && b.indexOf('*') !== 0) ? '\n\n' : '\n') + b)}
			/>
		</div>
    );
}
