// import { DataGridKeyProps } from "../../data/constants/dataGridKeys";
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
    name: 'content',
    header: '내용',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'writer',
    header: '작성자',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'date',
    header: '작성일자',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'datePicker',
      options: {
        format: 'yyyy-MM-dd',
      },
    },
  },
];

function notice() {
  return <BaseDataGrid tableName="forum/notice" columns={dataGridKeys} />;
}

export default notice;
