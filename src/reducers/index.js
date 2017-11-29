import { combineReducers } from 'redux';
import current from './current';
import search from './search';
import options from './options';

const notoriousApp = combineReducers({
    current,
    search,
    options
});

export default notoriousApp;