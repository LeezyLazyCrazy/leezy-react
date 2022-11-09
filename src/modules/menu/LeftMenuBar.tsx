import { Divider, IconButton, List, styled, Tab, Tabs } from "@mui/material";
import IconMenuItem from "./IconMenuItem";
import { menu } from "../../data/constants/menuFrame";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import BaseButton from "../../components/button/BaseButton";
import Logo from "../../assets/logos/Logo";
import useMenuBarStore from "../../stores/useMenuBarStore";
import { useLocation } from "react-router-dom";
import { theme } from "../../styles/theme";
import useThemeStore from "../../stores/useThemeStore";
import { useState } from "react";
import TabPanel from "../../components/tab/TabPanel";
import FavoritePagesBar from "../../components/nav/FavoritePagesBar";

import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import AppRegistrationOutlinedIcon from "@mui/icons-material/AppRegistrationOutlined";
import DeviceHubOutlinedIcon from "@mui/icons-material/DeviceHubOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import TopicOutlinedIcon from "@mui/icons-material/TopicOutlined";
import QrCodeOutlinedIcon from "@mui/icons-material/QrCodeOutlined";

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
  const rootRoute = location.pathname.split("/")[1];
  const mainColor = theme(isDark).palette.primary.main;

  const highlightIcon = (routeName: string): string =>
    // 현재 route의 부모 path가 매칭하는 경우 아이콘 색을 primary색으로 바꿈
    rootRoute === routeName ? mainColor : "";
  // Icon matching을 위해선 tsx 타입이 필요한 바,
  // menu list에서 대응되는 icon을 현재 파일에서 로드함.
  // 대 메뉴가 추가될 경우 icon 설정이 필요함.

  const menuIcons = [
    {
      title: "equipments",
      icon: <DevicesOutlinedIcon />,
    },
    {
      title: "terminal",
      icon: <AppRegistrationOutlinedIcon />,
    },
    {
      title: "materials",
      icon: <DeviceHubOutlinedIcon />,
    },
    {
      title: "approval",
      icon: <HowToRegOutlinedIcon />,
    },
    {
      title: "development",
      icon: <ViewInArOutlinedIcon />,
    },
    {
      title: "manufactory",
      icon: <ApartmentOutlinedIcon />,
    },
    {
      title: "agency",
      icon: <TopicOutlinedIcon />,
    },
    {
      title: "system",
      icon: <QrCodeOutlinedIcon />,
    },
  ];

  // handling tabs

  const [tabValue, setTabValue] = useState(0);

  return (
    <Root>
      <Paper width={isBarOpen ? 210 : 90}>
        <div style={{ marginTop: "2%", textAlign: "right" }}>
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
            <Tabs
              sx={{ borderBottom: 1, borderColor: "divider" }}
              value={tabValue}
              onChange={(e, v) => setTabValue(v)}
              aria-label="menu-tabs"
            >
              <StyledTab label="메뉴" />
              <StyledTab label="즐겨찾기" />
            </Tabs>
          )}

          <TabPanel value={tabValue} index={0}>
            <List component="nav" aria-labelledby="afcss-cop-main-menu">
              {menu.map((m) => (
                <IconMenuItem
                  key={m.id}
                  color={highlightIcon(m.id)}
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
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
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

const Root = styled("div")(({ theme }) => ({
  borderRight: `1px solid ${theme.palette.divider}`,
  height: "99%",
  background: theme.palette.background.paper,
  "*::-webkit-scrollbar": {
    display: "none",
  },
}));

const Paper = styled("div")(({ width }: { width: number }) => ({
  width,
  height: "97vh",
  overflowY: "scroll",
  transition: "width ease-out 0.1s",
  paddingBottom: "80px",
}));

const ShrinkBtn = styled(IconButton)(({ isshrinked }: { isshrinked: string }) => ({
  "&:hover": {
    transform: isshrinked === "false" ? "translateX(+.3rem)" : "translateX(-.3rem)",
    transition: "all .2s ease-in-out",
  },
}));

const StyledTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    color: theme.palette.text.secondary,
    borderBottom: "1px solid white",
    variant: "body1",
  }),
);
