import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// import { HomeLayout, Error, Landing, Login, Profile, List } from './pages';
// import LoginSuccess from "./pages/LoginSuccess";
import Header from "./components/common/header/CommonHeader"
import Nav from "./components/common/navigation/CommonNav"

import { 
  HomeLayout, Splash, Error, 
  Login, Profile, ProfileEdit, List, Detail, Creation, 
  Join, JoinSetting, JoinSuccess, 
  Id, IdSuccess, 
  Pw, PwReset, PwSuccess, 
} from "./pages";

import { loader as profileLoader } from './pages/profile/Profile';
import { loader as studyLoader } from './pages/List';

import { action as loginAction } from './pages/register/Login';
import { action as registerAction } from './pages/register/Join';
import { action as idSearch } from './pages/register/Id';
import { action as pwSearch } from './pages/register/Pw';
import { action as pwReset } from './pages/register/PwReset';
import { action as creation } from './pages/list/Creation';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: [
          <>
            {/* <Header title={"로그인"} /> */}
            <Login />
          </>,
        ],
        action: loginAction
      },
      {
        path: "/splash",
        element: <Splash />,
      },
      {
        path: "/profile",
        element: [
          <>
            <Header title={"마이페이지"} />
            <Profile />
            <Nav />
          </>,
        ],
        loader: profileLoader
      },
      {
        path: "/profileedit",
        element: [
          <>
            <Header title={"내 프로필"} />
            <ProfileEdit />
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
        loader: studyLoader
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
        action: creation
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
        action: registerAction,
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
        action: idSearch,
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
        action: pwSearch
      },
      {
        path: "/pwreset",
        element: [
          <>
            <Header title={"비밀번호 재설정"} />
            <PwReset />
          </>,
        ],
        action: pwReset
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
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
};
export default App;
