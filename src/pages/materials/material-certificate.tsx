import BaseDataGrid from '../../components/dataGrid/BaseDataGrid';
import { OptColumn } from 'tui-grid/types/options';

const dataGridKeys: OptColumn[] = [
  {
    name: 'Id',
    header: '자재증명서번호',
    sortable: true,
    minWidth: 140,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'type',
    header: '자재증명서종류',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'request',
    header: '증명서승인요청일자',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
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
    name: 'personalID',
    header: '증명서발행자ID',
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
    header: '자재증명서복사본',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'outgoingDate',
    header: '인계일자',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'outgoingAgency',
    header: '인계자소속',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'outgoingPersonalID',
    header: '인계자ID',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'outgoingConfirmation',
    header: '인계자확인서명',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'outgoingTotal',
    header: '인계총수량',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'outgoingProcessResult',
    header: '인계처리결과',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'outgoingRemarks',
    header: '인계특이사항',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'incomingDate',
    header: '인수일자',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'incomingAgency',
    header: '인수자소속',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'incomingPersonalId',
    header: '인수자ID',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'incomingConfirmation',
    header: '인수자확인서명',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'incomingTotal',
    header: '인수총수량',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'incomingProcessResult',
    header: '인수처리결과',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'incomingRemarks',
    header: '인수특이사항',
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

function PageMaterialCertificate() {
  return <BaseDataGrid tableName="material/certificate" columns={dataGridKeys} />;
}

export default PageMaterialCertificate;
