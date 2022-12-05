// import { DataGridKeyProps } from "../../data/constants/dataGridKeys";
import BaseDataGrid from '../../components/dataGrid/BaseDataGrid';
import { OptHeader, OptColumn } from 'tui-grid/types/options';

const dataGridKeys: OptColumn[] = [
  {
    name: 'approvalName',
    header: '형식승인명',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'equipmentSerial',
    header: '장비등록번호',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'updateNo',
    header: '갱신번호',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'updateDatetime',
    header: '상태갱신일시',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'approvalID',
    header: '승인업무고유ID',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'equipmentCertifyId',
    header: '장비증명서번호',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'manufactureId',
    header: '제작업체ID',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'lastStatusGroup',
    header: '최신상태그룹',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'lastStatusDetail',
    header: '최신장비세부상태',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'beforeStatusGroup',
    header: '갱신이전상태그룹',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'beforeStatusDetail',
    header: '갱신이전장비세부상태',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'a',
    header: '개발단계 장비세부상태',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'b',
    header: '사용승인단계 장비세부상태',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'c',
    header: '제작단계 장비세부상태',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'd',
    header: '사용승인단계 장비세부상태',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'e',
    header: '운용대기단계 장비세부상태',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'f',
    header: '정비단계 장비세부상태',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'g',
    header: '파기단계 장비세부상태',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'updateMenu',
    header: '상태개인발생메뉴기능',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'updateContents',
    header: '상태갱신내용',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'updateReason',
    header: '상태갱신이유',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'updateAgency',
    header: '상태갱신기관',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'updatePosition',
    header: '장비위치',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'updatePersonalId',
    header: '갱신자ID',
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
  height: 60,
  complexColumns: [
    {
      header: '승인정보 연계',
      name: 'mergeColumn1',
      childNames: ['approvalID'],
    },
    {
      header: '수발정보 연계',
      name: 'mergeColumn2',
      childNames: ['equipmentCertifyId'],
    },
    {
      header: '제작업체 연계',
      name: 'mergeColumn3',
      childNames: ['manufactureId'],
    },
    {
      header: '최신상태 정보',
      name: 'mergeColumn4',
      childNames: ['lastStatusGroup', 'lastStatusDetail'],
    },
    {
      header: '이전상태 정보',
      name: 'mergeColumn5',
      childNames: ['beforeStatusGroup', 'beforeStatusDetail'],
    },
    {
      header: '현 장비 세부 상태정보',
      name: 'mergeColumn6',
      childNames: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
    },
    {
      header: '상태변경 장비추적 내용',
      name: 'mergeColumn7',
      childNames: [
        'updateMenu',
        'updateContents',
        'updateReason',
        'updateAgency',
        'updatePosition',
      ],
    },
    {
      header: '갱신자 정보',
      name: 'mergeColumn8',
      childNames: ['updatePersonalId'],
    },
  ],
};

function PageEquipmentStatusHistory() {
  return <BaseDataGrid tableName="equipment/information" columns={dataGridKeys} header={header} />;
}

export default PageEquipmentStatusHistory;