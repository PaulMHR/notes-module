import React from 'react';

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
                <ul>
                {items.map((item) => (
                    <li key={items.indexOf(item)}>{item}</li>
                ))}
                </ul>
            </div>
        }
    </div>
);