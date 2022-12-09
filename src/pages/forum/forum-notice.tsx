import { OptColumn } from 'tui-grid/types/options';
import BaseDataGrid from '../../components/dataGrid/BaseDataGrid';

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

function PageForumNotice() {
  return <BaseDataGrid tableName="forum" columns={dataGridKeys} />;
}

export default PageForumNotice;
