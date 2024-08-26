import React, { useState } from "react";

const ListWhole = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const handleClick = (index, e) => {
    e.preventDefault();
    setSelectedIndex(index);
  }

    return (
      <div className="list_tit">

        <a href="" onClick={(e) => handleClick(0, e)}>
          <div style={{
          color: selectedIndex === 0 ? 'black' : 'black',
          fontWeight: selectedIndex === 0 ? 'bold' : 'normal',
          }}>전체</div>
        </a>

        <a href="" onClick={(e) => handleClick(1, e)}>
          <div style={{
          color: selectedIndex === 1 ? 'black' : 'black',
          fontWeight: selectedIndex === 1 ? 'bold' : 'normal',
          }}>모집중</div>
        </a>

        <a href="" onClick={(e) => handleClick(2, e)}>
          <div style={{
          color: selectedIndex === 2 ? 'black' : 'black',
          fontWeight: selectedIndex === 2 ? 'bold' : 'normal',
          }}>완료</div>
        </a>


      </div>
    )
  }
  export default ListWhole