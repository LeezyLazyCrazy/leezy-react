/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { OptColumn, OptSummaryData } from 'tui-grid/types/options';
import { Box, Drawer } from '@mui/material';
import SummaryDataGrid from '../../components/dataGrid/SummaryDataGrid';
import WidgetTitleBox from '../../components/box/textBox/WidgetTitleBox';
import DrawerDataGrid from '../../components/dataGrid/DrawerDataGrid';
import useCellStore from '../../stores/useCellStore';

const columns: OptColumn[] = [
  {
    name: 'modeApprovalName',
    header: '형식승인명',
    minWidth: 100,
    sortable: true,
    align: 'center',
    editor: {
      type: 'text',
    },
  },
  {
    name: 'sum',
    header: '합계',
    minWidth: 40,
    sortable: true,
    align: 'center',
    editor: {
      type: 'text',
    },
  },
  {
    name: 'nis',
    header: '국정원',
    minWidth: 40,
    sortable: true,
    align: 'center',
    editor: {
      type: 'text',
    },
  },
  {
    name: 'moef',
    header: '기획재정부',
    minWidth: 40,
    sortable: true,
    align: 'center',
    editor: {
      type: 'text',
    },
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
        return `계`;
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

const DrawerColumns: OptColumn[] = [
  {
    name: 'operateDepartment',
    header: '부서명',
    minWidth: 70,
    sortable: true,
    align: 'center',
  },
  {
    name: 'equipmentId',
    header: '장비등록번호',
    minWidth: 70,
    sortable: true,
    align: 'center',
  },
  {
    name: 'status',
    header: '상태',
    minWidth: 20,
    sortable: true,
    align: 'center',
  },
];

// function onClick(e: any) {
//   console.log(e.columnName);
//   const grid: any = e.instance;
//   console.log(grid.getData()[e.rowKey].modeApprovalName);
// }

function PageEquipmentStatus() {
  // eslint-disable-next-line no-unused-vars
  function setOpen(set: boolean): void {}
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  function showDrawer(): void {
    setIsDrawerOpen(true);
  }

  const { operateDepartment, modeApprovalName, setOperateDepartment, setModeApprovalName } =
    useCellStore();
  // const { operateDepartment, modeApprovalName } = useCellStore();
  // setOperateDepartment('test1');
  // setModeApprovalName('test2');

  const initParams = { manageAgency: 'nis', modeApprovalName: 'NUE-14' };
  const title: string = `${operateDepartment} 기관 ${modeApprovalName} 장비 현황 상세`;
  // console.log(title);
  return (
    <>
      <Drawer
        sx={{ opacity: 0.99 }}
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box
          sx={{
            height: '100%',
            width: 500,
            padding: '10% 5%',
            // backgroundColor: '#130354c9',
          }}
          role="combobox"
        >
          <WidgetTitleBox title={title} />
          <DrawerDataGrid
            tableName="equipment/information"
            columns={DrawerColumns}
            manageAgency="nis"
            modeApprovalName="NEU-14"
          />
        </Box>
      </Drawer>
      <SummaryDataGrid
        tableName="equipment/status"
        columns={columns}
        summary={summary}
        onSearchClick={() => showDrawer()}
        onClick={() => showDrawer()}
      />
    </>
  );
}

export default PageEquipmentStatus;
