import Note from '../note/index';

class About extends Note {
    constructor() {
        super({match: {params: {courseId: "About"}}});
        this.state = {
            subject: "About",
            course_content_by_units: undefined,
            loading: true
        };
    }
}

export default About;