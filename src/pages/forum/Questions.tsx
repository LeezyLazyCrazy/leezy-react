// import { DataGridKeyProps } from "../../data/constants/dataGridKeys";
import { OptColumn } from 'tui-grid/types/options';
import BaseDataGrid from '../../components/Board/TestBaseDataGrid';

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

function questions() {
  return <BaseDataGrid tableName="equipment-information" columns={dataGridKeys} />;
}

export default questions;
