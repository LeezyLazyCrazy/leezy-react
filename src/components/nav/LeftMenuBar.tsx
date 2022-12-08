/* eslint-disable no-unused-vars */
import { Divider, IconButton, List, styled, Tab, Tabs, alpha } from '@mui/material';
import IconMenuItem from '../../modules/menu/IconMenuItem';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import BaseButton from '../button/BaseButton';
import Logo from '../../assets/logos/Logo';
import useMenuBarStore from '../../stores/useMenuBarStore';
import { useLocation } from 'react-router-dom';
import { theme } from '../../styles/theme';
import useThemeStore from '../../stores/useThemeStore';
import React, { useState } from 'react';
import TabPanel from '../tab/TabPanel';
import FavoritePagesBar from './FavoritePagesBar';
import { menuIcons } from '../../data/constants/menuIcons';
import { menu } from '../../data/constants/menu';
// import { useAuth } from '../../stores/useAuth';

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (e: React.SyntheticEvent, v: number) => void;
}

interface StyledTabProps {
  label: string;
}

/**
 * 화면 좌측의 URL을 핸들링하는 메뉴 바의 구성
 * @returns {JSX.Element} React Component
 */

function LeftMenuBar() {
  const { isBarOpen, setIsBarOpen } = useMenuBarStore();
  const { isDark } = useThemeStore();
  const location = useLocation();
  const rootRoute = location.pathname.split('/')[1];
  // const { authUser } = useAuth();

  const mainColor = theme(isDark).palette.primary.main;
  const mainBackColor = alpha(theme(isDark).palette.secondary.main, 0.2);
  const defaultColor = theme(isDark).palette.text.secondary;

  const highlightIcon = (routeName: string): string =>
    // 현재 route의 부모 path가 매칭하는 경우 아이콘 색을 primary색으로 바꿈
    rootRoute === routeName ? mainColor : defaultColor;
  const highlightBack = (routeName: string): string =>
    // 현재 route의 부모 path가 매칭하는 경우 메뉴 배경색을 point color로 바꿈
    rootRoute === routeName ? mainBackColor : 'none';

  // handling tabs
  const [tabValue, setTabValue] = useState(0);

  return (
    <Root>
      <Paper width={isBarOpen ? 210 : 90}>
        <div style={{ marginTop: '2%', textAlign: 'right' }}>
          <ShrinkBtn
            isshrinked={String(isBarOpen)}
            size="small"
            aria-label="expand-menu"
            onClick={() => {
              setIsBarOpen();
              setTabValue(0);
            }}
          >
            {isBarOpen ? (
              <ArrowBackIosIcon fontSize="small" color="secondary" />
            ) : (
              <ArrowForwardIosIcon fontSize="small" color="secondary" />
            )}
          </ShrinkBtn>
        </div>
        <div>
          {isBarOpen && (
            <StyledTabs
              sx={{ borderBottom: 1, borderColor: 'divider' }}
              value={tabValue}
              onChange={(e, v) => setTabValue(v)}
              aria-label="menu-tabs"
            >
              <StyledTab label="메뉴" />
              <StyledTab label="즐겨찾기" />
            </StyledTabs>
          )}

          <TabPanel value={tabValue} index={0}>
            <List component="nav" aria-labelledby="afcss-cop-main-menu">
              {menu.map((m) => (
                <IconMenuItem
                  key={m.id}
                  color={highlightIcon(m.id)}
                  background={highlightBack(m.id)}
                  open={isBarOpen}
                  closeOpenedMenu={!isBarOpen}
                  iconComponent={menuIcons.find((icon) => icon.title === m.id)?.icon}
                  name={m.name}
                  id={m.id}
                  subMenu={m.subMenu!}
                />
              ))}
            </List>
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            <FavoritePagesBar />
          </TabPanel>
        </div>
        <Divider />
        {isBarOpen && (
          <div
            style={{
              marginTop: 30,
              height: 60,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <BaseButton type="button" variant="text" title="기존 시스템 이동" />
            <Logo width={70} />
          </div>
        )}
      </Paper>
    </Root>
  );
}

export default LeftMenuBar;

// styles

const Root = styled('div')(({ theme }) => ({
  borderRight: `1px solid ${theme.palette.divider}`,
  // height: '99%',
  background: theme.palette.background.paper,
  '*::-webkit-scrollbar': {
    display: 'none',
  },
}));

const Paper = styled('div')(({ width }: { width: number }) => ({
  width,
  height: '100%',
  overflowY: 'scroll',
  transition: 'width ease-out 0.1s',
  paddingBottom: '80px',
}));

const ShrinkBtn = styled(IconButton)(({ isshrinked }: { isshrinked: string }) => ({
  '&:hover': {
    transform: isshrinked === 'false' ? 'translateX(+.3rem)' : 'translateX(-.3rem)',
    transition: 'all .2s ease-in-out',
  },
}));

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs {...props} TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }} />
))(({ theme }) => ({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 20,
    width: '100%',
    backgroundColor: theme.palette.secondary.main,
  },
}));

const StyledTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    variant: 'body1',
    color: theme.palette.text.secondary,
    '&.Mui-selected': {
      color: theme.palette.primary.main,
    },
  }),
);
