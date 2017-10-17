import React from 'react';

import "../styles/NoteBody.css";

// TODO figure out what to do with date ;~;
export default ({date, date_note}) => {
	return (
		<div className="note_body_container">
			<div className="date_div">
				{date !== "null" ?
					<p>{date}</p> :
					<span></span>
				}
			</div>
            {date_note.map(function(content_item, i) {
                return <p key={i}>{content_item}</p>;
            })}
		</div>
    );
}
