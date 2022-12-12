import { Palette } from '@mui/material';

/**
 * Toast UI 용 데이터 그리드 스타일 설정 파일
 * @param palette
 * @returns
 */
export const gridStyles = (palette: Palette) => {
  const { background, divider, text, action, primary, secondary, error } = palette;
  return {
    selection: {
      background: background.paper,
    },
    scrollbar: {
      background: background.paper,
      border: divider,
      emptySpace: background.paper,
      thumb: divider,
      active: divider,
    },
    row: {
      hover: {
        background: background.default,
      },
    },
    area: {
      header: {
        border: divider,
        background: background.paper,
      },
      body: {
        background: background.paper,
      },
      summary: {
        background: background.default,
        border: divider,
        // text: text.primary,
      },
    },
    cell: {
      normal: {
        background: background.paper,
        text: text.primary,
        border: divider,
        showVerticalBorder: true,
      },
      disabled: {
        background: action.disabledBackground,
      },
      required: {
        background: 'none',
      },
      invalid: {
        text: error.main,
        background: 'none',
      },
      header: {
        background: 'none',
        border: divider,
        text: text.primary,
        showVerticalBorder: true,
        showHorizontalBorder: true,
      },
      selectedHeader: {
        background: background.default,
      },
      selectedRowHeader: {
        background: background.default,
      },
      summary: {
        background: background.default,
        border: background.default,
        text: text.primary,
      },
      rowHeader: {
        background: 'none',
        border: divider,
        text: text.primary,
      },
      editable: {
        background: background.paper,
      },
      focused: {
        background: primary.main,
        border: secondary.main,
      },
    },
    frozenBorder: {
      border: divider,
    },
    heightResizeHandle: {
      background: background.paper,
      border: divider,
    },
    pagination: {},
    outline: {
      border: divider,
      showVerticalBorder: false,
    },
  };
};
