import BaseDataGrid from '../../components/dataGrid/BaseDataGrid';
import { OptColumn } from 'tui-grid/types/options';

const dataGridKeys: OptColumn[] = [
  {
    name: 'id',
    header: '장비증명서번호',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'type',
    header: '장비증명서종류',
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
    header: '장비증명서복사본',
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
    name: 'ProcessResult',
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

// export const dummyAirplaneStatus = [
// eslint-disable-next-line no-tabs
// 	{
//    eslint-disable-next-line no-tabs
// 		id: "달러",
// 		updateNo: 100,
// 		updateDatetime: 4,
// 		approvalID: 10,
// 		equipmentCertifyId: 5,
// 		manufactureId: 10,
// 		lastStatusGroup: "2",
// 		lastStatusDetail: "2020-01-03",
// 		beforeStatusGroup: "19-000223",
// 				beforeStatusDetail: "달러",
// 		a: 100,
// 		b: 4,
// 		c: 10,
// 		d: 5,
// 		e: 10,
// 		f: "2",
// 		g: "2020-01-03",
// 		updateMenu: "19-000223",
// 				updateContents: "달러",
// 		updateReason: 100,
// 		updateAgency: 4,
// 		updatePosition: 10,
// 		updatePersonalId: 5,
// 		remarks: 10,
// 	},
// ];

function PageEquipmentStatus() {
  return <BaseDataGrid tableName="equipment/information" columns={dataGridKeys} />;
}

export default PageEquipmentStatus;
