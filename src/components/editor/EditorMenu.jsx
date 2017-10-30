import React from 'react';

class EditorMenu extends React.Component {
    constructor() {
        super();
        this.state = {
            subject: "ENGL 251B", // TODO match
            course_content_by_units: undefined
        };
    }

    componentWillMount() {
        firebase.database().ref('notes').on("value", snapshot => {
            let snapshot_val = snapshot.val();
            let snapshot_keys = Object.keys(snapshot_val);
            for (let i = 0; i < snapshot_keys.length; i++) {
                if (snapshot_keys[i] === this.state.subject) {
                    this.setState({...this.state, course_content_by_units: snapshot_val[snapshot_keys[i]]["course_content_by_units"]});
                }
            }
        });

    }

    render() {
        let first_unit_name = Object.keys(this.state.course_content_by_units)[0];
        return (
            <div className="editor-menu-container">
                <p>Notes for {this.state.subject}</p>
                <p>On unit {first_unit_name}</p>
            </div>
        );
    }
}


export default EditorMenu;