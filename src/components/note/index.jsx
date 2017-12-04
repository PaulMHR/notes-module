import React from 'react';
import firebase from 'firebase';

import Note from './note_content/index';
import NotesHeaderTitle from './note_header/NoteHeaderTitle';
import NotesHeader from './note_header/index';
import NotFoundPage from './NotFoundPage';

import "../../common.css";

class NoteIndex extends React.Component {
    constructor({match}) {
        super();
        this.state = {
            subject: match.params.courseId.replace('_', ' '),
            course_content_by_units: undefined,
            loading: true
        };
    }

    componentWillMount() {
        firebase.database().ref('notes').on("value", snapshot => {
            let snapshot_val = snapshot.val();
            let snapshot_keys = Object.keys(snapshot_val);
            for (let i = 0; i < snapshot_keys.length; i++) {
                if (snapshot_keys[i] === this.state.subject) {
                    this.setState({...this.state,
                        is_online: snapshot_val[snapshot_keys[i]]["is_online"],
                        taken : snapshot_val[snapshot_keys[i]]["taken"],
                        instructor : snapshot_val[snapshot_keys[i]]["instructor"],
                        introduction : snapshot_val[snapshot_keys[i]]["introduction"],
                        course_content_by_units: snapshot_val[snapshot_keys[i]]["course_content_by_units"]});
                }
            }
            this.setState({...this.state, loading: false});
        });
    }

    render() {
        console.log(this.state.introduction);
        return (
            <div className="view_div">
                {this.state.loading ?
                    <div>
                        <NotesHeaderTitle subject={this.state.subject} />
                        <p>Loading...</p>
                        <p>(This should only take a minute or so.)</p>
                    </div>
                    :
                    this.state.course_content_by_units !== undefined
                    ?
                    <div>
                        <NotesHeader
                            subject={this.state.subject}
                            is_online={this.state.is_online}
                            taken={this.state.taken}
                            instructor={this.state.instructor}
                            introduction={this.state.introduction} />
                        {Object.keys(this.state.course_content_by_units)
                            .sort((a,b) => {
                                const a_int = parseInt(a.split(' ')[0], 10);
                                const b_int = parseInt(b.split(' ')[0], 10);
                                if (a_int < b_int) {
                                    return -1;
                                } else if (a_int > b_int) {
                                    return 1;
                                } else {
                                    return 0;
                                }
                            })
                            .map((key) =>
                                <Note key={key} title={key} unit_content={this.state.course_content_by_units[key]} />)}
                    </div>
                    :
                    <NotFoundPage/>
                }
            </div>
        );
    }
}


export default NoteIndex;