import BaseDataGrid from '../../components/dataGrid/BaseDataGrid';
import { OptColumn } from 'tui-grid/types/options';

const dataGridKeys: OptColumn[] = [
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
    name: 'equipmentId',
    header: '장비일련번호',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'maintenanceNo',
    header: '정비일련번호',
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
    name: 'troubleAgency',
    header: '고장신고기관',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'troubleDate',
    header: '고장발생일자',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'reportDate',
    header: '고장신고일자',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'receiptDate',
    header: '고장접수일자',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'startDate',
    header: '정비시작일자',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'endDate',
    header: ' 정비완료일자',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'personalId',
    header: '정비책임자ID',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'level',
    header: '정비수준',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },

  {
    name: 'title',
    header: '장비고장내용',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'reason',
    header: '장비고장원인',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'result',
    header: '정비조치결과',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'advisory',
    header: '권고주의사항',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'statusGroup',
    header: '정비후상태그룹',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'statusDetail',
    header: '정비후장비세부상태',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'updateDate',
    header: '자료갱신일자ID',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'recordPersonalId',
    header: '자료담당자ID',
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

function PageSecurityAccidentHistory() {
  return <BaseDataGrid tableName="equipment-information" columns={dataGridKeys} />;
}

export default PageSecurityAccidentHistory;
