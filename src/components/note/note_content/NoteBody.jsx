import React from 'react';

import "../styles/NoteBody.css";

let test_note = [
    'What makes something a piece of literature, or what is the nature of being literary? No one knows for sure.',
    'What makes something a piece of literature, while another piece isn’t? All we know is that literature is all complicated in a specific way. So who decides what is literature? Literary scholars, critics and reviewers, and the market all play their role.',
    'Literary arguments concern what works are part of a certain tradition. “The Call of the Wild” by Jack London was part of English Literary Studies in the USSR because of its societal criticism, but wasn’t to be found in American syllabi. Many great disputes of who is and isn’t literary have occurred around John Milton and John Donne. Milton was considered universally praiseworthy until he was attacked by T.S. Elliot. He championed Donne and his conversational style.',
    'The Canon Wars concern the push for including women, black, and immigrant authors in' +
    'literature syllabi. This launched a slew of protests around American Universities on both parties in the issue around the mid-nineties. When ACTA was asked to look into whether or not dropping the Shakespeare requirement was indeed a trend, they could twenty-three out of seventy of the universities studied still required Shakespeare. Some consider this appalling, since they consider Shakespeare essential to the English Literary Tradition. Bruce Smith, English Professor at Georgetown, says that the “Major Authors” requirement, including Shakespeare, prevented room in the curriculum for women and minority authors. Upon release the requirement, Georgetown was subject to student protests and lots of media coverage, primarily from right-wing organizations and student groups. The media coverage given to the issue may function out of a public desire to return to the old value system. All this reveals that our definition of literature, and essential literature, is far from universally accepted, and even further from being unchanging.'
];

export default ({content=test_note}) => {
	console.log(content);
	return (
		<div className="note_body_container">
            {content.map(function(content_item, i) {
                return <p key={i}>{content_item}</p>;
            })}
		</div>
    );
}
