import { Box, Button, ButtonGroup, styled, Tooltip } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';

interface DataGridToolBarProps {
  addNewRow: () => void;
  removeRows: () => void;
  exportFile: () => void;
  openTableSetting: () => void;
  openSaveSetting: () => void;
  openDeleteSetting: () => void;
  // openAddSetting: () => void;
  // openApprovalSetting: () => void;
}

/**
 * Toast UI 사용 시, 테이블 상단에 뜨는 툴바 설정
 * @param DataGridToolBarProps DataGridToolBarProps
 * @returns {JSX.Element} React Component(div)
 */
function DataGridToolbar({
  addNewRow,
  exportFile,
  openDeleteSetting,
  openSaveSetting,
}: DataGridToolBarProps) {
  const ToolBarOptions = [
    {
      id: 0,
      btns: [
        {
          id: 0,
          title: '새로운 행 추가',
          key: 'new-row',
          icon: <AddBoxIcon fontSize="small" />,
          onClick: addNewRow,
        },
        {
          id: 1,
          title: '파일로 내보내기',
          key: 'export-as-file',
          icon: <FileDownloadIcon fontSize="small" />,
          onClick: exportFile,
        },
        {
          id: 2,
          title: '삭제',
          key: 'delete',
          icon: <DeleteIcon fontSize="small" />,
          onClick: openDeleteSetting,
        },
        {
          id: 3,
          title: '저장',
          key: 'save',
          icon: <SaveIcon fontSize="small" />,
          onClick: openSaveSetting,
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
    </Root>
  );
}

export default DataGridToolbar;

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
