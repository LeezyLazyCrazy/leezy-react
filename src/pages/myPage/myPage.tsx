import '@toast-ui/editor/dist/toastui-editor.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import SimpleTable from '../../components/dataGrid/simpleTable/SimpleTable';
import { TableRow } from '@mui/material';
import {
  SimpleTableBackgroundColorCell,
  SimpleTableCellText,
} from '../../components/dataGrid/simpleTable/SimpleTableCellDisplay';
import WidgetTitleBox from '../../components/box/textBox/WidgetTitleBox';
// import StatusChip from '../../components/chip/StatusChip';
import { useAuth } from '../../stores/useAuth';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import CustomTable from '../../components/dataGrid/simpleTable/CustomTable';

export interface MypageProps {
  id: string;
  name: string;
  parentUrl: string;
  type: 'dir' | 'page';
  element?: any;
  subMenu?: MypageProps[];
}

export const my: MypageProps[] = [
  {
    name: '마이페이지',
    id: 'mypage',
    parentUrl: '',
    type: 'dir',
  },
];

const data = [
  {
    name: 'NEU-14',
    equipmentId: '001',
    SeverityType: 'done',
  },
  {
    name: 'NEU-14',
    equipmentId: '002',
    SeverityType: 'done',
  },
  {
    name: 'NEU-14',
    equipmentId: '003',
    SeverityType: 'done',
  },
  {
    name: 'NEU-14',
    equipmentId: '004',
    SeverityType: 'inProgress',
  },
];

const columns: GridColDef[] = [
  { field: '메뉴명', headerName: '메뉴명', width: 150 },
  { field: '서브메뉴명', headerName: '서브메뉴명', width: 150 },
  { field: '등록글수', headerName: '등록글 수', width: 180 },
  { field: '최종등록일', headerName: '최종 등록일', width: 180 },
];

const rows = [
  {
    id: 1,
    메뉴명: '자재관리',
    서브메뉴명: '자재관리기록부',
    등록글수: '3',
  },
  {
    id: 2,
    메뉴명: '개발관리',
    서브메뉴명: '개발이력관리',
    등록글수: '1',
  },
];

function testF(test: string) {
  let test2 = test;

  if (test === '') {
    test2 = '입력된 값이 없습니다.';
  }
  if (Array.isArray(test2)) {
    // return Object.values(test2).map((value) => <SimpleTableCellText text={value} />);
    return <SimpleTableCellText text={test2.toString()} />;
  }
  if (test.length === undefined) {
    // return Object.values(test2).map((value) => <SimpleTableCellText text={value} />);

    return <SimpleTableCellText text={Object.values(test2).toString()} />;
  }
  return <SimpleTableCellText text={test2} />;
}

function MyPage() {
  const authUser = useAuth();
  const info = Object(authUser.authUser);

  const myInfo: { title: string; info: any }[] = [];

  Object.keys(info).forEach((key) => {
    myInfo.push({
      title: key,
      info: info[key],
    });
  });

  return (
    <div>
      <WidgetTitleBox title={`${authUser!.authUser!.name}님 마이페이지`} />
      <CustomTable>
        {myInfo.map((d) => (
          <TableRow>
            <SimpleTableCellText text={d.title} />
            {/* {Object.keys(d.info).length > 1 ? (
              Object.keys(d.info).map((key) => <SimpleTableCellText text={key} />)
            ) : (
              <SimpleTableCellText text={d.info} />
            )} */}
            {testF(d.info)}
          </TableRow>
        ))}
      </CustomTable>
      <WidgetTitleBox title="보고 현황" />
      <SimpleTable head={['보고명', '보고일자', '진행상황']}>
        {data.map((d) => (
          <TableRow key={d.name}>
            <SimpleTableCellText text={d.name} />
            <SimpleTableCellText text={d.equipmentId} />
            <SimpleTableBackgroundColorCell text="완료" color="G" />
          </TableRow>
        ))}
      </SimpleTable>
      <WidgetTitleBox title="등록글 현황" />
      <div style={{ height: 250, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  );
}

export default MyPage;
