import { Outlet, Link } from "react-router-dom"

const HomeLayout = () => {
  return (
    <div>
      {/* <nav>navber</nav> */}
      <ul className="nav">
        <li><Link to="/">Home으로 가기</Link></li>
        <li><Link to="/Landing">Landing으로 가기</Link></li>
        <li><Link to="/Login">Login으로 가기</Link></li>
        <li><Link to="/Profile">Profile으로 가기</Link></li>
      </ul>
      <Outlet/>
    </div>
  )
}
export default HomeLayout