export const convertUnitIntoId = (unitName) => {
    return unitName.replace(' ', '-').replace(/[?&]/, '').toLowerCase();
};
