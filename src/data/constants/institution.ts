import { IInstitutionType } from '../../types/institutionType';

interface IInstitutionList {
  type: IInstitutionType;
  name: string;
}

/**
 * 로그인이 가능한 개별 기관의 이름 및 type list
 */
export const InstitutionList: IInstitutionList[] = [
  {
    type: 'nis',
    name: '국정원',
  },
  {
    type: 'gov',
    name: '정부부처',
  },
  {
    type: 'research',
    name: '국가보안연구원',
  },
  {
    type: 'manufacturer',
    name: '제작업체',
  },
];
