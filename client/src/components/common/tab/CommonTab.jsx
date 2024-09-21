import { Link } from 'react-router-dom';

// css
import styles from "./CommonTab.module.scss"

function Tab() {
  const tabLists = [
    { title: "소개" },
    { title: "일정" },
    { title: "모임멤버" },
    { title: "댓글" }
  ]

  return (
  <ul className="tab">
    {tabLists.map((tabList, i) => (
      <li key={i} className="tab__item active">
        <Link className='tab__btn'>{tabList.title}</Link>
      </li>
    ))}
  </ul>
  );
}

export default Tab