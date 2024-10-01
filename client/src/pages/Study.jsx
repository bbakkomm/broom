import { useEffect, useState } from 'react';
import { redirect, useLoaderData, useNavigate } from 'react-router-dom';

// api
import customFetch from "../utils/customFetch.js";

import SearchBtn from '../components/common/header/component/SearchBtn.jsx';

import StudyCard from '../components/common/studycard/CommonStudyCard';
import SearchNotFound from '../components/common/studycard/SearchNotFound.jsx';

export const loader = async ({ req }) => {
	try {
			const resUser = await customFetch.get('/users/current-user', req);
			const res = await customFetch.get('/study', req);
			return [res.data, resUser];
	} catch (error) {
			console.log(error);
			return redirect('/login');
	}
}

function Study() {
	const loadData = useLoaderData();
	const { studys } = loadData[0];

	const [studyCard, setStudyCard] = useState(studys);
	const [search, setSearch] = useState('');
	const [studyTab, setStudyTab] = useState('all');

	const studyList = studyCard.map((item, idx)=>{
		return (
			<StudyCard 
				studyType={'all'}
				key={`study_${idx}`}
				objId={item._id}
				idx={idx}
				title={item.title}
				thumb={item.thumb}
				startDate={item.startDate}
				endDate={item.endDate}
				time={item.time}
				place={item.place}
				price={item.price}
				minimumPerson={item.minimumPerson}
				maximumPerson={item.maximumPerson}
				skillTag={item.skillTag}
				complete={item.complete}
				status={item.status}
				name={item.name}
				location={item.loaction}
				cost={item.cost}
				like={item.like}
			/>      
		)
	});

	useEffect(()=>{
		const filter = studys.filter((item)=>{
			const searchValue = item.title.toLowerCase().includes(search.toLowerCase());

			if (studyTab === 'open') {
				return !item.complete && searchValue;
			} else if (studyTab === 'close') {
				return item.complete && searchValue;
			}

			return searchValue;
		})
		setStudyCard(filter);
	}, [search, studyTab])

	const titleChange = (e)=>{
		setSearch(e.target.value)
	}

  return (
	<div className="study-wrap">
		<div className="search-box">
			<SearchBtn/>
			<input type="text" value={search} placeholder="원하는 스터디를 찾아보세요!" onChange={titleChange} className="search-box__input" />
		</div>
		<div className="studytab">
			<button className={'studytab-btn' + (studyTab === "all" ? " active" : "")} onClick={()=>{setStudyTab("all")}}>전체</button>
			<button className={'studytab-btn' + (studyTab === "open" ? " active" : "")} onClick={()=>{setStudyTab("open")}}>모집중</button>
			<button className={'studytab-btn' + (studyTab === "close" ? " active" : "")} onClick={()=>{setStudyTab("close")}}>완료</button>
		</div>
		{
			studyCard.length === 0 ? <SearchNotFound /> : studyList
		}
	</div>
  )
}

export default Study