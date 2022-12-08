/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Typography } from '@mui/material';

interface MenuIconWrapperProps {
  open: boolean;
  setOpen: () => void;
  iconComponent: React.ReactNode;
  title: string;
  color: string | undefined;
}

/**
 * Navigation 또는 전체 URL을 핸들링하는 Menu에서 사용되는 Icon 및 제목을 핸들링하는 컴포넌트
 *
 * 상기 용도 외에도 아이콘을 띄우고 그 아래에 관련 제목을 적는 형태로 사용할 수 있겠음.
 * @param { MenuIconWrapperProps } MenuIconWrapperProps
 * @returns {JSX.Element} React Component
 */

function MenuIconWrapper({ open, setOpen, title, iconComponent, color }: MenuIconWrapperProps) {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div style={{ textAlign: 'center', color }} onClick={setOpen}>
      {iconComponent}
      {!open && <Typography variant="subtitle2">{title}</Typography>}
    </div>
  );
}

export default MenuIconWrapper;
