export const convertUnitIntoId = (unitName) => {
    return unitName.replace(/ /g, '-').replace(/[?&]/, '').toLowerCase();
};

export const stripOfFirstNumber = (unitName) => {
    let splitArray = unitName.split(" ");
    splitArray.splice(0, 1);
    return splitArray.join(' ');
};