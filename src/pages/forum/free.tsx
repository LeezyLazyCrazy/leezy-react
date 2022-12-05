import BaseDataGrid from '../../components/Board/TestBaseDataGrid';
import { OptColumn } from 'tui-grid/types/options';

const dataGridKeys: OptColumn[] = [
  {
    name: 'name',
    header: '제목',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'personalAgency',
    header: '내용',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'department',
    header: '작성자',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'rank',
    header: '작성일자',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
];

function Free() {
  return <BaseDataGrid tableName="equipment-information" columns={dataGridKeys} />;
}

export default Free;
