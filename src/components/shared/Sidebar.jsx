import React from 'react';

import getPageLink from '../../links';

import './styles/Sidebar.css';

export default ({title, items, empty}) => (
    <div className="sidebar-container">
        {empty
            ? <span/>
            :
            <div>
                <div className="sidebar-header-container">
                    <h1>{title}</h1>
                </div>
                {title === undefined || items === undefined
                    ? <p><i>(No items in sidebar)</i></p>
                    : <ol>
                        {items.map((item) => (
                            <li key={item}>
                            <a href={getPageLink('NOTE-UNIT', {courseId: title.replace(' ', '_'), unit: item})}>
                                {item}
                            </a>
                            </li>
                        ))}
                    </ol>
                }
            </div>
        }
    </div>
);