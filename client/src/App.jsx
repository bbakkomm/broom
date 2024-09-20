import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { HomeLayout, Error, Landing, Login, Profile, List } from './pages';
// import LoginSuccess from "./pages/LoginSuccess";
import { Header, Nav, Splash, Error, Landing, Login, Profile, Join, JoinSetting, JoinSuccess, Id, IdSuccess, Pw, PwReset, PwSuccess, List, Detail, Creation } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/Landing",
        element: <Landing />,
      },
      {
        path: "/splash",
        element: <Splash />,
      },
      {
        path: "/mypage",
        element: [
          <>
            <Header title={"마이페이지"} />
            <Profile />
            <Nav />
          </>,
        ],
      },
      {
        path: "/study",
        element: [
          <>
            <Header title={"스터디"} />
            <List />
            <Nav />
          </>,
        ],
      },
      {
        path: "/study/studycreation",
        element: [
          <>
            <Header title={"스터디"} />
            <Creation study/>
            <Nav />
          </>,
        ],
      },
      {
        path: "/study/studydetail",
        element: [
          <>
            <Header title={"스터디 상세"} rightBtn />
            <Detail />
            <Nav />
          </>,
        ],
      },
      {
        path: "/study/studydetail/user",
        element: [
          <>
            <Header title={"스터디 상세"} rightBtn user study/>
            <Detail user/>
            <Nav />
          </>,
        ],
      },
      {
        path: "/project",
        element: [
          <>
            <Header title={"팀프로젝트"} />
            <List />
            <Nav />
          </>,
        ],
      },
      {
        path: "/project/projectcreation",
        element: [
          <>
            <Header title={"팀프로젝트"} />
            <Creation />
            <Nav />
          </>,
        ],
      },
      {
        path: "/project/projectdetail",
        element: [
          <>
            <Header title={"팀프로젝트 상세"} rightBtn  />
            <Detail />
            <Nav />
          </>,
        ],
      },
      {
        path: "/project/projectdetail/user",
        element: [
          <>
            <Header title={"팀프로젝트 상세"} rightBtn user />
            <Detail user />
            <Nav />
          </>,
        ],
      },
      {
        path: "/login",
        element: [
          <>
            <Header title={"로그인"} />
            <Login />
          </>,
        ],
      },
      {
        path: "/join",
        element: [
          <>
            <Header title={"회원가입"} />
            <Join />
          </>,
        ],
      },
      {
        path: "/joinsetting",
        element: [
          <>
            <Header title={"회원가입"} />
            <JoinSetting />
          </>,
        ],
      },
      {
        path: "/joinsuccess",
        element: [
          <>
            <Header title={"회원가입 완료"} />
            <JoinSuccess />
          </>,
        ],
      },
      {
        path: "/id",
        element: [
          <>
            <Header title={"아이디 찾기"} />
            <Id />
          </>,
        ],
      },
      {
        path: "/idsuccess",
        element: [
          <>
            <Header title={"아이디 찾기 완료"} />
            <IdSuccess />
          </>,
        ],
      },
      {
        path: "/pw",
        element: [
          <>
            <Header title={"비밀번호 찾기"} />
            <Pw />
          </>,
        ],
      },
      {
        path: "/pwreset",
        element: [
          <>
            <Header title={"비밀번호 재설정"} />
            <PwReset />
          </>,
        ],
      },
      {
        path: "/pwsuccess",
        element: [
          <>
            <Header title={"비밀번호 찾기 완료"} />
            <PwSuccess />
          </>,
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
