import React from 'react';
import Markdown from 'react-markdown';

import "../styles/NoteBody.css";

let line_begins_with_number_or_bullet = (line) => {
    let accepted_indices = [0, 1, 2];
    let number_re = /\d\./;
    let match = line.match(number_re);
	return accepted_indices.indexOf(line.indexOf('*')) !== -1 || (match !== null && match.index === 0);
};

let line_is_header = (line) => {
	let h_match = line.match(/h\d\./);
	let hash_match = line.match(/#+/);
    return (h_match !== null && h_match.index === 0) || (hash_match !== null && hash_match.index === 0);
};

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
				source={date_note.reduce((a, b) => {
					let lastLine = a.split('\n').slice(-1)[0];
					let newline = null;
					console.log(lastLine);
					if ((line_begins_with_number_or_bullet(lastLine) && !line_begins_with_number_or_bullet(b)) || line_is_header(lastLine) || line_is_header(b)) {
						console.log('double newline!');
                        newline = '\n\n';
					} else {
						console.log('single newline!');
						newline = '\n';
					}
                    //console.log(b);
					return (a + newline + b).replace(/(h(\d)\.)(.+)/, (match, p1, p2, p3) => '#'.repeat(parseInt(p2)) + ' ' + p3);
                })}
			/>
		</div>
    );
}
