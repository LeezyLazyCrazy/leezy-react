import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { API_URL } from '.';
import { ICertValues } from '../components/form/CertificateInputTest';

/**
 * certificateInputText.tsx에서 cert를 추가할 떄 쓰는 함수
 * 여기서는 이걸 test할 수가 없으므로 직접 건드려가면서 수행해 보세요.
 * 이거를 이해하려면 react-query를 이해해야 하는데
 * 아래의 글 참조
 * https://oyg0420.tistory.com/entry/React-Query-%EC%98%88%EC%A0%9C%EB%A1%9C-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0
 */
export const useAddCertificate = () => {
  const queryClient = useQueryClient();

  const addNewCert = (newCert: ICertValues) =>
    axios.post(`${API_URL}/api/manage/manage-Certificate`, newCert);

  return useMutation(addNewCert);
};
