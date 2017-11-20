import getEnvironment from './environment';

let getPageLink = (page) => {
    switch(page) {
        default:
            return (getEnvironment() === "PROD") ? "/notorious" : "/";
    }
};

export default getPageLink;