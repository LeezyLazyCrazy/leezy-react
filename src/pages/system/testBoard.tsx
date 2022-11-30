// import Editor1 from '../../components/Board/Editor1';

// import { OptColumn, OptHeader } from 'tui-grid/types/options';
import { Link } from 'react-router-dom';
import { OptColumn } from 'tui-grid/types/options';
import BoardDataGrid from '../../components/Board/BoardDataGrid';
import BaseButton from '../../components/button/BaseButton';

function testBoard() {
  const columns: OptColumn[] = [
    {
      name: 'equipmentCertiAgency',
      header: '제목',
      minWidth: 140,
      sortable: true,
      editor: {
        type: 'text',
      },
    },
    {
      name: 'equipmentCertiId',
      header: '작성자',
      minWidth: 140,
      sortable: true,
      editor: {
        type: 'text',
      },
    },
    {
      name: 'type',
      header: '내용',
      minWidth: 140,
      sortable: true,
      editor: {
        type: 'datePicker',
        options: {
          language: 'ko',
          format: 'yyyy-MM-dd',
        },
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
    {
      name: 'date',
      header: '수정일자',
      minWidth: 140,
      sortable: true,
      editor: {
        type: 'text',
      },
    },
  ];

  // const header: OptHeader = {
  //   height: 60,
  //   complexColumns: [
  //     {
  //       header: '증명서발행 정보',
  //       name: 'mergeColumn1',
  //       childNames: ['type', 'date', 'equipmentCertiPersonalID'],
  //     },
  //     {
  //       header: '수발장비 정보',
  //       name: 'mergeColumn2',
  //       childNames: ['modeApprovalName', 'equipmentId'],
  //     },
  //     {
  //       header: '수발결과 정보',
  //       name: 'mergeColumn3',
  //       childNames: ['accord', 'copy'],
  //     },
  //     {
  //       header: '장비인계 정보',
  //       name: 'mergeColumn4',
  //       childNames: [
  //         'outgoingDate',
  //         'outgoingPersonalId',
  //         'outgoingConfirmation',
  //         'outgoingTotal',
  //         'outgoingProcessResult',
  //       ],
  //     },
  //     {
  //       header: '장비인수 정보',
  //       name: 'mergeColumn5',
  //       childNames: [
  //         'incomingDate',
  //         'incomingPersonalId',
  //         'incomingConfirmation',
  //         'incomingTotal',
  //         'incomingProcessResult',
  //       ],
  //     },
  //     {
  //       header: '기록자 정보',
  //       name: 'mergeColumn6',
  //       childNames: ['recordDatetime', 'recordPersonalId'],
  //     },
  //   ],
  // };

  return (
    <div>
      <h1>제목</h1>
      <br />
      {/* <Editor1 /> */}
      <BoardDataGrid
        tableName="equipment/certificate"
        columns={columns}
        frozenColumn={2}
        // header={header}
      />
      <Link to="/index">
        <BaseButton title="등록" />
      </Link>
      <BaseButton title="삭제" />
    </div>
  );
}

export default testBoard;
