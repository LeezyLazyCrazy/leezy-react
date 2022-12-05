import '@toast-ui/editor/dist/toastui-editor.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';

export interface MenuProps {
  id: string;
  name: string;
  parentUrl: string;
  type: 'dir' | 'page';
  element?: any;
  subMenu?: MenuProps[];
}

export const my: MenuProps[] = [
  {
    name: '마이페이지',
    id: 'mypage',
    parentUrl: '',
    type: 'dir',
  },
];

function MyPage() {
  return <div>마이 페이지</div>;
}

export default MyPage;
