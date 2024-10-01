import { useEffect, useState } from 'react';
import { redirect, useLoaderData, useNavigate } from 'react-router-dom';

// api
import customFetch from "../utils/customFetch.js";

import SearchBtn from '../components/common/header/component/SearchBtn.jsx';

import StudyCard from '../components/common/studycard/CommonStudyCard';
import SearchNotFound from '../components/common/studycard/SearchNotFound';
import { compareSync } from 'bcryptjs';
import MenuButtons from '../components/common/studycard/MenuButtons';
import Total from '../components/common/studycard/Total';

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

	const [item, setItems] = useState(studys);
	const menuItems = [...new Set(studys.map((item)=>{ return item.price}))]

	const filterItems = () => {
		const newItems = studys.filter((item)=> item.complete === true)
		setItems(newItems)
	}
	const filterItems2 = () => {
		const newItems = studys.filter((item)=> item.complete === false)
		setItems(newItems)
	}

	const [search, setSearch] = useState('');

	useEffect(()=>{
		const filter = studys.filter((item)=>{
		  return item.title.toLowerCase().includes(search.toLowerCase())
		})
		setItems(filter);
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
		<MenuButtons 
			menuItems={menuItems}
			filterItems={filterItems}
			filterItems2={filterItems2}
			setItems={setItems}
		/>
		<div className="study-header">
			<div className="study-header__length">
				<span className="study-header__length--desc">전체 </span>
				<Total item={item}/>
				<span className="study-header__length--desc">개</span>
			</div>
		</div>
		
		{item.length === 0 ? <SearchNotFound /> : <StudyCard item={item}/>}
	</div>
  )
}

export default Study