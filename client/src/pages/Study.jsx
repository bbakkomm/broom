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
	const currentUserId = loadData[1].data.user._id;
	// const isLikes = studys.map(v => v.like.includes(currentUserId));

	const [studyCard, setStudyCard] = useState(studys);
	const [search, setSearch] = useState('');

	const studyList = studyCard.map((item, idx)=>{
		return (
			<StudyCard 
				studyType={'all'}
				key={`study_${idx}`}
				objId={item._id}
				idx={idx}
				title={item.title}
				thumb={item.thumb.path}
				startDate={item.startDate}
				endDate={item.endDate}
				time={item.time}
				place={item.place}
				price={item.price}
				minimumPerson={item.minimumPerson}
				maximumPerson={item.maximumPerson}
				skillTag={item.skillTag}
				complete={item.complete}
				imgSrc={item.thumb.path}
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
		  return item.title.toLowerCase().includes(search.toLowerCase())
		})
		setStudyCard(filter);
	  }, [search])

	  const titleChange = (e)=>{
		setSearch(e.target.value)
	  }
  
  return (
	<div className="study-wrap">
		<div className="search-box">
			<SearchBtn/>
			<input type="text" value={search} placeholder="원하는 스터디를 찾아보세요!" onChange={titleChange} className="search-box__input" />
		</div>
		{
			studyCard.length === 0 ? <SearchNotFound /> : studyList
		}
	</div>
  )
}

export default Study