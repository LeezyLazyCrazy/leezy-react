import { Dialog, styled } from '@mui/material';
import { ReactNode } from 'react';

interface BaseModalProps {
  open: boolean;
  // eslint-disable-next-line no-unused-vars
  setOpen: (value: boolean) => void;
  children: ReactNode;
}

/**
 * 기본적인 모달(a.k.a 팝업) 의 틀 구성
 * @param {BaseModalProps}  BaseModalProps
 * @returns {JSX.Element} React Component
 */
function BaseModal({ open, setOpen, children }: BaseModalProps) {
  return (
    <Dialog maxWidth="lg" onClose={setOpen} open={open}>
      <Root>{children}</Root>
    </Dialog>
  );
}

export default BaseModal;

const Root = styled('div')(() => ({
  minWidth: 600,
  padding: '4%',
}));
