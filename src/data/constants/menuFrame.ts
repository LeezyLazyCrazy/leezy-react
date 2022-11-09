/**
 * 화면 좌측의 개별 메뉴를 구성하는 인터페이스
 */

// import { ReactElement } from "react";
// import Main from "../../pages/Main";

import PageComponents from '../../pages/mui/components';
import PageIcon from '../../pages/mui/icons';
import PageToastGrid from '../../pages/toast-ui/toast-grid';
import PageReactQuery from '../../pages/react-query/react-query';
import PageZustand from '../../pages/zustand/zustand';
import PageFramerAnimation from '../../pages/framer/framer-animation';
import PageTab from '../../pages/mui/smart-tab';
import PageMuiGrid from '../../pages/toast-ui/mui-table';
import PageMuiSimple from '../../pages/toast-ui/mui-simple';
import PageMuiGrid2 from '../../pages/toast-ui/mui-grid2';

export interface MenuProps {
  id: string;
  name: string;
  parentUrl: string;
  type: 'dir' | 'page';
  element?: any;
  subMenu?: MenuProps[];
}

/**
 * 화면 좌측의 메뉴를 구성하기 위하여 URL을 갖는 개별 메뉴 Object들을 배치한 배열
 */

export const menu: MenuProps[] = [
  // Example Page
  {
    name: 'Material Design',
    id: 'mui',
    parentUrl: '',
    type: 'dir',
    subMenu: [
      {
        id: 'icons',
        name: 'Material Icon',
        type: 'page',
        parentUrl: 'mui',
        element: PageIcon,
      },
      {
        id: 'components',
        name: 'Components',
        type: 'page',
        parentUrl: 'mui',
        element: PageComponents,
      },
      {
        id: 'smart-tab',
        name: 'Tabs',
        type: 'page',
        parentUrl: 'smart-tab',
        element: PageTab,
      },
    ],
  },
  {
    name: 'Toast UI',
    id: 'toast-ui',
    type: 'dir',
    parentUrl: '',
    subMenu: [
      {
        id: 'toast-grid',
        name: 'Toast Grid',
        type: 'page',
        parentUrl: 'toast-ui',
        element: PageToastGrid,
      },
      {
        id: 'mui-grid',
        name: 'Mui Grid',
        type: 'page',
        parentUrl: 'toast-ui',
        element: PageMuiGrid,
      },
      {
        id: 'mui-grid2',
        name: 'Mui Grid2',
        type: 'page',
        parentUrl: 'toast-ui',
        element: PageMuiGrid2,
      },
      {
        id: 'mui-simple',
        name: 'Mui Simple',
        type: 'page',
        parentUrl: 'toast-ui',
        element: PageMuiSimple,
      },
    ],
  },
  {
    name: 'React-query',
    id: 'react-query',
    type: 'dir',
    parentUrl: '',
    subMenu: [
      {
        id: 'react-query',
        name: 'React-query',
        type: 'page',
        parentUrl: 'react-query',
        element: PageReactQuery,
      },
    ],
  },
  {
    name: 'Zustand',
    id: 'zustand',
    type: 'dir',
    parentUrl: '',
    subMenu: [
      {
        id: 'zustand',
        name: 'Zustand',
        type: 'page',
        parentUrl: 'zustand',
        element: PageZustand,
      },
    ],
  },
  {
    name: 'Framer animation',
    id: 'framer',
    type: 'dir',
    parentUrl: '',
    subMenu: [
      {
        id: 'framer-animation',
        name: 'Framer animation',
        type: 'page',
        parentUrl: 'framer animation',
        element: PageFramerAnimation,
      },
    ],
  },
];
