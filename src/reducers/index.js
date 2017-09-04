import { combineReducers } from 'redux';
import current from './current';
import search from './search';

const notoriousApp = combineReducers({
    current,
    search
});

export default notoriousApp;