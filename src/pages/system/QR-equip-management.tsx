import BaseDataGrid from '../../components/dataGrid/BaseDataGrid';
import { OptColumn, OptHeader } from 'tui-grid/types/options';

const dataGridKeys: OptColumn[] = [
  {
    name: 'id',
    header: 'QR장비ID',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'name',
    header: 'QR장비명',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'desc',
    header: 'QR장비설명',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'type',
    header: 'QR장비형태',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'model',
    header: 'QR장비모델명',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'company',
    header: 'QR장비제조사명',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'makeDate',
    header: 'QR장비제조일자',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'installDatetime',
    header: 'QR장비설치일자',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'QREquipInstallAgency',
    header: 'QR장비설치기관',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'installDepartment',
    header: ' QR장비설치부서',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'position',
    header: 'QR장비보관위치',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'status',
    header: 'QR장비상태',
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
    name: 'terminalId',
    header: '연결단말기ID',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'QREquipPersonalId',
    header: '관리담당자ID',
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
      childNames: ['id'],
    },
    {
      header: '기본정보',
      name: 'mergeColumn2',
      childNames: ['name', 'desc', 'type', 'model', 'company', 'makeDate'],
    },
    {
      header: '설치정보',
      name: 'mergeColumn3',
      childNames: [
        'installDatetime',
        'QREquipInstallAgency',
        'installDepartment',
        'position',
        'status',
      ],
    },
  ],
};

function PageQREquipManagement() {
  return <BaseDataGrid tableName="equipment-information" columns={dataGridKeys} header={header} />;
}

export default PageQREquipManagement;
