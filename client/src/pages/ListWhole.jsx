import React, { useState } from "react";


const ListWhole = () => {

  //전체, 모집중, 완료
  const [selectedIndex, setSelectedIndex] = useState(null);
  const handleClick = (index, e) => {
    e.preventDefault();
    setSelectedIndex(index);
  }

//모집중인 전체 스터디 갯수
  const [whole, setWhole] = useState(0);
  const increaseWhole = () => {
    setWhole(prevWhole => prevWhole + 1);
  };

//최신순으로 정렬
const [items, setItems] = useState([
  { id: 1, name: "Item 1", date: "2024-08-20" },
  { id: 2, name: "Item 2", date: "2024-08-27" },
  { id: 3, name: "Item 3", date: "2024-08-23" }
]);
//최신순으로 정렬하는 함수
const sortByLatest = () => {
  const sortedItems = [...items].sort((a, b) => new Date(b.date) - new Date(a.date));
  setItems(sortedItems);
  console.log(1);
};

// 팝업의 열림 상태를 관리하는 상태 변수
const [isModalOpen, setIsModalOpen] = useState(false);
// 팝업을 토글하는 함수
const toggleModal = () => {
  setIsModalOpen(!isModalOpen);
};

// 희망직무를 관리하는 상태 변수
const [selectedOption, setSelectedOption] = useState("");
 // 옵션 선택 시 호출되는 함수
 const handleSelect = (option) => {
  setSelectedOption(option);
};

// 주요기술을 관리하는 상태 변수
const [selectedOption2, setSelectedOption2] = useState("");
 // 옵션 선택 시 호출되는 함수
 const handleSelect2 = (option) => {
  setSelectedOption2(option);
};

//모달창 입력버튼
const [inputData, setInputData] = useState("");

// 입력 데이터 상태 업데이트 함수
 const handleInputChange = (event) => {
  setInputData(event.target.value);
};
// 데이터를 서버로 보내는 함수
  const handleSubmit = async () => {
    try {
      const response = await fetch("서버로보내기는 곳", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: inputData }),
      });

      if (response.ok) {
        alert("성공");
        setInputData(""); // 전송 후 입력 필드 초기화
      } else {
        alert("희망직무와 주요기술을 선택해주세요");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("에옹에옹에옹에옹에러");
    }
  };
    return (
      <div>

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
        
        <div className="select">
          <p className="whole_num">전체 <em className="whole_num__count">{whole}</em>개</p>
          <div className="filter">
            <a className="filter__recent" onClick={sortByLatest}>최신순</a>
            <a className="filter__popup" onClick={toggleModal}>필터</a>
              {/* 모달 */}
              {isModalOpen && (
                <div className="modal_overlay" onClick={toggleModal}>
                  <div className="modal_content" onClick={(e) => e.stopPropagation()}>
                    <h2 className="modal_tit">스터디 필터</h2>

                    <div className="filter_inner">
                      <div className="inner01">
                        <p className="inner01__tit">희망직무</p>
                          <div className="options_container" >
                            <div className={`option_box ${selectedOption === "option1" ? "selected" : ""}`} onClick={() => handleSelect("option1")}>기획</div>
                            <div className={`option_box ${selectedOption === "option2" ? "selected" : ""}`} onClick={() => handleSelect("option2")}>디자인</div>
                            <div className={`option_box ${selectedOption === "option3" ? "selected" : ""}`} onClick={() => handleSelect("option3")}>개발</div>
                          </div>
                      </div>

                      <div className="inner02">
                        <p className="inner02__tit">주요기술</p> 
                          <div className="options_container">
                            <div className={`option_box ${selectedOption2 === "option1" ? "selected1" : ""}`} onClick={() => handleSelect2("option1")}>HTML</div>
                            <div className={`option_box ${selectedOption2 === "option2" ? "selected2" : ""}`} onClick={() => handleSelect2("option2")}>CSS</div>
                            <div className={`option_box ${selectedOption2 === "option3" ? "selected3" : ""}`} onClick={() => handleSelect2("option3")}>SCSS</div>
                            <div className={`option_box ${selectedOption2 === "option4" ? "selected4" : ""}`} onClick={() => handleSelect2("option4")}>JAVASCRIPT</div>
                            <div className={`option_box ${selectedOption2 === "option5" ? "selected5" : ""}`} onClick={() => handleSelect2("option5")}>TYPESCRIPT</div>
                            <div className={`option_box ${selectedOption2 === "option6" ? "selected6" : ""}`} onClick={() => handleSelect2("option6")}>REACT</div>
                            <div className={`option_box ${selectedOption2 === "option7" ? "selected7" : ""}`} onClick={() => handleSelect2("option7")}>NODE.JS</div>
                            <div className={`option_box ${selectedOption2 === "option8" ? "selected8" : ""}`} onClick={() => handleSelect2("option8")}>JAVA</div>
                            <div className={`option_box ${selectedOption2 === "option9" ? "selected9" : ""}`} onClick={() => handleSelect2("option9")}>FIGMA</div>
                            <div className={`option_box ${selectedOption2 === "option10" ? "selected10" : ""}`} onClick={() => handleSelect2("option10")}>XD</div>
                          </div>
                      </div>
                      <button className="commit" onClick={handleSubmit}>적용</button>
                       
                    </div>
                    
                    <button className="modal_btn" onClick={toggleModal}>닫기</button>
                  </div>
                </div>
              )}
          </div>
        </div>




      </div>
    )
  }
  export default ListWhole