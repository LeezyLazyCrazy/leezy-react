import create from 'zustand';
import { IInstitutionType } from '../types/institutionType';

interface InstitutionState {
  institutionType: IInstitutionType;
  setInstitutionType: (arg1: IInstitutionType) => void;
}

/**
 * 현재 모드가 어떤 기관의 모드인지 관리하는 Context
 *
 * - type: 기관명
 * - setType: 기관을 바꿈
 */
const useInstitutionTypesStore = create<InstitutionState>((set) => ({
  institutionType: 'nis',
  setInstitutionType: (institutionType: IInstitutionType) => set({ institutionType }),
}));

export default useInstitutionTypesStore;
