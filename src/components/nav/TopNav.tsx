import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logos/Logo';
import ToggleDarkMode from '../mode/ToggleDarkMode';
import { useAuth } from '../../stores/useAuth';
import TopNavProfile from '../../modules/menu/TopNavProfile';
import SearchFiled from '../search/SearchFiled';
// import ModeCodeToggle from '../../modules/menu/ModeCodeToggle';

/**
 * 하면 최상단의 툴바로, 로고, 현재 유저 정보, 라이트모드/다크모드 등을 포함함
 * @returns {JSX.Element} React Component
 */

function TopNav() {
  const { authUser } = useAuth();

  return (
    <AppBar
      sx={{
        boxShadow: '0 3px 8px rgba(0, 0, 0, 0.08)',
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        // borderBottom: '1px solid',
        // borderBottomColor: alpha(`${authUser?.theme.main}`, 0.9),
        background: (theme) => theme.palette.background.paper,
        // background: alpha(`${authUser?.theme.main}`, 1),
        zIndex: 10,
        color: (theme) => theme.palette.primary.main,
      }}
      position="static"
      // color="transparent"
    >
      <Toolbar>
        <Link to="/index">
          <Logo hasIcon />
        </Link>
        <Typography
          variant="h5"
          component="div"
          sx={{
            flexGrow: 1,
            ml: 3,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'Righteous',
            fontWeight: 700,
            letterSpacing: '.2rem',
            color: 'inherit',
            // textDecoration: 'none',
          }}
        >
          SYSTEM
        </Typography>
        {/* <Box sx={{ flexGrow: 1 }} /> */}
        <SearchFiled />
        {/* <Box sx={{ flexGrow: 10 }} /> */}
        <TopNavProfile title={`${authUser?.name} ${authUser?.position}님`} />
        {/*  <ModeCodeToggle /> */}
        <ToggleDarkMode />
      </Toolbar>
    </AppBar>
  );
}

export default TopNav;
