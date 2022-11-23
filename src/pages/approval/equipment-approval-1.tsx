import BaseDataGrid from '../../components/dataGrid/BaseDataGrid';
import { OptColumn } from 'tui-grid/types/options';

const columns: OptColumn[] = [
  {
    name: 'approvalId',
    header: '승인업무고유ID',
    sortable: true,
    minWidth: 140,
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
    name: 'useRequestAgency',
    header: '사용승인요청기관',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'requestNumber',
    header: '사용승인요청공부-문서번호',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'requestTile',
    header: '사용승인요청공문-제목',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'requestEffectDate',
    header: '사용승인요청공문-시행일자',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'requestRemarks',
    header: '사용승인요청-비고',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'examinePersonalId',
    header: '원검토담당자ID',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'examineContents',
    header: '원검토결과내용',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'resultNumber',
    header: '검토결과송부공문-문서번호',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'resultTitle',
    header: '검토결과송부공문-제목',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'resultEffectDate',
    header: '검토결과송부공문-시행일자',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'resultReceiptDate',
    header: '검토결과송부공문-접수일자',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'resultRemarks',
    header: '검토결과통보-비고',
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
    name: 'number',
    header: '제작승인통보공문-문서번호',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'title',
    header: '제작승인통보공문-제목',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'effectDate',
    header: '제작승인통보공문-시행일자',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'receiptDate',
    header: '제작승인통보공문- 접수일자',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'destroyRequestAgency',
    header: '파기승인요청기관',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'destroyRequestNumber',
    header: '파기승인요청공문-문서번호',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'destroyRequestTitle',
    header: '파기승인요청공문-제목',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'destroyRequestEffectDate',
    header: '파기승인요청공문-시행일자',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'destroyRequestRemarks',
    header: '파기승인요청-비고',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'destroyResultNumber',
    header: '파기결과송부공문-제목',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'destroyResultEffectDate',
    header: '파기결과송부공문-시행일자',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'destroyResultReceiptDate',
    header: '파기결과송부공문-접수일자',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'destroyResultRemarks',
    header: '파기검토결과통보-비고',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'destroyStatus',
    header: '장비파기결과',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'destroyDate',
    header: '장비파기일자',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'recordDatetime',
    header: '자료기록일시',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'recordPersonalId',
    header: '자료관리자ID',
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

function PageEquipmentApproval1() {
  return <BaseDataGrid tableName="equipment-information" columns={columns} />;
}

export default PageEquipmentApproval1;
