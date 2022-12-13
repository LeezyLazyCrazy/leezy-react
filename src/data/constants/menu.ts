/**
 * 화면 좌측의 개별 메뉴를 구성하는 인터페이스
 */
// import { ReactElement } from "react";
// import Main from "../../pages/Main";

// 장비관리
import PageEquipmentInformation from '../../pages/equipment/equipment-information';
import PageEquipmentManufacture from '../../pages/equipment/equipment-manufacture';
import PageEquipmentStatusHistory from '../../pages/equipment/equipment-status-history';
import PageEquipmentManagement from '../../pages/equipment/equipment-management';
import PageEquipmentCertificate from '../../pages/equipment/equipment-certificate';
import PageEquipmentStatus from '../../pages/equipment/equipment-status';
// 자재관리
import PageMaterialCertificate from '../../pages/material/material-certificate';
import PageMaterialCertifyList from '../../pages/material/material-certify-list';
import PageMaterialManagement from '../../pages/material/material-management';
// 승인관리
import PageEquipmentApprovalHistory from '../../pages/approval/equipment-approval-history';
import PageEquipmentApproval1 from '../../pages/approval/equipment-approval-1';
import PageEquipmentApproval2 from '../../pages/approval/equipment-approval-2';
import PageEquipmentApproval3 from '../../pages/approval/equipment-approval-3';
import PageEquipmentApproval4 from '../../pages/approval/equipment-approval-4';
// 개발관리
import PageDevelopmentHistory from '../../pages/development/development-history';
import PageDevelopmentManagement from '../../pages/development/development-management';
import PageDevelopmentNeeds from '../../pages/development/development-needs';
import PageDevelopmentIssue from '../../pages/development/development-issue';
import PageDevelopmentRequirement from '../../pages/development/development-requirement';
import PageDevelopmentPersonal from '../../pages/development/development-personal';
import PageDevelopmentTest from '../../pages/development/development-test';
import PageDevelopmentEvaluate from '../../pages/development/development-evaluate';
import PageDevelopmentInspect from '../../pages/development/development-inspect';
// 제작업체관리
import PageManufactoryManagement from '../../pages/manufactory/manufactory-management';
import PageSecurityMeasureHistory from '../../pages/manufactory/security-measure-history';
import PageSecurityAccidentHistory from '../../pages/manufactory/security-accident-history';
import PageMaintenanceHistory from '../../pages/manufactory/maintenance-history';
// 유관기관관리
import PageAgencyManagement from '../../pages/agency/agency-management';
// 시스템관리
import PageTerminalManagement from '../../pages/system/terminal-management';
import PageQREquipManagement from '../../pages/system/QR-equip-management';
import PageQRcodeInOutHistory from '../../pages/system/QRcode-inout-history';
import PagePersonalManagement from '../../pages/system/personal-management';
import PageQREquipDetail from '../../pages/system/QR-equip-detail';
// 포럼
import PageForumNotice from '../../pages/forum/forum-notice';
import PageForumReference from '../../pages/forum/forum-reference';
import PageForumQuestions from '../../pages/forum/forum-questions';
import Detail from '../../pages/forum/detail';
import PageForumFreeBoard from '../../pages/forum/forum-free-board';

export interface MenuProps {
  id: string;
  name: string;
  parentUrl: string;
  type: 'dir' | 'page';
  element?: any;
  // 왼쪽 사이드바에서 표출될 페이지 설정하기 위해 추가
  show: boolean;
  subMenu?: MenuProps[];
}

/**
 * 화면 좌측의 메뉴를 구성하기 위하여 URL을 갖는 개별 메뉴 Object들을 배치한 배열
 */

