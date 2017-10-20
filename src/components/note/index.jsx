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
            let snapshot_keys = Object.keys(snapshot_val);
            for (let i = 0; i < snapshot_keys.length; i++) {
                if (snapshot_keys[i] === this.state.subject) {
                    console.log('a');
                    this.setState({...this.state, course_content_by_units: snapshot_val[snapshot_keys[i]]["course_content_by_units"]});
                }
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
                        .sort((a,b) => {
                            const a_int = parseInt(a.split(' ')[0], 10);
                            const b_int = parseInt(b.split(' ')[0], 10);
                            console.log("Comparing " + a_int + " v " + b_int);
                            if (a_int < b_int) {
                                return -1;
                            } else if (a_int > b_int) {
                                return 1;
                            } else {
                                return 0;
                            }
                        })
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