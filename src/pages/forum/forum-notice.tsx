import { OptColumn } from 'tui-grid/types/options';
import TestBaseDataGrid from '../../components/dataGrid/TestBaseDataGrid';

const dataGridKeys: OptColumn[] = [
  {
    name: 'TITLE',
    header: '제목',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'CONTENT',
    header: '내용',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'PERSON_NAME',
    header: '작성자',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'REG_DATE',
    header: '작성일자',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'move_detail',
    header: '상세페이지',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
];

function PageForumNotice() {
  return <TestBaseDataGrid tableName="forum-notice" columns={dataGridKeys} />;
}

export default PageForumNotice;
