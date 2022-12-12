import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  styled,
  Typography,
} from '@mui/material';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import ShortAlert from '../../components/alert/ShortAlert';
import DefaultBox from '../../components/box/DefaultBox';
import BaseButton from '../../components/button/BaseButton';
import TextInput from '../../components/form/TextInput';
import Container from '../../components/layout/Container';
import Loading from '../../components/loading/Loading';
import { InstitutionList } from '../../data/constants/institution';
import { useAuth } from '../../stores/useAuth';
import useInstitutionTypeStore from '../../stores/useInstitutionTypeStore';
import { IInstitutionType } from '../../types/institutionType';

const loginSchema = yup.object({
  id: yup.string().defined('아이디를 입력해주세요'),
  password: yup.string().defined('비밀번호를 입력해주세요'),
  institution: yup.string().defined('기관을 선택해주세요'),
});

type LoginValues = yup.InferType<typeof loginSchema>;

// TO_BE_CHECKED
// server side에서 여러 번 로그인 시 리밋 주는 것 코드 생성해서 받아올 것

function Login() {
  const initialValues: LoginValues = {
    institution: '',
    id: '',
    password: '',
  };
  const navigate = useNavigate();
  const [invalid, setInvalid] = useState(false);
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const { setInstitutionType } = useInstitutionTypeStore();

  return (
    <>
      <Container>
        <Root>
          <DefaultBox>
            <div style={{ margin: '5% 0px' }}>
              <Typography
                gutterBottom
                variant="h3"
                color="text"
                sx={{
                  // fontFamily: 'BlinkMacSystemFont',
                  // marginBottom: "2.5rem",
                  fontFamily: 'Hahmlet',
                }}
              >
                NCE-MS
              </Typography>
              <Typography
                gutterBottom
                variant="h1"
                color="text"
                sx={{
                  fontFamily: 'Hahmlet',
                  marginBottom: '2rem',
                }}
              >
                SYSTEM
              </Typography>
              {/* <Typography gutterBottom variant="h4"> 로그인 </Typography> */}
            </div>
            <Formik
              initialValues={initialValues}
              onSubmit={(values, actions) => {
                try {
                  setLoading(true);
                  setInvalid(false);
                  actions.resetForm();
                  if (values.id === 'testUser' && values.password === '1q2w3e!') {
                    setLoading(false);
                    setInstitutionType(values.institution as IInstitutionType);
                    signIn();
                    navigate('/index');
                  } else {
                    setInvalid(true);
                    setLoading(false);
                  }
                } catch (err) {
                  console.log(err);
                }
              }}
              validationSchema={loginSchema}
            >
              {({ values, handleChange, isValid, touched, errors }) => (
                <Form>
                  <FormControl sx={{ mb: 2 }} fullWidth>
                    <InputLabel id="institution">기관 종류</InputLabel>
                    <Select
                      labelId="institution"
                      name="institution"
                      value={values.institution}
                      label="기관"
                      onChange={handleChange}
                      error={touched.institution && Boolean(errors.institution)}
                    >
                      {InstitutionList.map((i) => (
                        <MenuItem key={i.type} value={i.type}>
                          {i.name}
                        </MenuItem>
                      ))}
                      <FormHelperText>{touched.institution && errors.institution}</FormHelperText>
                    </Select>
                  </FormControl>
                  <TextInput
                    label="아이디"
                    name="id"
                    value={values.id}
                    onChange={handleChange}
                    type="text"
                    error={touched.id && Boolean(errors.id)}
                    helperText={touched.id && errors.id}
                    variant="outlined"
                    autoFocus
                    sx={{ mb: '1.5%' }}
                  />
                  <TextInput
                    label="비밀번호"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    type="password"
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                    variant="outlined"
                    sx={{ mb: '3%' }}
                  />
                  {invalid && (
                    <ShortAlert
                      title="아이디 또는 비밀번호 오류"
                      severity="error"
                      text="아이디 또는 비밀번호가 맞지 않습니다"
                    />
                  )}
                  <BaseButton
                    size="large"
                    disabled={!isValid}
                    title="로그인"
                    color="primary"
                    sx={{
                      position: 'relative',
                      marginBottom: '1.5em',
                      width: '100%',
                      height: '2.5em',
                    }}
                  />
                  <ShortAlert title="" severity="error" />

                  {/* <AlertTitle>본 시스템은 비인가자 접근을 금지합니다.</AlertTitle> */}
                </Form>
              )}
            </Formik>
          </DefaultBox>
        </Root>
      </Container>
      {loading && <Loading />}
    </>
  );
}

export default Login;

const Root = styled('div')(() => ({
  margin: '10% 35%',
}));
