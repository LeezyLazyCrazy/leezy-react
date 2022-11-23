import SummaryDataGrid from '../../components/dataGrid/SummaryDataGrid';
import { OptColumn, OptSummaryData } from 'tui-grid/types/options';
import { Box, Drawer, TextField } from '@mui/material';
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
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
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
