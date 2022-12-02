import { Box, Button, ButtonGroup, styled, Tooltip } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import TopicIcon from '@mui/icons-material/Topic';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import AddBoxIcon from '@mui/icons-material/AddBox';
// import FileDownloadIcon from '@mui/icons-material/FileDownload';

interface SummaryDataGridToolBarProps {
  addNewRow: () => void;
  refresh: () => void;
  onFilter?: () => void;
  openTableSetting: () => void;
  openHeaderSetting: () => void;
  openDetailSetting: () => void;
  openSearchSetting: () => void;
  openSaveSetting: () => void;
  openDeleteSetting: () => void;
}

/**
 * Toast UI 사용 시, 테이블 상단에 뜨는 툴바 설정
 * @param SummaryDataGridToolBarProps DataGridToolBarProps
 * @returns {JSX.Element} React Component(div)
 */
function SummaryDataGridToolbar({
  addNewRow,
  refresh,
  onFilter,
  openTableSetting,
  openHeaderSetting,
  openDetailSetting,
  openSearchSetting,
}: SummaryDataGridToolBarProps) {
  const ToolBarOptions = [
    {
      id: 0,
      btns: [
        {
          id: 0,
          title: '새로고침',
          key: 'refresh',
          icon: <RefreshIcon fontSize="small" />,
          onClick: refresh,
        },
        {
          id: 1,
          title: '테이블 설정',
          key: 'table-setting',
          icon: <AspectRatioIcon fontSize="small" />,
          onClick: openTableSetting,
        },
        {
          id: 2,
          title: '헤더 설정',
          key: 'header-setting',
          icon: <TopicIcon fontSize="small" />,
          onClick: openHeaderSetting,
        },
        {
          id: 3,
          title: '새로운 행 추가',
          key: 'new-row',
          icon: <AddBoxIcon fontSize="small" />,
          onClick: addNewRow,
        },
      ],
    },
    //     {
    //       id: 2,
    //       title: '파일로 내보내기',
    //       key: 'export-as-file',
    //       icon: <FileDownloadIcon fontSize="small" />,
    //       onClick: () => null,
    //     },
    //   ],
    // },
    {
      id: 1,
      btns: [
        {
          id: 0,
          title: '세부사항 보기',
          key: 'details-file',
          icon: <FileOpenIcon fontSize="small" />,
          onClick: openSearchSetting,
        },
        {
          id: 1,
          title: '상세조회',
          key: 'details-file',
          icon: <SearchIcon fontSize="small" />,
          onClick: openDetailSetting,
        },
      ],
    },
  ];

  return (
    <Root>
      <LeftBar>
        {ToolBarOptions.map((group) => (
          <BtnGroupWrapper key={group.id}>
            <ButtonGroup size="small" variant="text" aria-label="datagrid-toolbar">
              {group.btns.map((btn) => (
                <Tooltip key={btn.id} title={btn.title}>
                  <IconButton onClick={btn.onClick} key={btn.key}>
                    {btn.icon}
                  </IconButton>
                </Tooltip>
              ))}
            </ButtonGroup>
          </BtnGroupWrapper>
        ))}
      </LeftBar>
      <BtnGroupWrapper>
        <ButtonGroup size="small" variant="text" aria-label="datagrid-toolbar">
          <Tooltip title="필터">
            <IconButton onClick={onFilter}>
              <FilterAltIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </ButtonGroup>
      </BtnGroupWrapper>
    </Root>
  );
}

export default SummaryDataGridToolbar;

const Root = styled('div')(() => ({
  display: 'flex',
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: '1%',
}));

const LeftBar = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
}));

const BtnGroupWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  background: theme.palette.background.paper,
  marginRight: '.8%',
  borderRadius: 4,
  padding: 8,
  height: 'fit-content',
  width: 'fit-content',
  '& > *': {
    m: 1,
  },
}));

const IconButton = styled(Button)(({ theme }) => ({
  padding: 0,
  '&:hover': {
    backgroundColor: 'transparent',
    color: theme.palette.secondary.light,
  },
}));
