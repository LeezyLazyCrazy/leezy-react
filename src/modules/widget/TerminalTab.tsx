import { Divider, styled } from '@mui/material';
import DefaultBox from '../../components/box/DefaultBox';
import WidgetTitleBox from '../../components/box/textBox/WidgetTitleBox';
import StatusBox from './StatusBox';

// Widget에서 현재 전체 상황을 보여주는 블록
/**
 * 화면 맨 오른쪽의 아이콘으로 구성된 Vertical Tab 내의 테이블을 쌀 Wrapper 형태의 Div로 상태바를 구현한 예시임
 * @returns {JSX.Element} React Component
 *
 */
function WarningTab() {
  return (
    <Root>
      <WidgetTitleBox title="단말기정보관리" />
      {/* <StatusBox severity="danger" title="위험" desc="왕왕 50%" /> */}
      <StatusBox severity="normal" title="정상" desc="단말기ID" />
      {/* <StatusBox severity="warn" title="경고" desc="35% Operation Rate " /> */}
      <Divider sx={{ marginBottom: 1 }} />
      <WidgetTitleBox title="단말기설명" />
      <DefaultBox isBackgroundPaper={false}>단말기 형태</DefaultBox>
      <Divider sx={{ marginBottom: 1 }} />
      <DefaultBox isBackgroundPaper={false}>단말기 모델명</DefaultBox>
      <Divider sx={{ marginBottom: 1 }} />
      <DefaultBox isBackgroundPaper={false}>단말기 일련번호</DefaultBox>
      <Divider sx={{ marginBottom: 1 }} />
      <DefaultBox isBackgroundPaper={false}>단말기 제조사명</DefaultBox>
      <Divider sx={{ marginBottom: 1 }} />
      <DefaultBox isBackgroundPaper={false}>단말기 제조일자</DefaultBox>
    </Root>
  );
}

export default WarningTab;

const Root = styled('div')(() => ({
  padding: 5,
}));
