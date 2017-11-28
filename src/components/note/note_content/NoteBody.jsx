import React from 'react';
import Markdown from 'react-markdown';
import dateFormat from 'dateformat';

import "../styles/NoteBody.css";

let line_begins_with_number_or_bullet = (line) => {
    let accepted_indices = [0, 1, 2];
    let number_re = /\d\./;
    let match = line.match(number_re);
	return accepted_indices.indexOf(line.indexOf('*')) !== -1 || (match !== null && accepted_indices.indexOf(match.index) !== -1);
};

let line_is_header = (line) => {
	let h_match = line.match(/h\d\./);
	let hash_match = line.match(/#+/);
    return (h_match !== null && h_match.index === 0) || (hash_match !== null && hash_match.index === 0);
};

export default ({date, date_note}) => {
	let firstLineIsHeader = line_is_header(date_note[0]);
	return (
		<div className="note-body-container">
			<div className={(firstLineIsHeader) ? "date-div" : "date-div-no-header"}>
				{date !== "null" ?
					<p><em>{dateFormat(new Date(date), 'mmmm dS, yyyy')}</em></p> :
					<span></span>
				}
			</div>

			<Markdown
				className="markdown-text"
				source={date_note.reduce((a, b) => {
					let lastLine = a.split('\n').slice(-1)[0];
					let newline = null;
					//console.log(lastLine);
					if ((!line_begins_with_number_or_bullet(lastLine) && !line_begins_with_number_or_bullet(b)) || (line_begins_with_number_or_bullet(lastLine) && !line_begins_with_number_or_bullet(b)) || line_is_header(lastLine) || line_is_header(b)) {
						//console.log('double newline!');
                        newline = '\n\n';
					} else {
						//console.log('single newline!');
						newline = '\n';
					}
                    //console.log(b);
					return (a + newline + b).replace(/(h(\d)\.)(.+)/, (match, p1, p2, p3) => '#'.repeat(parseInt(p2, 10)) + ' ' + p3);
                })}
			/>
		</div>
    );
}
