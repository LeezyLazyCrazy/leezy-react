import BaseDataGrid from '../../components/dataGrid/BaseDataGrid';
import { OptColumn } from 'tui-grid/types/options';

const dataGridKeys: OptColumn[] = [
  {
    name: 'terminalEquipId',
    header: '단말기ID',
    sortable: true,
    minWidth: 140,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'name',
    header: '단말기명',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'desc',
    header: '단말기설명',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'type',
    header: '단말기형태',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'model',
    header: '단말기모델명',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'serialNumber',
    header: '단말기일련번호',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'company',
    header: '단말기제조사명',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'Date',
    header: '단말기제조일자',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'macAddress',
    header: '단말기맥주소',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'network',
    header: '단말기네트워크',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'os',
    header: '단말기OS',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'cpu',
    header: '단말기CPU',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'memory',
    header: '단말기Memory',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'storage',
    header: '단말기저장장치',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'monitorEquipID',
    header: '모니터정보',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'printerEquipId',
    header: '프린터정보',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'qrPrinterEquipId',
    header: 'QR프린터장비ID',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'qrReaderEquipId',
    header: 'QR리더장비ID',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'equipmentID',
    header: '장비ID',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'installDate',
    header: '설치일자',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'terminalInstallAgency',
    header: '설치기관',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'installDepartment',
    header: '설치부서',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'position',
    header: '보관위치',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'status',
    header: '단말기상태',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'managePersonalIdMain',
    header: '관리책임자ID(정)',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'managePersonalIdSub',
    header: '관리책임자ID(부)',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'datetime',
    header: '최근확인일시',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'handoverDatetime',
    header: '최근인계일수일시',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'remarks',
    header: '비고',
    minWidth: 140,
    sortable: true,
  },
];

function PageTerminalManagement() {
  return <BaseDataGrid tableName="equipment-information" columns={dataGridKeys} />;
}

export default PageTerminalManagement;
