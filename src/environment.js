let getEnvironment = () => {
    const productionOrigin = "paulrudmik.com";
    return (location.origin.indexOf(productionOrigin) >= 0) ? "PROD" : "DEV";
};

export default getEnvironment;