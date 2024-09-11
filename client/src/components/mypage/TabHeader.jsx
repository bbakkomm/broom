import React from 'react';

function TabHeader({ activeTab, onTabClick }) {
    const tabs = ['댓글', '일정'];
  
    return (
      <ul className="tabs">
        {tabs.map((tab, idx) => (
          <li
            key={idx}
            className={activeTab === idx ? 'tabs__menu active' : 'tabs__menu'}
            onClick={() => onTabClick(idx)}
          >
            {tab}
          </li>
        ))}
      </ul>
    );
  }

export default TabHeader