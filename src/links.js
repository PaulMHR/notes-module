import getEnvironment from './environment';

import {convertUnitIntoId} from "./utils";

let getPageLink = (page, params = {}) => {
    let page_affix;
    switch(page) {
        case "NOTE-UNIT":
            page_affix = (params.unit === "1 Introduction")
                ? '/note/' + params.courseId
                : '/note/' + params.courseId + '/u/' + convertUnitIntoId(params.unit);
            break;
        case "ABOUT":
            page_affix = "/about";
            break;
        default:
            page_affix = "/";
    }
    return ((getEnvironment() === "PROD") ? "/notorious" : "") + page_affix;
};

export default getPageLink;