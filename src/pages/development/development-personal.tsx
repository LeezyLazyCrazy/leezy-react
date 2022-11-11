import BaseDataGrid from '../../components/dataGrid/BaseDataGrid';
import { OptColumn } from 'tui-grid/types/options';

const dataGridKeys: OptColumn[] = [
  {
    name: 'taskId',
    header: '개발과제ID',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'personalNo',
    header: '개발담당자번호',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'agencyType',
    header: '담당자소속구분',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'personalDuty',
    header: '개방담당직책',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'personalId',
    header: '개발담당자ID',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'personalStatus',
    header: '개발담당자상태',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'personalDate',
    header: '개발담당시작일자',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'updateDate',
    header: '자료갱신일자',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'personalId',
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

function PageDevelopmentPersonal() {
  return <BaseDataGrid tableName="equipment-information" columns={dataGridKeys} />;
}

export default PageDevelopmentPersonal;
