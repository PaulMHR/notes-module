import React from 'react';
import Logo from './components/shared/Logo';
import FixedMenu from './components/shared/FixedMenu';
import NotoriousRoute from './route';

export default () => (
    <div>
        <FixedMenu/>
        <NotoriousRoute/>
    </div>
);