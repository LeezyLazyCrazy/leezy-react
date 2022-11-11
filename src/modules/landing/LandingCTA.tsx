import { Typography, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Logo512 from '../../assets/logos/Logo512';
import ShortAlert from '../../components/alert/ShortAlert';
import DefaultBox from '../../components/box/DefaultBox';
import BaseButton from '../../components/button/BaseButton';

/**
 * 랜딩 페이지 내 Call To Action 모듈
 * @returns {JSX.Element} React Component
 */
function MainHeader() {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/auth/login');
  };

  return (
    <Root>
      <DefaultBox>
        <TitleWrapper>
          {/* <Typography variant="h6" color="primary">

					</Typography> */}
          <Typography variant="h1">NCE-MS SYSTEM</Typography>
        </TitleWrapper>
        <BaseButton
          title="로그인"
          color="primary"
          size="large"
          onClick={navigateToLogin}
          sx={{ margin: '10% 0px' }}
        />
        <ShortAlert title="Warning" severity="error" />
      </DefaultBox>
      <div>
        <Logo512 width={280} />
      </div>
    </Root>
  );
}

export default MainHeader;

const Root = styled('div')(({ theme }) => ({
  paddingTop: '10%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

const TitleWrapper = styled('div')(() => ({
  margin: '5% 0px',
}));
