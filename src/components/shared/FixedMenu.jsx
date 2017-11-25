import React from 'react';

import Logo from './Logo';
import FontSettings from './FontSettings';

import './styles/FixedMenu.css';

export default () => (
    <div className="fixed-menu-container">
        <Logo/>
        <FontSettings/>
    </div>
);
