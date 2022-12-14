import {
  Box,
  IconButton,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { FieldArray, Form, Formik } from 'formik';
import * as yup from 'yup';
import BaseButton from '../button/BaseButton';
import TextInput from './TextInput';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import TextButton from '../button/TextButton';
import { useAddCertificate } from '../../query/certificate';
import { useState } from 'react';
import Loading from '../loading/Loading';
import { toastShow } from '../alert/ToastMessage';

interface CertificateInputTestProps {
  setIsDrawerOpen: (open: boolean) => void;
}

const CertSchema = yup.object({
  nceManageCertificate: yup.object({
    id: yup.string().required('증명서 번호는 필수임'),
    incoming: yup.string().required('수신자를 입력해주세요'),
    outgoing: yup.string().required('발신자를 입력해주셈'),
    date: yup.string().required('날짜를 입력해주세요'),
    incomingDepartment: yup.string().required('수신 소속은 필수값입니다'),
    outgoingDepartment: yup.string().required('발신 소속은 필수값입니다'),
    recipient: yup.string(),
    sender: yup.string(),
    remark: yup.string(),
  }),
  nceManageCertiList: yup.array().of(
    yup.object({
      equipmentLevel: yup.string().required(),
      equipmentMode: yup.string(),
      equipmentId: yup.string(),
      remarks: yup.string(),
    }),
  ),
});

export type ICertValues = yup.InferType<typeof CertSchema>;

/**
 * 이것은 같은 폴더 내 CertificateInput의 대체용 예시임.
 * @returns {JSX.Element} div
 */
function CertificateInputTest({ setIsDrawerOpen }: CertificateInputTestProps) {
  /**
   * 최초값. 처음 띄웠을 때 어떤 값이 input값에 들어가 있어야 한다면 이렇게 설정하시면 되고요,
   * 만약 api에서 불러오기를 하는 개념이라면 밑에 값 대신 받아온 데이터를 아래에다 집어넣어주셔야합니다
   */
  const initialValues: ICertValues = {
    nceManageCertificate: {
      id: '1234',
      date: '',
      incoming: '',
      outgoing: '',
      incomingDepartment: '',
      outgoingDepartment: '',
      recipient: '',
      sender: '',
      remark: '',
    },
    nceManageCertiList: [
      {
        equipmentLevel: '',
        equipmentMode: '',
        equipmentId: '',
        remarks: '',
      },
    ],
  };

  // 표 핸들링을 위한 header
  const tableHeader = ['등급', '자재명칭', '등록번호', '비고'];

  const {
    mutate: addCert,
    isLoading,
    isError,
    error: addCertError,
    isSuccess,
  } = useAddCertificate();

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={async (values, actions) => {
        console.log(values);
        try {
          // 이거를 하시면서 로딩을 걸어주시는 것도 좋습니다.
          // 로딩을 안걸면 사람들이 제출 버튼을 두번 누르거나 그럴 수도 있고(네트워크가 느리면 뭐가 안되는지 알고 버튼 계속 누름) 그러면 백엔드에 중복으로 데이터가 막 가니까 버튼 누르는거 막고 해야댐
          await addCert(values);
          // addCert는 작동 안할 수도 이써요. 제가 여기서 할 수가 없어요. 디버깅해보시면서 고쳐보세요.
          if (isError) {
            const { response } = addCertError as any;
            console.log('isError', isError);
            console.log('add', response);
            // 여기도 그리드처럼 별도 모듈 만드세요
            if (response.status === 404)
              toastShow({
                type: 'error',
                title: '서버 연결 실패',
                message: '서버에 연결 안됨',
              });
          }
          if (isSuccess) {
            actions.resetForm();
            // 상기의 resetForm은 써넣었던 input value들을 초기화 하는거
            // 그런 뒤 적당히 drawer를 종료시키시면 될듯
            setIsDrawerOpen(false);
          }
        } catch (error) {
          // 저는 지금 이걸 실제로 보낼 수가 없어서 콘솔로만 찍었는데, 에러 핸들링 로직 짜셔서 적당하게 유저한테 보여주시고,
          console.log('dfsd');
          // console.log('error', error);
          // console.log('addError', addCertError);
        }
      }}
      validationSchema={CertSchema}
    >
      {({ values, handleChange, isValid, touched, errors }) => (
        <Form>
          <Box
            sx={{
              display: 'grid',
              gap: 1,
              gridTemplateColumns: 'repeat(2, 1fr)',
              width: '100%',
              marginTop: 1,
            }}
          >
            {/* 이부분 적당한 로딩으로 디자인보면서 결정하시는게 맞을듯요, 아니면 useState로 로딩을 수동 컨트롤 */}
            {isLoading && <Loading />}
            <TextInput
              label="증명서 아이디"
              name="nceManageCertificate.id"
              value={values.nceManageCertificate.id}
              size="small"
              onChange={handleChange}
              error={touched.nceManageCertificate?.id && Boolean(errors.nceManageCertificate?.id)}
              variant="outlined"
              disabled
            />
            <TextInput
              label="발신"
              name="nceManageCertificate.outgoing"
              value={values.nceManageCertificate.outgoing}
              size="small"
              onChange={handleChange}
              error={
                touched.nceManageCertificate?.outgoing &&
                Boolean(errors.nceManageCertificate?.outgoing)
              }
              helperText={
                touched.nceManageCertificate?.outgoing && errors.nceManageCertificate?.outgoing
              }
              variant="outlined"
              autoFocus
            />
            <TextInput
              label="수신"
              name="nceManageCertificate.incoming"
              value={values.nceManageCertificate.incoming}
              size="small"
              onChange={handleChange}
              error={
                touched.nceManageCertificate?.incoming &&
                Boolean(errors.nceManageCertificate?.incoming)
              }
              helperText={
                touched.nceManageCertificate?.incoming && errors.nceManageCertificate?.incoming
              }
              variant="outlined"
            />
            <TextInput
              label="일자"
              type="date"
              name="nceManageCertificate.date"
              value={values.nceManageCertificate.date}
              size="small"
              onChange={handleChange}
              error={
                touched.nceManageCertificate?.date && Boolean(errors.nceManageCertificate?.date)
              }
              variant="outlined"
            />
            <TextInput
              label="발신 소속"
              name="nceManageCertificate.outgoingDepartment"
              value={values.nceManageCertificate.outgoingDepartment}
              size="small"
              onChange={handleChange}
              error={
                touched.nceManageCertificate?.outgoingDepartment &&
                Boolean(errors.nceManageCertificate?.outgoingDepartment)
              }
              helperText={
                touched.nceManageCertificate?.outgoingDepartment &&
                errors.nceManageCertificate?.outgoingDepartment
              }
              variant="outlined"
            />
            <TextInput
              label="수신 소속"
              name="nceManageCertificate.incomingDepartment"
              value={values.nceManageCertificate.incomingDepartment}
              size="small"
              onChange={handleChange}
              error={
                touched.nceManageCertificate?.incomingDepartment &&
                Boolean(errors.nceManageCertificate?.incomingDepartment)
              }
              variant="outlined"
            />
            <TextInput
              label="발신 성명"
              name="nceManageCertificate.sender"
              value={values.nceManageCertificate.sender}
              size="small"
              onChange={handleChange}
              error={
                touched.nceManageCertificate?.sender && Boolean(errors.nceManageCertificate?.sender)
              }
              variant="outlined"
            />
            <TextInput
              label="수신 성명"
              name="nceManageCertificate.recipient"
              value={values.nceManageCertificate.recipient}
              size="small"
              onChange={handleChange}
              error={
                touched.nceManageCertificate?.recipient &&
                Boolean(errors.nceManageCertificate?.recipient)
              }
              variant="outlined"
            />
          </Box>
          <TextInput
            label="비고"
            multiline
            rows={2}
            name="nceManageCertificate.remark"
            value={values.nceManageCertificate.remark}
            size="small"
            onChange={handleChange}
            error={
              touched.nceManageCertificate?.remark && Boolean(errors.nceManageCertificate?.remark)
            }
            variant="outlined"
          />
          {/* 그리드를 또 만들면 또 엄청 귀찮고 하기 싫으니까..일단 간단하게 하는 예시로 하죠 */}
          <FieldArray
            name="nceManageCertiList"
            validateOnChange={false}
            render={(arrayHelpers) => (
              <>
                <Table aria-label="cert-input-table">
                  <TableHead>
                    <TableRow>
                      {tableHeader.map((t) => (
                        <TableCell align="center" key={t}>
                          {t}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {values.nceManageCertiList?.map((cert, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <TextInput
                            name={`nceManageCertiList.${index}.equipmentLevel`}
                            error={Boolean(errors.nceManageCertiList)}
                            size="small"
                            onChange={handleChange}
                            variant="standard"
                          />
                        </TableCell>
                        <TableCell>
                          <TextInput
                            name={`nceManageCertiList.${index}.equipmentMode`}
                            size="small"
                            onChange={handleChange}
                            variant="standard"
                          />
                        </TableCell>
                        <TableCell>
                          <TextInput
                            name={`nceManageCertiList.${index}.equipmentId`}
                            size="small"
                            onChange={handleChange}
                            variant="standard"
                          />
                        </TableCell>
                        <TableCell>
                          <TextInput
                            name={`nceManageCertiList.${index}.remarks`}
                            size="small"
                            onChange={handleChange}
                            variant="standard"
                          />
                        </TableCell>
                        <TableCell align="right">
                          <IconButton
                            color="inherit"
                            aria-label="add"
                            onClick={() => arrayHelpers.remove(index)}
                          >
                            <RemoveCircleOutlineIcon fontSize="small" sx={{ opacity: 0.6 }} />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                <AddButtonWrapper>
                  <TextButton
                    color="inherit"
                    title="행 추가"
                    type="button"
                    onClick={() => arrayHelpers.push('')}
                  />
                </AddButtonWrapper>
              </>
            )}
          />

          <div style={{ textAlign: 'right', marginTop: 20 }}>
            <BaseButton title="등록" color="secondary" sx={{ width: '35%' }} disabled={isLoading} />
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default CertificateInputTest;

const AddButtonWrapper = styled('div')(() => ({
  width: '100%',
  textAlign: 'right',
}));
