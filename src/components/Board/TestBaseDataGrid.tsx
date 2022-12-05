import Grid from '@toast-ui/react-grid';
import TuiGrid from 'tui-grid';
import 'tui-grid/dist/tui-grid.css';
import { OptColumn, OptHeader } from 'tui-grid/types/options';
import '../../styles/dataGrid/index.css';
import { createRef, useEffect, useState } from 'react';
import useThemeStore from '../../stores/useThemeStore';
import { theme } from '../../styles/theme';
import DataGridToolbar from '../dataGrid/DataGridToolbar';
import TableSettingModal from '../dataGrid/TableSettingModal';
import HeaderSettingModal from '../dataGrid/HeaderSettingModal';
import { gridStyles } from '../dataGrid/dataGridStyle';
import { API_URL } from '../../query';
import useMenuBarStore from '../../stores/useMenuBarStore';
import useRightWidgetBarStore from '../../stores/useRightWidgetBarStore';
import { DataSource } from 'tui-grid/types/dataSource';
import { useNavigate } from 'react-router-dom';
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
 * Toast UI Tui Grid의 기본적인 구현체임.
 *
 * 관련 라이브러리에 대해서는 다음을 참고 {@link https://ui.toast.com/tui-grid ToastUI Grid }
 *
 * 해당 컴포넌트는 아직 어떻게 쓸지 잡힌 것이 없으므로 추후 설명을 보충할 예정
 * @param {BaseDataGridProps} BaseDataGridProps
 * @returns {JSX.Element} React Component
 */

function BaseDataGrid({
  tableName,
  columns,
  frozenColumn = 1,
  header = { height: 60 },
  showToolbar = true,
  onSearchClick,
}: BaseDataGridProps) {
  const navigate = useNavigate();

  // 행 추가 시 navigate함수 사용을 막고 행 추가가 아닐 시 navigate함수를 사용하여 데이터가 추가적인 수정 제한
  const Test = () => {
    navigate('/forum/detail');
  };

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
    // columns.map((c) => c.editor = {type: 'text'} );
    ref.current?.getInstance().setColumnValues('writer', 'jhs');
    // ref.current?.getInstance().setColumns(dataGridKeys);
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

  // const testData: any[] = [
  //   {
  //     title: '제목입니다',
  //     writer: 'JHS',
  //     content: '내용입니다',
  //     writeDate: '2022-10-10',
  //     editDate: '2022-10-12',
  //   },
  // ];

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
          openSaveSetting={() => ref.current?.getInstance().request('modifyData')}
          removeRows={() => ref.current?.getInstance().removeCheckedRows()}
          exportFile={() => ref.current?.getInstance().export('csv')}
          copyToClipboard={() => ref.current?.getInstance().copyToClipboard()}
        />
      )}
      <Grid
        ref={ref}
        data={dataSource}
        // data={testData}
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

export default BaseDataGrid;
