import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import Logo from '../../assets/logos/Logo';
import ToggleDarkMode from '../mode/ToggleDarkMode';
import { useAuth } from '../../stores/useAuth';
import TopNavProfile from '../../modules/menu/TopNavProfile';
import ModeCodeToggle from '../../modules/menu/ModeCodeToggle';
import { Link } from 'react-router-dom';

/**
 * 하면 최상단의 툴바로, 로고, 현재 유저 정보, 라이트모드/다크모드 등을 포함함
 * @returns {JSX.Element} React Component
 */

const TopNav = () => {
  const { authUser } = useAuth();

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        sx={{
          boxShadow: 0,
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          //background: (theme) => theme.palette.background.paper,
          // background: '##18b809dc',
          background: `${authUser?.theme.background}`,
        }}
        position='static'
        // color="transparent"
      >
        <Toolbar>
          <Link to='/index'>
            <Logo hasIcon />
          </Link>
          <Typography
            variant='h5'
            component='div'
            sx={{
              flexGrow: 1,
              ml: 3,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Righteous',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              //textDecoration: 'none',
            }}
          >
            NCE-MS SYSTEM
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <TopNavProfile title={`${authUser?.name} ${authUser?.position}님`} />
          <ModeCodeToggle />
          <ToggleDarkMode />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopNav;
