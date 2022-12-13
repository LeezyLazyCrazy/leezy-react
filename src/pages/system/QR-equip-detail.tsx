import { TableRow } from '@mui/material';
import axios from 'axios';
import { useRef } from 'react';
import BaseButton from '../../components/button/BaseButton';
import SimpleTable from '../../components/dataGrid/simpleTable/SimpleTable';
import { SimpleTableCellText } from '../../components/dataGrid/simpleTable/SimpleTableCellDisplay';
import TextInput from '../../components/form/TextInput';
import { API_URL } from '../../query';
import QrStore from '../../stores/useQrCode';

// inputBox 포커싱
function focusInput(inputRef: { current: { select: () => void } | null }) {
  if (inputRef.current !== null) {
    inputRef.current.select();
  }
}

function PageQREquipDetail() {
  const { qrCodeInfo, QrCodeId, setQrCodeId, getQrCodeInfo } = QrStore();
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <BaseButton
        title="인쇄 테스트 버튼"
        onClick={(e) => {
          const data = {
            id: `${QrCodeId}`,
          };

          axios.post(`${API_URL}/api/qr/print`, data);
        }}
      />
      <TextInput
        label="QR코드 정보 입력"
        inputRef={inputRef}
        onFocus={(e) => {
          focusInput(inputRef);
        }}
        onChange={(e) => {
          setQrCodeId(e.target.value);
        }}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            getQrCodeInfo(QrCodeId);
            focusInput(inputRef);
          }
        }}
        type="text"
        variant="outlined"
        autoFocus
        sx={{ mb: '-1%', mt: '1%' }}
      />
      <SimpleTable head={['이름', '설명', '타입', '일자', '그룹', '부서']}>
        {qrCodeInfo!.map((user: any) => (
          <TableRow key={user.nm}>
            <SimpleTableCellText text={user.nm} />
            <SimpleTableCellText text={user.dsc} />
            <SimpleTableCellText text={user.type} />
            <SimpleTableCellText text={user.dt} />
            <SimpleTableCellText text={user.group} />
            <SimpleTableCellText text={user.dept} />
          </TableRow>
        ))}
      </SimpleTable>
    </>
  );
}

export default PageQREquipDetail;
