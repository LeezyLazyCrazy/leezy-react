import Grid from '@toast-ui/react-grid';
import TuiGrid from 'tui-grid';
import 'tui-grid/dist/tui-grid.css';
import { OptColumn, OptHeader } from 'tui-grid/types/options';
import '../../styles/dataGrid/index.css';
import { createRef, useEffect, useState } from 'react';
import useThemeStore from '../../stores/useThemeStore';
import { theme } from '../../styles/theme';
import EditToolbar from './EditToolbar';
import TableSettingModal from './TableSettingModal';
import HeaderSettingModal from './HeaderSettingModal';
import { gridStyles } from './dataGridStyle';
import { API_URL } from '../../query';
import useMenuBarStore from '../../stores/useMenuBarStore';
import useRightWidgetBarStore from '../../stores/useRightWidgetBarStore';
import { DataSource } from 'tui-grid/types/dataSource';
import { toastShow } from '../alert/ToastMessage';
import { gridErrorMessage } from './errorHandling/errorMessage';
import { gridApiErrorMessage } from './errorHandling/apiErrorMessage';

interface EditDataGridProps {
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
 * @param {EditDataGridProps} EditDataGridProps
 * @returns {JSX.Element} React Component
 */
function onClick(e: any) {
  console.log('test');
  console.log(e.rowKey, e.columnName);
}

function EditDataGrid({
  tableName,
  columns,
  frozenColumn = 1,
  header = { height: 60 },
  showToolbar = true,
  onSearchClick,
}: EditDataGridProps) {
  // grid styles
  const { isDark } = useThemeStore();
  const { palette } = theme(isDark);
  TuiGrid.applyTheme('default', gridStyles(palette));

  // grid language
  TuiGrid.setLanguage('ko');

  const ref = createRef<Grid>();

  // 그리드 너비 세팅
  const [tableSettingOpen, setTableSettingOpen] = useState(false);
  const [headerSettingOpen, setHeaderSettingOpen] = useState(false);

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

  // 윈도우의 너비에 맞추어 표의 사이즈를 변화시킴
  useEffect(() => {
    const widgetWidth = isWidgetBarOpen ? 430 : 130;
    const menubarWidth = isMenuBarOpen ? 210 : 100;

    ref.current?.getInstance().setWidth(innerWidth - widgetWidth - menubarWidth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isWidgetBarOpen, isMenuBarOpen]);

  // 행 고정 관련
  const [frozenCount, setFrozenCount] = useState(frozenColumn);

  // const [detailSettingOpen, setDetailSettingOpen] = useState(false);

  // 행 추가
  const appendRow = () => {
    ref.current?.getInstance().appendRow({});
  };

  // 데이터 저장/불러오기 관련
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

  // 데이터 저장하기
  const modifyDataToApi = () => {
    const validatedResult = ref.current?.getInstance().validate();
    if (validatedResult!.length > 0) {
      toastShow({
        type: 'error',
        title: '데이터가 잘못 작성되었습니다',
        message: gridErrorMessage(validatedResult!, columns).join('\r\n'),
      });
    } else {
      ref.current?.getInstance().request('modifyData');
    }
  };

  return (
    <div style={{ width: 'auto' }}>
      {/* <SearchDrawer /> */}
      {showToolbar && (
        <EditToolbar
          addNewRow={appendRow}
          refresh={() => ref.current?.getInstance().readData(1)}
          exportFile={() => ref.current?.getInstance().export('csv')}
          openTableSetting={() => setTableSettingOpen(true)}
          openHeaderSetting={() => setHeaderSettingOpen(true)}
          openDetailSetting={() => {
            setIsBarOpen(true);
            setSelectedTab(1);
          }}
          // openSearchSetting={onSearchClick}
          openDeleteSetting={() => {
            ref.current?.getInstance().removeCheckedRows();
            ref.current?.getInstance().request('deleteData');
          }}
          openSaveSetting={() => {
            console.log(ref.current?.getInstance().getData());
            modifyDataToApi();
          }}
          removeRows={() => ref.current?.getInstance().removeCheckedRows()}
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
        onClick={onClick}
        onSuccessResponse={() =>
          toastShow({
            type: 'success',
            title: '데이터 저장 완료',
            message: '데이터를 저장하였습니다.',
          })
        }
        onBeforeRequest={(data: any) =>
          // 이 부분에서 데이터 추가 조작을 하든 해야 할 것 같은데 확인이 필요함(pen)
          console.log('beforeRequest', data)
        }
        onErrorResponse={(error: any) => gridApiErrorMessage(error.xhr)}
      />
      <TableSettingModal
        open={tableSettingOpen}
        setOpen={setTableSettingOpen}
        setTableWidth={(value) => {
          // setContainerWidth(value + 10);
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

export default EditDataGrid;
