import React from 'react';

import './styles/Sidebar.css';

export default ({title, items, empty}) => (
    <div className="sidebar-container">
        {empty
            ? <span/>
            :
            <div><h1>{title}</h1>
            <ul>
            {items.map((item) => (
                <li key={items.indexOf(item)}>{item}</li>
            ))}
            </ul></div>
        }
    </div>
);