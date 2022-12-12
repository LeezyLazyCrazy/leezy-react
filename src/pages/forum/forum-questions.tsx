import { OptColumn } from 'tui-grid/types/options';
import BaseDataGrid from '../../components/dataGrid/BaseDataGrid';

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
    editor: {
      type: 'text',
    },
  },
  {
    name: 'REG_DATE',
    header: '작성일자',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
];

function PageForumQuestions() {
  return <BaseDataGrid tableName="forum" columns={dataGridKeys} />;
}

export default PageForumQuestions;
