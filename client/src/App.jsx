import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { HomeLayout, Error, Landing, Login, Profile, List } from './pages';
// import LoginSuccess from "./pages/LoginSuccess";
import { Header, Nav, HomeLayout, Splash, Error, Landing, Login, Profile, Join, JoinSetting, JoinSuccess, Id, IdSuccess, Pw, PwReset, PwSuccess, List, Detail, Creation } from "./pages";

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
        path: "/Splash",
        element: <Splash />,
      },
      {
        path: "/Mypage",
        element: [
          <>
            <Header title={"마이페이지"} />
            <Profile />
            <Nav />
          </>,
        ],
      },
      {
        path: "/Study",
        element: [
          <>
            <Header title={"스터디"} />
            <List />
            <Nav />
          </>,
        ],
      },
      {
        path: "/StudyDetail",
        element: [
          <>
            <Header title={"스터디 상세"} rightBtn />
            <Detail />
            <Nav />
          </>,
        ],
      },
      {
        path: "/ProjectDetail",
        element: [
          <>
            <Header title={"팀프로젝트 상세"} rightBtn />
            <Detail />
            <Nav />
          </>,
        ],
      },
      {
        path: "/StudyCreation",
        element: [
          <>
            <Header title={"스터디 생성"} />
            <Creation />
            <Nav />
          </>,
        ],
      },
      {
        path: "/ProjectCreation",
        element: [
          <>
            <Header title={"팀프로젝트 생성"} />
            <Creation />
            <Nav />
          </>,
        ],
      },
      {
        path: "/Login",
        element: [
          <>
            <Header title={"로그인"} />
            <Login />
            <Nav />
          </>,
        ],
      },
      {
        path: "/Join",
        element: [
          <>
            <Header title={"회원가입"} />
            <Join />
            <Nav />
          </>,
        ],
      },
      {
        path: "/Joinsetting",
        element: [
          <>
            <Header title={"회원가입"} />
            <JoinSetting />
            <Nav />
          </>,
        ],
      },
      {
        path: "/JoinSuccess",
        element: [
          <>
            <Header title={"회원가입 완료"} />
            <JoinSuccess />
            <Nav />
          </>,
        ],
      },
      {
        path: "/Id",
        element: [
          <>
            <Header title={"아이디 찾기"} />
            <Id />
            <Nav />
          </>,
        ],
      },
      {
        path: "/IdSuccess",
        element: [
          <>
            <Header title={"아이디 찾기 완료"} />
            <IdSuccess />
            <Nav />
          </>,
        ],
      },
      {
        path: "/Pw",
        element: [
          <>
            <Header title={"비밀번호 찾기"} />
            <Pw />
            <Nav />
          </>,
        ],
      },
      {
        path: "/Pwreset",
        element: [
          <>
            <Header title={"비밀번호 재설정"} />
            <PwReset />
            <Nav />
          </>,
        ],
      },
      {
        path: "/PwSuccess",
        element: [
          <>
            <Header title={"비밀번호 찾기 완료"} />
            <PwSuccess />
            <Nav />
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
