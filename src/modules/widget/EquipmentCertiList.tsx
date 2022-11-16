// import { Divider, styled } from '@mui/material';
import { styled } from '@mui/material';
// import DefaultBox from '../../components/box/DefaultBox';
import WidgetTitleBox from '../../components/box/textBox/WidgetTitleBox';
// import StatusBox from './StatusBox';
import BaseDataGrid from '../../components/dataGrid/BaseDataGrid';
import { OptColumn } from 'tui-grid/types/options';

const dataGridKeys: OptColumn[] = [
  {
    name: 'equipmentCertiAgency',
    header: '장비증명서발행기관',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'equipmentCertiId',
    header: '장비증명서번호',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'equipmentCertiNo',
    header: '암호증명서순번',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'datePicker',
      options: {
        language: 'ko',
        format: 'yyyy-MM-dd',
      },
    },
  },
  {
    name: 'equipmentLevel',
    header: '암호장비등급',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'modeApprovalName',
    header: '형식승인명칭',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'equipmentId',
    header: '장비등록번호',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'equipmentCount',
    header: '암호장비수량',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'equipmentRemarks',
    header: '비고',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
];

// Widget에서 현재 전체 상황을 보여주는 블록
/**
 * 화면 맨 오른쪽의 아이콘으로 구성된 Vertical Tab 내의 테이블을 쌀 Wrapper 형태의 Div로 상태바를 구현한 예시임
 * @returns {JSX.Element} React Component
 *
 */
function WarningTab() {
  return (
    <Root>
      <WidgetTitleBox title="단말기정보관리" />
      <BaseDataGrid tableName="equipment/certificate-certi-list" columns={dataGridKeys} />;
      {/* <StatusBox severity="danger" title="위험" desc="왕왕 50%" /> */}
      {/* <StatusBox severity="normal" title="정상" desc="단말기ID" /> */}
      {/* <StatusBox severity="warn" title="경고" desc="35% Operation Rate " /> */}
      {/* <Divider sx={{ marginBottom: 1 }} /> */}
      {/* <DefaultBox isBackgroundPaper={false}>단말기 형태</DefaultBox> */}
      {/* <Divider sx={{ marginBottom: 1 }} /> */}
      {/* <DefaultBox isBackgroundPaper={false}>단말기 모델명</DefaultBox> */}
      {/* <Divider sx={{ marginBottom: 1 }} /> */}
      {/* <DefaultBox isBackgroundPaper={false}>단말기 일련번호</DefaultBox> */}
      {/* <Divider sx={{ marginBottom: 1 }} /> */}
      {/* <DefaultBox isBackgroundPaper={false}>단말기 제조사명</DefaultBox> */}
      {/* <Divider sx={{ marginBottom: 1 }} /> */}
      {/* <DefaultBox isBackgroundPaper={false}>단말기 제조일자</DefaultBox> */}
    </Root>
  );
}

export default WarningTab;

const Root = styled('div')(() => ({
  padding: 5,
}));
