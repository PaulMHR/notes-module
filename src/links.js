import getEnvironment from './environment';

let getPageLink = (page) => {
    let page_affix;
    switch(page) {
        case "ABOUT":
            page_affix = "/about";
            break;
        default:
            page_affix = "/";
    }
    return ((getEnvironment() === "PROD") ? "/notorious" : "") + page_affix;
};

export default getPageLink;