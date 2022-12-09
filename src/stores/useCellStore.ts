/* eslint-disable no-unused-vars */
import create from 'zustand';

interface CellState {
  operateDepartment: string;
  modeApprovalName: string;
  manageAgency: string;
  gridData: string[];
  setOperateDepartment: (status1: string) => void;
  setModeApprovalName: (status2: string) => void;
  setManageAgency: (status3: string) => void;
  setGridData: (status4: string[]) => void;
}

/**
 * 현재 화면 오른쪽 위젯 바 열려있는지 닫혀있는지 확인하기 위한 전역 Context
 *
 */
const useCellStore = create<CellState>((set) => ({
  operateDepartment: '',
  modeApprovalName: '',
  manageAgency: '',
  gridData: [],
  setOperateDepartment: (status1) => set(() => ({ operateDepartment: status1 })),
  setModeApprovalName: (status2) => set(() => ({ modeApprovalName: status2 })),
  setManageAgency: (status3) => set(() => ({ manageAgency: status3 })),
  setGridData: (status4) => set(() => ({ gridData: status4 })),
}));

export default useCellStore;
