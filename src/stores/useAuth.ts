/* eslint-disable no-unused-vars */
import create from 'zustand';
import { persist } from 'zustand/middleware';
import { SSOUserInfoType } from '../types/auth/sso';

type UserActions = {
  authUser: SSOUserInfoType | null;
  isAuthenticated: boolean;
  setUser: (newUser: SSOUserInfoType) => void;
  signIn: () => Promise<void>;
  signOut: () => void;
};

// TO_BE_CHECKED
/**
 * Authentication, Authorization의 전역 관리 모듈.
 * 추후 업데이트 필요
 */

export const useAuth = create<UserActions>()(
  persist(
    (set, get) => ({
      authUser: null,
      isAuthenticated: false,
      setUser: (newUser: SSOUserInfoType) => set({ authUser: newUser, isAuthenticated: true }),
      signIn: async () => {
        try {
          // test user
          get().setUser({
            id: '12345',
            name: '홍길순',
            position: '',
            unit: {
              code: 'branch',
              name: '부서',
            },
            userGroups: ['test1', 'test2'],
            modeCode: 'real',
            theme: {
              main: '#19DBCE',
              // User_MainColors (미확정)
              // main: '#FFCA08', // 원
              // main: '#EF5C73', // 국보연
              // main: '#C5BC73', // 정부부처
              // main: '#3D9AE7', // 행정기관
              // main: '#2dc2b9', // 제작업체
              // User_SubColors (미확정)
              // sub: '#5A73A4', // 원
              // sub: '#089BD9', // 국보연
              // sub: '#307084', // 정부부처
              // sub: '#C81D3E', // 행정기관
              // sub: '#19DBCE', // 제작업체
            },
          });
        } catch (err) {
          console.log(err);
        }
      },
      signOut: () => {
        set({
          authUser: undefined,
        });
      },
    }),
    {
      name: 'auth-user',
      getStorage: () => sessionStorage,
    },
  ),
);
