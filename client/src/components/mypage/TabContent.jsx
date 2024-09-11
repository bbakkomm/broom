import React from 'react';

function TabContent({ activeTab }) {
    const content = [
      '나의 댓글 리스트',
      '활동 모임 일정 리스트',
    ];
  
    return <div>{content[activeTab]}</div>;
}

export default TabContent