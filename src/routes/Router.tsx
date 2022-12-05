import { Route, Routes } from 'react-router-dom';
import BaseLayout from '../components/layout/BaseLayout';
import LandingLayout from '../components/layout/LandingLayout';
import { menu } from '../data/constants/menu';
import Login from '../pages/auth/Login';
import Landing from '../pages/Landing';
import Main from '../pages/Main';
import MyPage from '../pages/myPage/myPage';
import NotFound from '../pages/NotFound';
import Unauthorized from '../pages/Unauthorized';
import RequireAuth from './RequireAuth';

function Router() {
  return (
    <Routes>
      {/* public route - no auth required */}
      <Route path="/" element={<LandingLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/auth/login" element={<Login />} />
      </Route>
      {/* protected route - require auth and specific pageIds */}
      <Route element={<RequireAuth allowedGroups={['test1']} />}>
        <Route element={<BaseLayout />}>
          <Route path="/index" element={<Main />} />
          {menu.map((route) =>
            route.subMenu?.map((subRoute) => (
              <Route
                key={subRoute.id}
                path={`/${route.id}/${subRoute.id}`}
                element={<subRoute.element />}
              />
            )),
          )}
          <Route path="/mypage" element={<MyPage />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
