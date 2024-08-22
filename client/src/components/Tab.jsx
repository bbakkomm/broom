import React from 'react'
import { Link } from 'react-router-dom';

function Tab() {
  const tabLists = [
    { title: "탭1" },
    { title: "탭2" },
    { title: "탭3" }
  ]

  return (
    <div className="tab">
      <ul className="tab__list">
        {tabLists.map((tabList, i) => (
          <li key={i} className="tab__item">
            <Link className='tab__btn'>{tabList.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tab