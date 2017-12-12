import React from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';

import Note from './note_content/index';
import NotesHeaderTitle from './note_header/NoteHeaderTitle';
import NotesHeader from './note_header/index';
import NotFoundPage from './NotFoundPage';
import NoteSidebar from './note_sidebar/index';

import "../../common.css";

const mapStateToProps = (state) => {
    return {
        bingeMode: state.options.bingeMode
    }
};

class NoteIndex extends React.Component {
    constructor({match, bingeMode}) {
        super();
        this.state = {
            subject: match.params.courseId.replace('_', ' '),
            course_content_by_units: undefined,
            loading: true,
            found: false,
            bingeMode: bingeMode
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
                        course_content_by_units: snapshot_val[snapshot_keys[i]]["course_content_by_units"],
                        found: true});
                }
            }
            this.setState({...this.state, loading: false});
        });
    }

    bingeModeRender() {
        return (
            <div className="view_div">
                {this.state.loading ?
                    <div>
                        <NotesHeaderTitle subject={this.state.subject} />
                        <p>Loading...</p>
                        <p>(This should only take a minute or so.)</p>
                    </div>
                    :
                    this.state.found
                        ?
                        <div>
                            <NotesHeader
                                subject={this.state.subject}
                                is_online={this.state.is_online}
                                taken={this.state.taken}
                                instructor={this.state.instructor}
                                introduction={this.state.introduction} />
                            {(this.state.course_content_by_units === undefined || this.state.course_content_by_units === null)
                                ? <div/>
                                : Object.keys(this.state.course_content_by_units)
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

    w3_open() {
        console.log('open');
        document.getElementById("main").style.marginLeft = "25%";
        document.getElementById("mySidebar").style.width = "25%";
        document.getElementById("mySidebar").style.display = "block";
        document.getElementById("openNav").style.display = 'none';
    }

    splitModeRender() {
        return (
            <div>
                <NoteSidebar/>
                <div id="main">

                    <div className="w3-teal">
                        <button id="openNav" className="w3-button w3-teal w3-xlarge" onClick={this.w3_open}>&#9776;</button>
                        <div className="w3-container">
                            <h1>My Page</h1>
                        </div>
                    </div>

                        <div className="w3-container">
                            <p>In this example, the sidebar is hidden (style="display:none")</p>
                            <p>It is shown when you click on the menu icon in the top left corner.</p>
                            <p>When it is opened, it shifts the page content to the right.</p>
                            <p>We use JavaScript to add a 25% left margin to the div element with id="main" when this happens. The value "25%" matches the width of the sidebar.</p>
                        </div>

                </div>
            </div>
        );
    }

    render() {
        return (this.state.bingeMode) ? this.bingeModeRender() : this.splitModeRender();
    }
}


export default connect(mapStateToProps)(NoteIndex);