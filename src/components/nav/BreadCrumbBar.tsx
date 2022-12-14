import { Breadcrumbs, Link, LinkProps, styled, Typography } from '@mui/material';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import AddToFavoritePage from '../../modules/menu/AddToFavoritePage';
import { flattenedMenu } from './FlattenedMenu';

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}

function LinkRouter(props: LinkRouterProps) {
  return <Link {...props} component={RouterLink as any} />;
}

/**
 * BreadCrumb 즉, 홈 > 서비스 > 서비스 와 같이 사이트의 이동 경로를 표기하는 모듈
 *
 * data/constants/menu.ts 의 항목을 작성하면 알아서 수정이 되니 별도로 해당 컴포넌트를 수정하지 않으셔도 됩니다
 * @returns {JSX.Element} React Component
 */

function BreadCrumbBar() {
  const location = useLocation();
  const splitedRoute = location.pathname.split('/').slice(1);
  const routeNameInKorean = splitedRoute.map(
    (route) => flattenedMenu().find((menu) => menu.path === route)?.korean,
  );
  const finalRouteInKorean = routeNameInKorean[routeNameInKorean.length - 1] || '';
  const isNotMainPage = splitedRoute[0] !== 'index';

  return (
    <Root>
      <Typography variant="body1" sx={{ fontWeight: 600 }}>
        {finalRouteInKorean}
      </Typography>
      <RightWrapper>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
          <LinkRouter underline="hover" color="inherit" to="/index">
            메인화면
          </LinkRouter>
          {isNotMainPage &&
            routeNameInKorean.map((route) => (
              <Typography key={route} color="inherit">
                {route}
              </Typography>
            ))}
        </Breadcrumbs>
        <AddToFavoritePage
          location={location.pathname}
          koreanName={finalRouteInKorean}
          isNotMainPage={isNotMainPage}
        />
      </RightWrapper>
    </Root>
  );
}

export default BreadCrumbBar;

// styles

const Root = styled('div')(() => ({
  padding: '8px 20px',
  marginBottom: '20px',
  // background: theme.palette.background.paper,
  // background: "#19950e9e",
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  borderBottom: `2px solid #18c9089e`,
}));

const RightWrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
}));
