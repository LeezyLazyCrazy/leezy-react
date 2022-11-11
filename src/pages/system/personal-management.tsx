// import { DataGridKeyProps } from "../../data/constants/dataGridKeys";
import BaseDataGrid from '../../components/dataGrid/BaseDataGrid';
import { OptHeader, OptColumn } from 'tui-grid/types/options';

const dataGridKeys: OptColumn[] = [
  {
    name: 'personalId',
    header: '사용자개인ID',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'name',
    header: '성명',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'personalAgency',
    header: '소속',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'department',
    header: '부서',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'rank',
    header: '직급',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'date',
    header: '임용일자',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'startDate',
    header: '업무개시일자',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'endDate',
    header: '업무종료일자',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'dutyStatus',
    header: '현재업무수행여부',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'nationality',
    header: ' 국적',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'birthYyMmDd',
    header: '생년월일(yy,mm,dd)',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'residentNumber',
    header: '주민번호(뒷자리)',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },

  {
    name: 'mobileNumber',
    header: '휴대폰번호',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'phone',
    header: '전화번호',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'address',
    header: '이메일주소',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'level',
    header: '보안등급',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'check',
    header: '신원조자여부',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'clearance',
    header: '비밀취급인가여부',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'manufactoryId',
    header: '제작업체ID',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'type',
    header: '사용자구분',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'authorityType',
    header: '권한구분',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'loginUserId',
    header: '로그인아이디',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'password',
    header: '로그인패스워드',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'updateDate',
    header: '기록갱신일자',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'recordPersonalId',
    header: '기록담당자ID',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'remarks',
    header: '비고',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
];

const header: OptHeader = {
  height: 50,
  complexColumns: [
    {
      header: '개인신상 정보',
      name: 'mergeColumn1',
      childNames: [
        'name',
        'personalAgency',
        'department',
        'rank',
        'date',
        'startDate',
        'endDate',
        'dutyStatus',
        'nationality',
        'birthYyMmDd',
        'residentNumber',
        'mobileNumber',
        'phone',
        'address',
        'level',
        'check',
        'clearance',
      ],
    },
    {
      header: '제작업체 연계',
      name: 'mergeColumn2',
      childNames: ['manufactoryId'],
    },
    {
      header: '시스템 접근정보',
      name: 'mergeColumn3',
      childNames: ['userType', 'authorityType', 'loginUserId', 'password'],
    },
    {
      header: '자료관리 정보',
      name: 'mergeColumn4',
      childNames: ['updateDate', 'recordPersonalId'],
    },
  ],
};

function PagePersonalManagement() {
  return <BaseDataGrid tableName="system/user" columns={dataGridKeys} header={header} />;
}

export default PagePersonalManagement;
