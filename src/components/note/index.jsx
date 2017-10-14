import React from 'react';
import firebase from 'firebase';
import Note from './note_content/index';
import NotesHeader from './note_header/SubjectHeader';

import "../../common.css";

class NoteIndex extends React.Component {
    constructor({match}) {
        super();
        this.state = {
            subject: match.params.courseId.replace('_', ' '),
            course_content_by_units: undefined
        };
    }

    componentWillMount() {
        firebase.database().ref('notes').on("value", snapshot => {
            let snapshot_val = snapshot.val();
            let snapshot_key = Object.keys(snapshot_val)[0];
            if (snapshot_key === this.state.subject) {
                console.log('a');
                this.setState({...this.state, course_content_by_units: snapshot_val[snapshot_key]["course_content_by_units"]})
            }
        });
        console.log('b');
        console.log(this.state.course_content_by_units);
    }

    render() {
        console.log('c');
        console.log(this.state.course_content_by_units);

        return (
            <div className="view_div">
                <NotesHeader subject={this.state.subject} />
                {this.state.course_content_by_units !== undefined
                    ?
                    Object.keys(this.state.course_content_by_units)
                        .map((key) =>
                            <Note key={key} title={key} unit_content={this.state.course_content_by_units[key]} />)
                    :
                    <p>404 Not Found Error!</p>
                }
            </div>
        );
    }
}


export default NoteIndex;