import { DataGrid, GridColDef } from '@mui/x-data-grid';


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: '장비명', headerName: '장비명', width: 150 },
    { field: '장비일련번호', headerName: '장비일련번호', width: 180 },

    {
        field: '승인상태',
        headerName: '승인상태',
        type: 'string',
        width: 150,
    },
    {
        field: '사용상태',
        headerName: '사용상태',
        type: 'string',
        description: '',       
        width: 150,
    },
        {
        field: '수발상태',
        headerName: '수발상태',
        type: 'string',
        description: '',       
        width: 150,
    },
];

const rows = [
    { id: 1, 장비일련번호: '20221007', 장비명: '보안조조', 승인상태: '제작승인', 사용상태: '파기완료',수발상태: '-' },
    { id: 2, 장비일련번호: '20221007', 장비명: '보안장비', 승인상태: 42, 사용상태: '파기완료' ,수발상태: '-'},
    { id: 3, 장비일련번호: '20221007', 장비명: '보안관우', 승인상태: 45, 사용상태: '파기완료' ,수발상태: '-'},
    { id: 4, 장비일련번호: '20221007', 장비명: '보안유비', 승인상태: 16, 사용상태: '파기완료' ,수발상태: '-'},
    { id: 5, 장비일련번호: '20221007', 장비명: '보안제갈량', 승인상태: '사용승인', 사용상태: '파기완료' ,수발상태: '-'},
    { id: 6, 장비일련번호: '20221007', 장비명: '보안관우', 승인상태: 150, 사용상태: '파기완료' ,수발상태: '-'},
    { id: 7, 장비일련번호: '20221007', 장비명: '보안유비', 승인상태: 44, 사용상태: '파기완료' ,수발상태: '-'},
    { id: 8, 장비일련번호: '20221007', 장비명: '보안제갈량', 승인상태: 36, 사용상태: '파기완료' ,수발상태: '-'},
    { id: 9, 장비일련번호: '20221007', 장비명: '보안장비삼국지', 승인상태: 65, 사용상태: '파기완료', 수발상태: '-' },
    { id: 10, 장비일련번호: '20221007', 장비명: '보안장비', 승인상태: 65, 사용상태: '파기완료' ,수발상태: '-'},
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
