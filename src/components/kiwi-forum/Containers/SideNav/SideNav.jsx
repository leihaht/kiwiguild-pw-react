import React from 'react';

import NewDiscussion from '../../Components/Buttons/NewDiscussion';
import SideTags from '../../Components/SideTags';

const SideNav = () => (
    <nav className="sideNav">
        <ul>
            <li className="item-newDiscussion">
                <NewDiscussion buttonLabel="Start a Discussion" />
            </li>
            <li className="item-nav">
                <p>All Discussions</p>
                <SideTags />
            </li>
        </ul>
    </nav>
);

export default SideNav;