export const menu: MenuProps[] = [
  {
    name: '장비관리',
    id: 'equipment',
    parentUrl: '',
    type: 'dir',
    show: true,
    subMenu: [
      {
        id: 'equipment-status',
        name: '장비보유현황',
        type: 'page',
        parentUrl: 'equipment',
        show: true,
        element: PageEquipmentStatus,
      },
      {
        id: 'equipment-information',
        name: '장비정보관리',
        type: 'page',
        parentUrl: 'equipment',
        show: true,
        element: PageEquipmentInformation,
      },
      {
        id: 'equipments-manufacture',
        name: '장비제작정보',
        type: 'page',
        parentUrl: 'equipment',
        show: true,
        element: PageEquipmentManufacture,
      },
      {
        id: 'equipment-status-history',
        name: '장비상태변경',
        type: 'page',
        parentUrl: 'equipment',
        show: true,
        element: PageEquipmentStatusHistory,
      },
      {
        id: 'equipment-management',
        name: '장비관리기록부',
        type: 'page',
        parentUrl: 'equipment',
        show: true,
        element: PageEquipmentManagement,
      },
      {
        id: 'equipment-certificate',
        name: '장비증명서',
        type: 'page',
        parentUrl: 'equipment',
        show: true,
        element: PageEquipmentCertificate,
      },
    ],
  },
  {
    name: '자재관리',
    id: 'material',
    parentUrl: '',
    type: 'dir',
    show: true,
    subMenu: [
      {
        id: 'material-certificate',
        name: '자재수발관리',
        type: 'page',
        parentUrl: 'material',
        show: true,
        element: PageMaterialCertificate,
      },
      {
        id: 'material-certify-list',
        name: '자재관리',
        type: 'page',
        parentUrl: 'material',
        show: true,
        element: PageMaterialCertifyList,
      },
      {
        id: 'material-management',
        name: '자재관리기록부',
        type: 'page',
        parentUrl: 'material',
        show: true,
        element: PageMaterialManagement,
      },
    ],
  },
  {
    name: '승인관리',
    id: 'approval',
    parentUrl: '',
    type: 'dir',
    show: true,
    subMenu: [
      {
        id: 'equipment-approval-history',
        name: '형식승인업무',
        type: 'page',
        parentUrl: 'approval',
        show: true,
        element: PageEquipmentApprovalHistory,
      },
      {
        id: 'equipment-approval-1',
        name: '사용승인업무',
        type: 'page',
        parentUrl: 'approval',
        show: true,
        element: PageEquipmentApproval1,
      },
      {
        id: 'equipment-approval-2',
        name: '제작승인업무',
        type: 'page',
        parentUrl: 'approval',
        show: true,
        element: PageEquipmentApproval2,
      },
      {
        id: 'equipment-approval-3',
        name: '파기승인업무',
        type: 'page',
        parentUrl: 'approval',
        show: true,
        element: PageEquipmentApproval3,
      },
      {
        id: 'equipment-approval-4',
        name: '국외반출승인업무',
        type: 'page',
        parentUrl: 'approval',
        show: true,
        element: PageEquipmentApproval4,
      },
    ],
  },
  {
    name: '개발관리',
    id: 'development',
    parentUrl: '',
    type: 'dir',
    show: true,
    subMenu: [
      {
        id: 'development-history',
        name: '개발이력관리',
        type: 'page',
        parentUrl: 'development',
        show: true,
        element: PageDevelopmentHistory,
      },
      {
        id: 'development-management',
        name: '개발과제정보관리',
        type: 'page',
        parentUrl: 'development',
        show: true,
        element: PageDevelopmentManagement,
      },
      {
        id: 'development-needs',
        name: '소요제기정보관리',
        type: 'page',
        parentUrl: 'development',
        show: true,
        element: PageDevelopmentNeeds,
      },
      {
        id: 'development-issue',
        name: '개발이슈정보관리',
        type: 'page',
        parentUrl: 'development',
        show: true,
        element: PageDevelopmentIssue,
      },
      {
        id: 'development-requirement',
        name: '요구사항정보관리',
        type: 'page',
        parentUrl: 'development',
        show: true,
        element: PageDevelopmentRequirement,
      },
      {
        id: 'development-personal',
        name: '개발담당자관리',
        type: 'page',
        parentUrl: 'development',
        show: true,
        element: PageDevelopmentPersonal,
      },
      {
        id: 'development-test',
        name: '개발시험정보관리',
        type: 'page',
        parentUrl: 'development',
        show: true,
        element: PageDevelopmentTest,
      },
      {
        id: 'development-evaluate',
        name: '개발평가정보관리',
        type: 'page',
        parentUrl: 'development',
        show: true,
        element: PageDevelopmentEvaluate,
      },
      {
        id: 'development-inspect',
        name: '안정성검증관리',
        type: 'page',
        parentUrl: 'development',
        show: true,
        element: PageDevelopmentInspect,
      },
    ],
  },
  {
    name: '제작업체관리',
    id: 'manufactory',
    parentUrl: '',
    type: 'dir',
    show: true,
    subMenu: [
      {
        id: 'manufactory-management',
        name: '제작업체관리',
        type: 'page',
        parentUrl: 'manufactory',
        show: true,
        element: PageManufactoryManagement,
      },
      {
        id: 'security-measure-history',
        name: '제작업체보안측정',
        type: 'page',
        parentUrl: 'manufactory',
        show: true,
        element: PageSecurityMeasureHistory,
      },
      {
        id: 'security-accident-history',
        name: '장비정비이력',
        type: 'page',
        parentUrl: 'manufactory',
        show: true,
        element: PageSecurityAccidentHistory,
      },
      {
        id: 'manufactory-history',
        name: '보안사고이력관리',
        type: 'page',
        parentUrl: 'manufactory',
        show: true,
        element: PageMaintenanceHistory,
      },
    ],
  },
  {
    name: '유관기관관리',
    id: 'agency',
    parentUrl: '',
    type: 'dir',
    show: true,
    subMenu: [
      {
        id: 'agency-management',
        name: '유관기관협의체관리',
        type: 'page',
        parentUrl: 'agency',
        show: true,
        element: PageAgencyManagement,
      },
    ],
  },
  {
    name: '시스템관리',
    id: 'system',
    parentUrl: '',
    type: 'dir',
    show: true,
    subMenu: [
      {
        id: 'terminal-management',
        name: '단말기정보관리',
        type: 'page',
        parentUrl: 'system',
        show: true,
        element: PageTerminalManagement,
      },
      {
        id: 'QR-equip-management',
        name: 'QR코드 정보 관리',
        type: 'page',
        parentUrl: 'system',
        show: true,
        element: PageQREquipManagement,
      },
      {
        id: 'QR-equip-detail',
        name: 'QR코드 정보 조회',
        type: 'page',
        parentUrl: 'system',
        show: true,
        element: PageQREquipDetail,
      },
      {
        id: 'QRcode-inout-history',
        name: 'QR코드 사용이력',
        type: 'page',
        parentUrl: 'system',
        show: true,
        element: PageQRcodeInOutHistory,
      },
      {
        id: 'personal-management',
        name: '사용자 정보 관리',
        type: 'page',
        parentUrl: 'system',
        show: true,
        element: PagePersonalManagement,
      },
    ],
  },
  {
    name: '포럼',
    id: 'forum',
    parentUrl: '',
    type: 'dir',
    show: true,
    subMenu: [
      {
        id: 'forum-notice',
        name: '공지사항',
        type: 'page',
        parentUrl: 'forum',
        show: true,
        element: PageForumNotice,
      },
      {
        id: 'forum-reference',
        name: '자료실',
        type: 'page',
        parentUrl: 'forum',
        show: true,
        element: PageForumReference,
      },
      {
        id: 'forum-questions',
        name: '자주묻는 질문',
        type: 'page',
        parentUrl: 'forum',
        show: true,
        element: PageForumQuestions,
      },
      {
        id: 'forum-freeboard',
        name: '자유 게시판',
        type: 'page',
        parentUrl: 'forum',
        show: true,
        element: PageForumFreeBoard,
      },
      {
        id: 'detail',
        name: '상세 페이지',
        type: 'page',
        parentUrl: 'forum',
        show: false,
        element: Detail,
      },
    ],
  },
];

// 2depth 까지 이름 flatten시킴.
// breadCrumb, 메뉴의 한국어명 찾기 등에 사용
export const flattenedMenu = () => {
  const result: { path: string; korean: string }[] = [];

  menu.map((m) => {
    result.push({
      path: m.id,
      korean: m.name,
    });
    if (m.subMenu !== undefined) {
      m.subMenu.map((sub) => {
        result.push({
          path: sub.id,
          korean: sub.name,
        });
        if (sub.subMenu !== undefined) {
          sub.subMenu.map((subSub) => {
            result.push({
              path: subSub.id,
              korean: sub.name,
            });
          });
        }
      });
    }
  });

  return result;
};
