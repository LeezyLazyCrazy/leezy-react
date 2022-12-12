import Grid from '@toast-ui/react-grid';
import TuiGrid from 'tui-grid';
import 'tui-grid/dist/tui-grid.css';
import { OptColumn, OptHeader } from 'tui-grid/types/options';
import { DataSource } from 'tui-grid/types/dataSource';
import '../../styles/dataGrid/index.css';
import { createRef, useState } from 'react';
import useThemeStore from '../../stores/useThemeStore';
import { theme } from '../../styles/theme';
import TableSettingModal from './TableSettingModal';
import HeaderSettingModal from './HeaderSettingModal';
import { gridStyles } from './dataGridStyle';
import { API_URL } from '../../query';
import useCellStore from '../../stores/useCellStore';
import Toolbar from './Toolbar';

interface DrawerDataGridProps {
  tableName: string;
  columns: OptColumn[];
  frozenColumn?: number;
  header?: OptHeader;
  operateDepartment?: string;
  modeApprovalName?: string;
  manageAgency?: string;
  showToolbar?: boolean;
  onClick?: () => void;
}

/**
 * Toast UI Tui Grid의 기본적인 구현체임.
 *
 * 관련 라이브러리에 대해서는 다음을 참고 {@link https://ui.toast.com/tui-grid ToastUI Grid }
 *
 * 해당 컴포넌트는 아직 어떻게 쓸지 잡힌 것이 없으므로 추후 설명을 보충할 예정
 * @param {DrawerDataGridProps} DrawerDataGridProps
 * @returns {JSX.Element} React Component
 */
// function onClick(e: any) {
//   console.log('test');
//   console.log(e.rowKey, e.columnName);
// }

function DrawerDataGrid({
  tableName,
  columns,
  showToolbar = true,
  frozenColumn = 0,
  header = { height: 40 },
}: // onSearchClick,
DrawerDataGridProps) {
  const { manageAgency, modeApprovalName } = useCellStore();

  // grid styles
  const { isDark } = useThemeStore();
  const { palette } = theme(isDark);
  TuiGrid.applyTheme('default', gridStyles(palette));

  // grid language
  TuiGrid.setLanguage('ko');

  const ref = createRef<Grid>();

  // width는 상위 Layout에서 지도 모듈과 나란히 할지 말지 등을 고려하여 재구축
  // const [containerWidth, setContainerWidth] = useState(1100 + 10);
  // const [checkToSaveOpen, setCheckToSaveOpen] = useState(false);
  const [tableSettingOpen, setTableSettingOpen] = useState(false);
  const [headerSettingOpen, setHeaderSettingOpen] = useState(false);
  const [frozenCount, setFrozenCount] = useState(frozenColumn);
  const { setGridData } = useCellStore();

  // const [detailSettingOpen, setDetailSettingOpen] = useState(false);

  // 행 추가
  const appendRow = () => {
    ref.current?.getInstance().appendRow({});
  };
  // left Bar 가져오기
  // const { isBarOpen: isMenuBarOpen } = useMenuBarStore();

  // widget bar 가져오기
  // const {
  //   isBarOpen: isWidgetBarOpen,
  //   setIsBarOpen,
  //   setSelectedTab,
  //   // selectedTab,
  // } = useRightWidgetBarStore();

  // const { innerWidth } = window;

  // useEffect(() => {
  //   const widgetWidth = isWidgetBarOpen ? 430 : 130;
  //   const menubarWidth = isMenuBarOpen ? 210 : 100;

  //   ref.current?.getInstance().setWidth(innerWidth - widgetWidth - menubarWidth);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isWidgetBarOpen, isMenuBarOpen]);

  const dataSource: DataSource = {
    withCredentials: false,
    initialRequest: true,
    contentType: 'application/json',
    api: {
      readData: {
        url: `${API_URL}/api/${tableName}`,
        initParams: {
          manageAgency,
          modeApprovalName,
        },
        method: 'GET',
      },
      modifyData: { url: `${API_URL}/api/${tableName}`, method: 'PUT' },
      deleteData: { url: `${API_URL}/api/${tableName}`, method: 'DELETE' },
    },
  };

  return (
    <div style={{ width: 'auto' }}>
      {showToolbar && (
        <Toolbar
          addNewRow={appendRow}
          openTableSetting={() => setTableSettingOpen(true)}
          openDeleteSetting={() => {
            ref.current?.getInstance().removeCheckedRows();
            ref.current?.getInstance().request('deleteData');
          }}
          openSaveSetting={() => ref.current?.getInstance().request('modifyData')}
          removeRows={() => ref.current?.getInstance().removeCheckedRows()}
          exportFile={() => ref.current?.getInstance().export('csv')}
        />
      )}
      <Grid
        ref={ref}
        data={dataSource}
        header={header}
        columns={columns}
        columnOptions={{ resizable: true, frozenCount: frozenColumn, minWidth: 100 }}
        rowHeight={30}
        bodyHeight={600}
        heightResizable
        width="auto"
        scrollX
        scrollY={false}
        oneTimeBindingProps={['data', 'columns']}
        onClick={(e: any) => {
          const grid: any = e.instance;
          setGridData(grid.getModifiedRows());
        }}
      />
      <TableSettingModal
        open={tableSettingOpen}
        setOpen={setTableSettingOpen}
        setTableWidth={(value) => {
          ref.current?.getInstance().setWidth(value);
        }}
        setTableHeight={(value) => ref.current?.getInstance().setHeight(value)}
      />
      <HeaderSettingModal
        open={headerSettingOpen}
        setOpen={setHeaderSettingOpen}
        headerData={columns}
        tableRef={ref}
        frozenCount={frozenCount}
        setFrozenCount={(value) => setFrozenCount(value)}
      />
    </div>
  );
}

export default DrawerDataGrid;
