// import { DataGridKeyProps } from "../../data/constants/dataGridKeys";
import BaseDataGrid from '../../components/dataGrid/BaseDataGrid';
import { OptHeader, OptColumn } from 'tui-grid/types/options';

const dataGridKeys: OptColumn[] = [
  {
    name: 'QRcodeUniqueId',
    header: 'QR코드고유ID',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'QRcodeUseDatetime',
    header: 'QR코드사용일시',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'QREquipId',
    header: 'QR장비ID',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'QRcodeUseType',
    header: 'QR코드사용형태',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'QREquipUseAgency',
    header: 'QR장비사용기관',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'equipmentId',
    header: '장비일련번호',
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
    name: '(향후결정)',
    header: 'QRcode내용',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'QRCreateDatetime',
    header: 'QR코드생성일시',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'QRUsePersonalId',
    header: ' QR사용자ID',
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
      header: '레코드 식별',
      name: 'mergeColumn1',
      childNames: ['QRcodeUniqueId', 'QRcodeUseDatetime'],
    },
    {
      header: 'QR장비 연계',
      name: 'mergeColumn2',
      childNames: ['QREquipId'],
    },
    {
      header: 'P/R',
      name: 'mergeColumn3',
      childNames: ['QRcodeUseType'],
    },
    {
      header: 'QRcode 생성 정보',
      name: 'mergeColumn4',
      childNames: ['equipmentId', 'manufactoryId', '(향후결정)', 'QRCreateDatetime'],
    },
    {
      header: '사용자정보',
      name: 'mergeColumn5',
      childNames: ['QRUsePersonalId'],
    },
  ],
};

function PageQRcodeInOutHistory() {
  return <BaseDataGrid tableName="equipment-information" columns={dataGridKeys} header={header} />;
}

export default PageQRcodeInOutHistory;
