import React from 'react';
import './sidebar.css'


const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__header"></div>
            <div className="sidebar__search"></div>
            <div className="sidebar__chats"></div>
        </div>
    );
}

export default Sidebar;