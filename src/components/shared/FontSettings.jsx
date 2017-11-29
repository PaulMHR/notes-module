import React from 'react';
import { connect } from 'react-redux';

import {setFontSize, resetFontSize} from '../../actions/index';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import Download from 'material-ui/svg-icons/editor/format-size';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const FontSettingsMenu = ({dispatch}) => (
    <MuiThemeProvider>
        <IconMenu
            iconButtonElement={<IconButton><Download/></IconButton>}
            anchorOrigin={{horizontal: 'left', vertical: 'top'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
        >
            <MenuItem
                primaryText="Font Size"
                rightIcon={<ArrowDropRight />}
                menuItems={[
                    <MenuItem primaryText="Small" onClick={() => dispatch(setFontSize("SMALL"))} />,
                    <MenuItem primaryText="Medium" onClick={() => dispatch(setFontSize("MEDIUM"))} />,
                    <MenuItem primaryText="Large" onClick={() => dispatch(setFontSize("LARGE"))} />,
                    <Divider />,
                    <MenuItem primaryText="Reset to Default" onClick={() => dispatch(resetFontSize())} />
                ]}
            />

        </IconMenu>
    </MuiThemeProvider>
);

export default connect()(FontSettingsMenu);

// TODO re-instate FA logo
/*
export default () => (
    <div>
        <i className="fa fa-cog" aria-hidden="true"/>
    </div>
);*/