import React from 'react';
import { connect } from 'react-redux';

import {setFontSize, resetFontSize} from '../../actions/index';

const mapStateToProps = state => ({
    currentFontSize: state.options.fontSize
});

let FontSettingsInlineOption = ({fontSize, dispatch}) => (
    <span className={"font-settings-inline-option-" + fontSize.toLowerCase()}
          onClick={() => dispatch(setFontSize(fontSize.toUpperCase()))}>
        A
    </span>
);

let FontSettingsInline = ({currentFontSize, dispatch}) => (
    <div className="font-settings-inline-container">
        <ul className="font-settings-inline-list">
            <li><FontSettingsInlineOption fontSize="small" dispatch={dispatch} /></li>
            <li><FontSettingsInlineOption fontSize="medium" dispatch={dispatch} /></li>
            <li><FontSettingsInlineOption fontSize="large" dispatch={dispatch} /></li>
            <li><FontSettingsInlineOption fontSize="x-large" dispatch={dispatch} /></li>
        </ul>
    </div>
);

export default connect(mapStateToProps)(FontSettingsInline);