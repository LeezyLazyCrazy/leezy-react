import React from 'react';
import { Alert, AlertTitle, styled } from '@mui/material';

/**
 * 경고/안내 블록 관련 인터페이스
 *
 * @interface
 */
interface ShortAlertProps {
  title: string;
  severity: 'error' | 'warning' | 'info' | 'success';
  text?: string;
  title: string;
  severity: 'error' | 'warning' | 'info' | 'success';
  text?: string;
  // variant?: string;
}

const defaultSecurityAccessWarning = '본 시스템은 비인가자 접근을 금지합니다.';

/**
 * 경고, 정보, 성공 등의 여부를 메시지와 함께 출력하여 유저에게 알려주는 Component로 div block의 형태임.
 *
 * @param {ShortAlertProps} ShortAlertProps
 * @returns {JSX.Element} React Component
 */
function ShortAlert({ title, severity, text = defaultSecurityAccessWarning }: ShortAlertProps) {
  return (
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    <Root>
      <Alert severity={severity} variant="outlined">
        <AlertTitle>{title}</AlertTitle>
        <div>{text}</div>
      </Alert>
    </Root>
  );
}

export default ShortAlert;

const Root = styled('div')(() => ({
  // borderRadius: 4,
  // fontWeight: 600,
  // padding: 5,
  // margin:10,
  // width: "fit-content",
  margin: '0.05% 0%',
}));
