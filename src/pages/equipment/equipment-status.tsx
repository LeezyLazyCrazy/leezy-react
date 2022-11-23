import SummaryDataGrid from '../../components/dataGrid/SummaryDataGrid';
import { OptColumn, OptSummaryData } from 'tui-grid/types/options';
import { Box, Drawer } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useState } from 'react';

const columns: OptColumn[] = [
  {
    name: 'modeApprovalName',
    header: '형식승인명',
    minWidth: 100,
    sortable: true,
    align: 'center',
  },
  {
    name: 'nis',
    header: '국정원',
    minWidth: 40,
    sortable: true,
    align: 'center',
  },
  {
    name: 'moef',
    header: '기획재정부',
    minWidth: 40,
    sortable: true,
    align: 'center',
  },
  {
    name: 'mofa',
    header: '외교부',
    minWidth: 40,
    sortable: true,
    align: 'center',
  },
  {
    name: 'mnd',
    header: '국방부',
    minWidth: 40,
    sortable: true,
    align: 'center',
  },
  {
    name: 'mois',
    header: '행정안전부',
    minWidth: 40,
    sortable: true,
    align: 'center',
  },
  {
    name: 'mohw',
    header: '보건복지부',
    minWidth: 40,
    sortable: true,
    align: 'center',
  },
  {
    name: 'mof',
    header: '해양수산부',
    minWidth: 40,
    sortable: true,
    align: 'center',
  },
];

const summary: OptSummaryData = {
  height: 40,
  position: 'bottom', // or 'top'
  columnContent: {
    modeApprovalName: {
      template() {
        return `sum`;
      },
    },
    nis: {
      template(valueMap) {
        return `${valueMap.sum}`;
      },
    },
    moef: {
      template(valueMap) {
        return `${valueMap.sum}`;
      },
    },
    mofa: {
      template(valueMap) {
        return `${valueMap.sum}`;
      },
    },
    mnd: {
      template(valueMap) {
        return `${valueMap.sum}`;
      },
    },
    mois: {
      template(valueMap) {
        return `${valueMap.sum}`;
      },
    },
    mohw: {
      template(valueMap) {
        return `${valueMap.sum}`;
      },
    },
    mof: {
      template(valueMap) {
        return `${valueMap.sum}`;
      },
    },
  },
};

const DetailColumns: GridColDef[] = [
  { field: 'department', headerName: '부서명', width: 70 },
  { field: 'equipmentId', headerName: '장비등록번호', width: 70 },
  { field: 'status', headerName: '상태', width: 40 },
];

const rows = [
  { department: 1, equipmentId: 'Snow', status: 'Jon' },
  { department: 2, equipmentId: 'Lannister', status: 'Cersei' },
  { department: 3, equipmentId: 'Lannister', status: 'Jaime' },
  { department: 4, equipmentId: 'Stark', status: 'Arya' },
  { department: 5, equipmentId: 'Targaryen', status: 'Daenerys' },
  { department: 6, equipmentId: 'Melisandre', status: null },
  { department: 7, equipmentId: 'Clifford', status: 'Ferrara' },
  { department: 8, equipmentId: 'Frances', status: 'Rossini' },
  { department: 9, equipmentId: 'Roxie', status: 'Harvey' },
];

function PageEquipmentStatus() {
  // eslint-disable-next-line no-unused-vars
  function setOpen(set: boolean): void {}
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <Drawer
        sx={{ opacity: 0.98 }}
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box sx={{ width: 480, padding: '10% 5%' }} role="combobox" />
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid rows={rows} columns={DetailColumns} />
        </div>
        {/* <Stack direction="row" spacing={1}>
          <Chip label="예비" color="primary" />
          <Chip label="배부" color="success" />
        </Stack> */}
      </Drawer>
      <SummaryDataGrid
        tableName="equipment/status"
        columns={columns}
        summary={summary}
        onSearchClick={() => setIsDrawerOpen(true)}
      />
    </>
  );
}

export default PageEquipmentStatus;
