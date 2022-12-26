import Grid from '@toast-ui/react-grid';
import TuiGrid from 'tui-grid';
import 'tui-grid/dist/tui-grid.css';
import { OptColumn, OptHeader } from 'tui-grid/types/options';
import '../../styles/dataGrid/index.css';
import { createRef, useEffect, useState } from 'react';
import useThemeStore from '../../stores/useThemeStore';
import { theme } from '../../styles/theme';
import DataGridToolbar from './DataGridToolbar';
import TableSettingModal from './TableSettingModal';
import HeaderSettingModal from './HeaderSettingModal';
import { gridStyles } from './dataGridStyle';
import { API_URL } from '../../query';
import useMenuBarStore from '../../stores/useMenuBarStore';
import useRightWidgetBarStore from '../../stores/useRightWidgetBarStore';
import { DataSource } from 'tui-grid/types/dataSource';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../stores/useAuth';
import YesNoSelectionModal from '../../modules/modal/YesNoSelectionModal';
// import SearchDrawer from '../../modules/widget/SearchDrawer';

// import YesNoSelectionModal from '../../modules/modal/YesNoSelectionModal';

interface BaseDataGridProps {
  tableName: string;
  columns: OptColumn[];
  frozenColumn?: number;
  header?: OptHeader;
  showToolbar?: boolean;
  onSearchClick?: any;
}

/**
 테스트용 컴포넌트
 */

function TestBaseDataGrid({
  tableName,
  columns,
  frozenColumn = 1,
  header = { height: 60 },
  showToolbar = true,
  onSearchClick,
}: BaseDataGridProps) {
  const authUser = useAuth();
  const navigate = useNavigate();

  // 행 추가 시 navigate함수 사용을 막고 행 추가가 아닐 시 navigate함수를 사용하여 데이터가 추가적인 수정 제한
  const Test = () => {
    if (ref.current?.getInstance().getFocusedCell().columnName === 'move_detail') {
      const selectKey = ref.current?.getInstance().getFocusedCell().rowKey;
      navigate('/forum/detail', { state: ref.current?.getInstance().getRow(selectKey!) }); // 임시
    }
  };

  // const Test2 = () => {
  //   const columnsKey = ref.current?.getInstance().getFocusedCell();

  //   ref.current
  //     ?.getInstance()
  //     .getColumns()
  //     .map((column, i) => {
  //       if (columnsKey!.columnName === column.name) {
  //         ref.current
  //           ?.getInstance()
  //           .startEditing(columnsKey!.rowKey!, ref.current?.getInstance().getColumns()[i + 1].name);
  //       }
  //     });
  // };

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
  // const [columnsData, setcolumnsData] = useState<any>([]); // 임시

  // const [detailSettingOpen, setDetailSettingOpen] = useState(false);

  // const dataGridKeys: OptColumn[] = [
  //   {
  //     name: 'name',
  //     header: '제목',
  //     minWidth: 140,
  //     sortable: true,
  //     editor: {
  //       type: 'text',
  //     },
  //   },
  // ];

  // 행 추가
  const appendRow = () => {
    ref.current?.getInstance().appendRow({});
    ref.current?.getInstance().setColumnValues('PERSON_NAME', authUser.authUser?.name);

    const lastRowKey = Number(ref.current?.getInstance().getRowCount());

    ref.current?.getInstance().startEditing(lastRowKey - 1, 'TITLE');
  };
  // left Bar 가져오기
  const { isBarOpen: isMenuBarOpen } = useMenuBarStore();

  // widget bar 가져오기
  const {
    isBarOpen: isWidgetBarOpen,
    setIsBarOpen,
    setSelectedTab,
    // selectedTab,
  } = useRightWidgetBarStore();

  const { innerWidth } = window;

  useEffect(() => {
    const widgetWidth = isWidgetBarOpen ? 430 : 130;
    const menubarWidth = isMenuBarOpen ? 210 : 100;

    ref.current?.getInstance().setWidth(innerWidth - widgetWidth - menubarWidth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isWidgetBarOpen, isMenuBarOpen]);

  const dataSource: DataSource = {
    withCredentials: false,
    initialRequest: true,
    contentType: 'application/json',
    api: {
      readData: { url: `${API_URL}/api/${tableName}`, method: 'GET' },
      modifyData: { url: `${API_URL}/api/${tableName}`, method: 'PUT' },
      deleteData: { url: `${API_URL}/api/${tableName}`, method: 'DELETE' },
    },
  };

  return (
    <div style={{ width: 'auto' }}>
      {/* <SearchDrawer /> */}
      {showToolbar && (
        <DataGridToolbar
          addNewRow={appendRow}
          refresh={() => ref.current?.getInstance().readData(1)}
          openTableSetting={() => setTableSettingOpen(true)}
          openHeaderSetting={() => setHeaderSettingOpen(true)}
          openDetailSetting={() => {
            setIsBarOpen(true);
            setSelectedTab(1);
          }}
          openSearchSetting={onSearchClick}
          openDeleteSetting={() => {
            ref.current?.getInstance().removeCheckedRows();
            ref.current?.getInstance().request('deleteData');
          }}
          openSaveSetting={() => {
            ref.current?.getInstance().request('modifyData');
            // ref.current?.getInstance().disable();
          }}
          removeRows={() => ref.current?.getInstance().removeCheckedRows()}
          exportFile={() => ref.current?.getInstance().export('csv')}
          copyToClipboard={() => ref.current?.getInstance().copyToClipboard()}
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
        rowHeaders={['rowNum', 'checkbox']}
        draggable
        scrollX
        scrollY={false}
        oneTimeBindingProps={['data', 'columns']}
        // onClick={onClick}
        onDblclick={Test}
        // onEditingFinish={Test2}
      />
      {/* <YesNoSelectionModal
        open={checkToSaveOpen}
        setOpen={setCheckToSaveOpen}
        title="바뀐 내용 저장"
        onYes={() => {
          ref.current?.getInstance().request('modifyData');
        }}
        onNo={() => ref.current?.getInstance().readData(1)}
        question="바뀐 내용이 있네요. 저장하실?"
      /> */}
      <TableSettingModal
        open={tableSettingOpen}
        setOpen={setTableSettingOpen}
        setTableWidth={(value) => {
          // setContainerWidth(value + 10);
          ref.current?.getInstance().setWidth(value);
        }}
        setTableHeight={(value) => ref.current?.getInstance().setHeight(value)}
        // initialData.map((_, i) => {
        // fontSize를 className으로 밖에 접근할 수 밖에 없는데, 제시된 함수가 기존 className에 추가하는 형식이라 우선적으로 이렇게 조치함.
        // ref.current?.getInstance().removeRowClassName(i, `tui-grid-container-${value - 1}`);
        // ref.current?.getInstance().removeRowClassName(i, `tui-grid-container-${value + 1}`);
        // ref.current?.getInstance().addRowClassName(i, `tui-grid-container-${value}`);
        // });
        // }}
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

export default TestBaseDataGrid;
