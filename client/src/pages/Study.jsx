import { useEffect, useState } from 'react';
import { redirect, useLoaderData, useNavigate } from 'react-router-dom';

// api
import customFetch from "../utils/customFetch.js";

import StudyCard from '../components/common/studycard/CommonStudyCard';

export const loader = async ({ req }) => {
	try {
	  const tp = await customFetch.get('/users/current-user', req);
	  const res = await customFetch.get('/study', req);
	  return res.data;
	} catch (error) {
	  console.log(error);
	  return redirect('/login');
	}
}

function Study() {

	const loadData = useLoaderData();
	const { studys } = loadData;
	console.log(studys);
	const domain = [window.location.protocol, window.location.host].join('//') + '/';

	const [studyCard, setStudyCard] = useState(studys);
	const [search, setSearch] = useState('');

	const studyList = studyCard.map((item, idx)=>{
		return (
			<StudyCard 
				key={`study_${idx}`}
				objId={item._id}
				idx={idx}
				title={item.title}
				thumb={item.thumb.path}
				date={item.startDate}
				time={item.time}
				place={item.place}
				price={item.price}
				minimumPerson={item.minimumPerson}
				maximumPerson={item.maximumPerson}
				skillTag={item.skillTag}
				complate={item.complate}
				imgSrc={domain + item.thumb.path}
				status={item.status}
				name={item.name}
				location={item.loaction}
				cost={item.cost}
				participants={item.participants}
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
			<input type="text" value={search} placeholder="검색어를 입력하세요" onChange={titleChange} className="search-box__input" />
		</div>
		{studyList}
	</div>
  )
}

export default Study