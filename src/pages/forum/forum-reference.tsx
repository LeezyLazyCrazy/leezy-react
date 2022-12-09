import { OptColumn } from 'tui-grid/types/options';
import BaseDataGrid from '../../components/dataGrid/BaseDataGrid';
// import CustomFileEditor from '../../components/dataGrid/CustomEditor/CustomFileEditor';

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
      type: 'text',
    },
  },
  // {
  //   name: 'file',
  //   header: '첨부파일',
  //   minWidth: 140,
  //   sortable: true,
  //   editor: {
  //     type: CustomFileEditor,
  //   },
  // },
];

function PageForumReference() {
  return <BaseDataGrid tableName="forum" columns={dataGridKeys} />;
}

export default PageForumReference;
