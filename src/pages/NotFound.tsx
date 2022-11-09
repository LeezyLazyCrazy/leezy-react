import { styled, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import BaseButton from '../components/button/BaseButton';
import LandingFooter from '../components/layout/LandingFooter';
import CenteredDiv from '../components/box/CenteredDiv';

function NotFound() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const BtnWrapper = styled('div')(() => ({
    marginTop: 30,
  }));

  return (
    <>
      <CenteredDiv>
        <Typography gutterBottom variant="h1">
          404
        </Typography>
        <Typography variant="h4">존재하지 않는 페이지입니다</Typography>
        <BtnWrapper>
          <BaseButton title="돌아가기" type="button" onClick={goBack} />
        </BtnWrapper>
      </CenteredDiv>
      <LandingFooter />
    </>
  );
}

export default NotFound;
