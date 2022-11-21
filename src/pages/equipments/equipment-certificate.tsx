import BaseDataGrid from '../../components/dataGrid/BaseDataGrid';
import { OptColumn, OptHeader } from 'tui-grid/types/options';

const columns: OptColumn[] = [
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
    name: 'type',
    header: '증명서증명서구분',
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
    name: 'date',
    header: '증명서발행일자',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'equipmentCertiPersonalID',
    header: '증명서발행자ID',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'modeApprovalName',
    header: '형식승인명',
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
    name: 'accord',
    header: '증명서내일치여부',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'copy',
    header: '장비증명서복사본',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'outgoingDate',
    header: '인계일자',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'outgoingPersonalID',
    header: '인계자ID',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'outgoingConfirmation',
    header: '인계자확인서명',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'outgoingTotal',
    header: '인계총수량',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'outgoingProcessResult',
    header: '인계처리결과',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'incomingDate',
    header: '인수일자',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'incomingPersonalId',
    header: '인수자ID',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'incomingConfirmation',
    header: '인수자확인서명',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'incomingTotal',
    header: '인수총수량',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'ProcessResult',
    header: '인수처리결과',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'recordDatetime',
    header: '기록일시',
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
  height: 60,
  complexColumns: [
    {
      header: '증명서발행 정보',
      name: 'mergeColumn1',
      childNames: ['type', 'date', 'equipmentCertiPersonalID'],
    },
    {
      header: '수발장비 정보',
      name: 'mergeColumn2',
      childNames: ['modeApprovalName', 'equipmentId'],
    },
    {
      header: '수발결과 정보',
      name: 'mergeColumn3',
      childNames: ['accord', 'copy'],
    },
    {
      header: '장비인계 정보',
      name: 'mergeColumn4',
      childNames: [
        'outgoingDate',
        'outgoingPersonalId',
        'outgoingConfirmation',
        'outgoingTotal',
        'outgoingProcessResult',
      ],
    },
    {
      header: '장비인수 정보',
      name: 'mergeColumn5',
      childNames: [
        'incomingDate',
        'incomingPersonalId',
        'incomingConfirmation',
        'incomingTotal',
        'incomingProcessResult',
      ],
    },
    {
      header: '기록자 정보',
      name: 'mergeColumn6',
      childNames: ['recordDatetime', 'recordPersonalId'],
    },
  ],
};

function PageEquipmentCertification() {
  return (
    <BaseDataGrid
      tableName="equipment/certificate"
      columns={columns}
      frozenColumn={2}
      header={header}
    />
  );
}

export default PageEquipmentCertification;
