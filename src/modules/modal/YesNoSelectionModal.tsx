import { Typography } from '@mui/material';
import BaseButton from '../../components/button/BaseButton';
import BaseModal from '../../components/modal/BaseModal';

interface YesNoSelectionModalProps {
  open: boolean;
  // eslint-disable-next-line no-unused-vars
  setOpen: (value: boolean) => void;
  title: string;
  question: string;
  onYes: () => void;
  onNo: () => void;
}

/**
 * 모달 중 "정말로 그렇게 하시겠습니까?"류에 사용할 수 있는 예/아니오를 선택할 수 있도록 고안된 모달
 * @param {YesNoSelectionModalProps} YesNoSelectionModalProps
 * @returns {JSX.Element} React Component(Modal)
 */

function YesNoSelectionModal({
  open,
  setOpen,
  title,
  question,
  onYes,
  onNo,
}: YesNoSelectionModalProps) {
  return (
    <BaseModal open={open} setOpen={setOpen}>
      <Typography gutterBottom variant="h5" sx={{ mb: 2 }}>
        {title}
      </Typography>
      <Typography variant="body1">{question}</Typography>
      <div style={{ marginTop: 20, textAlign: 'right' }}>
        <BaseButton title="네" onClick={onYes} />
        <BaseButton
          title="아니요"
          sx={{ ml: 1 }}
          color="inherit"
          onClick={() => {
            setOpen(!open);
            onNo();
          }}
        />
      </div>
    </BaseModal>
  );
}

export default YesNoSelectionModal;
