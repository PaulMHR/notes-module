import React from 'react';
import Markdown from 'react-markdown';
import dateFormat from 'dateformat';
import { connect } from 'react-redux';

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

const mapStateToProps = (state) => {
    return {
        font_size: state.options.fontSize
    }
};

let parseMarkdownText = (date_note) => {
    let original_output = date_note.reduce((a, b) => {
        let lastLine = a.split('\n').slice(-1)[0];
        let newline = null;
        if ((!line_begins_with_number_or_bullet(lastLine) && !line_begins_with_number_or_bullet(b)) || (line_begins_with_number_or_bullet(lastLine) && !line_begins_with_number_or_bullet(b)) || line_is_header(lastLine) || line_is_header(b)) {
            newline = '\n\n';
        } else {
            newline = '\n';
        }
        return (a + newline + b).replace(/(h(\d)\.)(.+)/, (match, p1, p2, p3) => '#'.repeat(parseInt(p2, 10)) + ' ' + p3);
    });

    let split_note = original_output.split(/(?:\n+<<|>>\n+)/);

	return split_note;
};

let NoteBody = ({date, date_note, font_size="LARGE"}) => {
	let firstLineIsHeader = line_is_header(date_note[0]);
	let key_iterator = 0;
	return (
		<div className="note-body-container">
			<div className={(firstLineIsHeader) ? "date-div" : "date-div-no-header"}>
				{date !== "null" ?
					<p><em>{dateFormat(new Date(date), 'mmmm dS, yyyy')}</em></p> :
					<span/>
				}
			</div>

			{parseMarkdownText(date_note).map(input => {
			    key_iterator++;
				if (input.match(/.+\.(jpg|png|gif) alt='.+' caption='.*'/)) {
				    let filename = input.match(/.+\.(?:jpg|png|gif)/);
				    let alt = input.match(/alt='.+'/);
				    let caption = input.match(/caption='(.+)'/);
					return (
					    <div key={key_iterator} className="note-body-img-container">
					        <img className="note-body-img" src={'images/' + filename} alt={alt}/>
                            <p className="note-body-img-caption">{caption[1]}</p>
                        </div>
                    );
                } else {
					return <Markdown key={key_iterator}
						className={"markdown-text-" + font_size.toLowerCase()}
						source={input}
					/>;
                }
            })}

		</div>
    );
};

export default connect(mapStateToProps)(NoteBody);
