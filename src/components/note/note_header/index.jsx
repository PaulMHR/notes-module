import React from 'react';

import NoteHeaderPresentational from './NoteHeaderPresentational';

export default ({subject, is_online, taken, instructor, introduction}) => {
    let introductory_note = introduction;
    if (is_online !== undefined && taken) {
        let meta_info = [
            "## Info on these Notes",
            ((is_online) ? "* Class taken online " : "* Class taken on campus"),
            "* Taken in: " + taken
        ];
        if (instructor) {
            meta_info.push("* Instructor: " + instructor);
        }
        introductory_note = meta_info.concat(introductory_note);
    }
    return (<NoteHeaderPresentational subject={subject} introduction={introductory_note} />);
}