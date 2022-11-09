// MENU ICON
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import SurfingOutlinedIcon from '@mui/icons-material/SurfingOutlined';
import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';
import AndroidOutlinedIcon from '@mui/icons-material/AndroidOutlined';
import DirectionsRunOutlinedIcon from '@mui/icons-material/DirectionsRunOutlined';

// Icon matching을 위해선 tsx 타입이 필요한 바,
// menu list에서 대응되는 icon을 현재 파일에서 로드함.
// 대 메뉴가 추가될 경우 icon 설정이 필요함.

export const menuIcons = [
  {
    title: 'mui',
    icon: <AutoAwesomeOutlinedIcon />,
  },
  {
    title: 'toast-ui',
    icon: <SurfingOutlinedIcon />,
  },
  {
    title: 'framer',
    icon: <AddReactionOutlinedIcon />,
  },
  {
    title: 'react-query',
    icon: <AndroidOutlinedIcon />,
  },
  {
    title: 'zustand',
    icon: <DirectionsRunOutlinedIcon />,
  },
];
