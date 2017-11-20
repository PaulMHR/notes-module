import React from 'react';

import getPageLink from '../../links';

export default () => (
    <div>
        <h4>Oh Dear!</h4>
        <p>It looks like we can't find the note you're looking for.</p>
        <p>Try <a href={getPageLink("HOME")}>returning to the home page</a> to look up another note.</p>
    </div>
);