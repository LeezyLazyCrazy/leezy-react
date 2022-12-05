/* eslint-disable no-unused-vars */
import create from 'zustand';

interface CellState {
  operateDepartment: string;
  modeApprovalName: string;
  manageAgency: string;
  setOperateDepartment: (status1: string) => void;
  setModeApprovalName: (status2: string) => void;
  setManageAgency: (status3: string) => void;
}

/**
 * 현재 화면 오른쪽 위젯 바 열려있는지 닫혀있는지 확인하기 위한 전역 Context
 *
 */
const useCellStore = create<CellState>((set) => ({
  operateDepartment: '',
  modeApprovalName: '',
  manageAgency: '',
  setOperateDepartment: (status1) => set(() => ({ operateDepartment: status1 })),
  setModeApprovalName: (status1) => set(() => ({ modeApprovalName: status1 })),
  setManageAgency: (status3) => set(() => ({ manageAgency: status3 })),
}));

export default useCellStore;
