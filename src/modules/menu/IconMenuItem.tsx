import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useEffect, useState, ReactNode } from 'react';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CircleIcon from '@mui/icons-material/Circle';
import MenuIconWrapper from '../../components/icon/MenuIconWrapper';
import useMenuBarStore from '../../stores/useMenuBarStore';
import RouteStyleHandler from '../../routes/RouteStyleHandler';

interface IconMenuItemProps {
  open: boolean;
  iconComponent: ReactNode;
  closeOpenedMenu: boolean;
  id: string; // 영어아이디
  name: string; // 한글이름
  // 서브메뉴 중 왼쪽 사이드바에 표출되지 않는 페이지 설정
  subMenu: { id: string; name: string; show: boolean; subMenu?: { id: string; name: string }[] }[];
  color: string;
  background: string;
}

/**
 * components/nav/LeftMenuBar 내에서 개별 메뉴 항목들을 표기해주는 div임.
 *
 * @param { IconMenuItemProps}  IconMenuItemProps
 * @returns {JSX.Element} React Component(div)
 */
function IconMenuItem({
  open,
  iconComponent,
  closeOpenedMenu,
  id,
  subMenu,
  name,
  color,
  background,
}: IconMenuItemProps) {
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const { setIsBarOpen } = useMenuBarStore();

  useEffect(() => {
    setSubMenuOpen(false);
  }, [closeOpenedMenu]);

  return (
    <>
      <ListItemButton
        sx={{ paddingRight: 3, background }}
        onClick={() => open && setSubMenuOpen(!subMenuOpen)}
      >
        <ListItemIcon sx={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
          <MenuIconWrapper
            setOpen={() => {
              setIsBarOpen();
            }}
            open={open}
            color={color}
            iconComponent={iconComponent}
            title={name}
          />
          {open && (
            <>
              <ListItemText sx={{ padding: '0px 20px', color }} primary={name} />
              {subMenuOpen ? <ExpandLess /> : <ExpandMore />}
            </>
          )}
        </ListItemIcon>
      </ListItemButton>
      <Collapse in={subMenuOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {subMenu
            .filter((menu) => menu.show === true)
            .map((menu) => (
              <div key={menu.id}>
                <RouteStyleHandler to={`/${id}/${menu.id}`}>
                  <ListItemButton dense>
                    <CircleIcon sx={{ fontSize: '.5rem', margin: '0px 6px', opacity: 0.4 }} />
                    <ListItemText primary={menu.name} />
                  </ListItemButton>
                </RouteStyleHandler>
                {menu.subMenu?.map((submenu) => (
                  <RouteStyleHandler key={submenu.id} to={`${id}/${menu.id}/${submenu.id}`}>
                    <ListItemButton dense>
                      <CircleIcon sx={{ fontSize: '.5rem', margin: '0px 16px', opacity: 0.2 }} />
                      <ListItemText primary={submenu.name} />
                    </ListItemButton>
                  </RouteStyleHandler>
                ))}
              </div>
            ))}
        </List>
      </Collapse>
    </>
  );
}

export default IconMenuItem;
