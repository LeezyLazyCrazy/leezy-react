import { styled, TableRow, TableCell, TableBody, Divider } from '@mui/material';
import WidgetTitleBox from '../../components/box/textBox/WidgetTitleBox';
import SimpleTable from '../../components/dataGrid/simpleTable/SimpleTable';
import { SimpleTableCellText } from '../../components/dataGrid/simpleTable/SimpleTableCellDisplay';
// import DefaultBox from '../../components/box/DefaultBox';
// import StatusBox from './StatusBox';
// import DefaultBox from '../../components/box/DefaultBox';

// import BaseDataGrid from '../../components/dataGrid/BaseDataGrid';
// import { OptColumn } from 'tui-grid/types/options';

// const dataGridKeys: OptColumn[] = [
//   {
//     name: 'equipmentCertiNo',
//     header: '순번',
//     minWidth: 5,
//     sortable: true,
//     editor: {
//       type: 'text',
//     },
//   },
//   {
//     name: 'equipmentLevel',
//     header: '등급',
//     minWidth: 5,
//     sortable: true,
//     editor: {
//       type: 'text',
//     },
//   },
//   {
//     name: 'modeApprovalName',
//     header: '형식승인명칭',
//     minWidth: 10,
//     sortable: true,
//     editor: {
//       type: 'text',
//     },
//   },
//   {
//     name: 'equipmentId',
//     header: '일련번호',
//     minWidth: 5,
//     sortable: true,
//     editor: {
//       type: 'text',
//     },
//   },
//   {
//     name: 'equipmentCount',
//     header: '수량',
//     minWidth: 5,
//     sortable: true,
//     editor: {
//       type: 'text',
//     },
//   },
//   {
//     name: 'equipmentRemarks',
//     header: '비고',
//     minWidth: 5,
//     sortable: true,
//     editor: {
//       type: 'text',
//     },
//   },
// ];

// Widget에서 현재 전체 상황을 보여주는 블록

/**
 * 화면 맨 오른쪽의 아이콘으로 구성된 Vertical Tab 내의 테이블을 쌀 Wrapper 형태의 Div로 상태바를 구현한 예시임
 * @returns {JSX.Element} React Component
 *
 */

function WarningTab() {
  const data = [
    {
      name: 'NEU-14',
      equipmentId: '001',
    },
    {
      name: 'NEU-14',
      equipmentId: '002',
    },
    {
      name: 'NEU-14',
      equipmentId: '003',
    },
    {
      name: 'NEU-14',
      equipmentId: '004',
    },
    {
      name: 'NEU-14',
      equipmentId: '005',
    },
    {
      name: 'NEU-14',
      equipmentId: '006',
    },
    {
      name: 'NEU-14',
      equipmentId: '007',
    },
    {
      name: 'NEU-14',
      equipmentId: '008',
    },
    {
      name: 'NEU-14',
      equipmentId: '009',
    },
    {
      name: 'NEU-14',
      equipmentId: '010',
    },
    {
      name: 'NEU-14',
      equipmentId: '011',
    },
    {
      name: 'NEU-14',
      equipmentId: '012',
    },
    {
      name: 'NEU-14',
      equipmentId: '013',
    },
    {
      name: 'NEU-14',
      equipmentId: '014',
    },
    {
      name: 'NEU-14',
      equipmentId: '015',
    },
    {
      name: 'USE-20',
      equipmentId: '001',
    },
    {
      name: 'USE-20',
      equipmentId: '002',
    },
  ];
  return (
    <Root>
      <WidgetTitleBox title="암호 장비 증명서" />
      <TableBody>
        <TableRow>
          <TableCell>장비 증명서 발행 기관</TableCell>
          <TableCell>A1</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>암호 장비 증명서 번호</TableCell>
          <TableCell>14-275</TableCell>
        </TableRow>
      </TableBody>
      <Divider sx={{ marginBottom: 1 }} />
      {/* <DefaultBox isBackgroundPaper={false}>List</DefaultBox> */}
      <SimpleTable head={['형식승인명', '장비등록번호']}>
        {data.map((d) => (
          <TableRow key={d.name}>
            <SimpleTableCellText text={d.name} />
            <SimpleTableCellText text={d.equipmentId} />
          </TableRow>
        ))}
      </SimpleTable>
    </Root>
  );
}

export default WarningTab;

const Root = styled('div')(() => ({
  padding: 5,
}));
