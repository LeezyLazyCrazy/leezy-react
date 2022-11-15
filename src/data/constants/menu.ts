/**
 * 화면 좌측의 개별 메뉴를 구성하는 인터페이스
 */
// import { ReactElement } from "react";
// import Main from "../../pages/Main";

// 장비관리
import PageEquipmentInformation from '../../pages/equipments/equipment-information';
import PageEquipmentManufacture from '../../pages/equipments/equipment-manufacture';
import PageEquipmentStatusHistory from '../../pages/equipments/equipment-status-history';
import PageEquipmentManagement from '../../pages/equipments/equipment-management';
import PageEquipmentCertificate from '../../pages/equipments/equipment-certificate';
import PageEquipmentStatus from '../../pages/equipments/equipment-status';
// 자재관리
import PageMaterialCertificate from '../../pages/materials/material-certificate';
import PageMaterialCertifyList from '../../pages/materials/material-certify-list';
import PageMaterialManagement from '../../pages/materials/material-management';
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

export interface MenuProps {
  id: string;
  name: string;
  parentUrl: string;
  type: 'dir' | 'page';
  element?: any;
  subMenu?: MenuProps[];
}

/**
 * 화면 좌측의 메뉴를 구성하기 위하여 URL을 갖는 개별 메뉴 Object들을 배치한 배열
 */

export const menu: MenuProps[] = [
  {
    name: '장비관리',
    id: 'equipments',
    parentUrl: '',
    type: 'dir',
    subMenu: [
      {
        id: 'equipment-information',
        name: '장비정보관리',
        type: 'page',
        parentUrl: 'equipment',
        element: PageEquipmentInformation,
      },
      {
        id: 'equipments-manufacture',
        name: '장비제작정보',
        type: 'page',
        parentUrl: 'equipment',
        element: PageEquipmentManufacture,
      },
      {
        id: 'equipment-status-history',
        name: '장비상태변경',
        type: 'page',
        parentUrl: 'equipment',
        element: PageEquipmentStatusHistory,
      },
      {
        id: 'equipment-management',
        name: '장비관리기록부',
        type: 'page',
        parentUrl: 'equipment',
        element: PageEquipmentManagement,
      },
      {
        id: 'equipment-certificate',
        name: '장비수발관리',
        type: 'page',
        parentUrl: 'equipment',
        element: PageEquipmentCertificate,
      },
      {
        id: 'equipment-status',
        name: '장비보유현황',
        type: 'page',
        parentUrl: 'equipment',
        element: PageEquipmentStatus,
      },
    ],
  },
  {
    name: '자재관리',
    id: 'materials',
    parentUrl: '',
    type: 'dir',
    subMenu: [
      {
        id: 'material-certificate',
        name: '자재수발관리',
        type: 'page',
        parentUrl: 'material-Certificate',
        element: PageMaterialCertificate,
      },
      {
        id: 'material-certify-list',
        name: '자재관리',
        type: 'page',
        parentUrl: 'material-certify-list',
        element: PageMaterialCertifyList,
      },
      {
        id: 'material-management',
        name: '자재관리기록부',
        type: 'page',
        parentUrl: 'material-management',
        element: PageMaterialManagement,
      },
    ],
  },
  {
    name: '승인관리',
    id: 'approval',
    parentUrl: '',
    type: 'dir',
    subMenu: [
      {
        id: 'equipment-approval-history',
        name: '형식승인업무',
        type: 'page',
        parentUrl: 'equipment-approval-history',
        element: PageEquipmentApprovalHistory,
      },
      {
        id: 'equipment-approval-1',
        name: '사용승인업무',
        type: 'page',
        parentUrl: 'equipment-approval-1',
        element: PageEquipmentApproval1,
      },
      {
        id: 'equipment-approval-2',
        name: '제작승인업무',
        type: 'page',
        parentUrl: 'equipment-approval-2',
        element: PageEquipmentApproval2,
      },
      {
        id: 'equipment-approval-3',
        name: '파기승인업무',
        type: 'page',
        parentUrl: 'equipment-approval-3',
        element: PageEquipmentApproval3,
      },
      {
        id: 'equipment-approval-4',
        name: '국외반출승인업무',
        type: 'page',
        parentUrl: 'equipment-approval-4',
        element: PageEquipmentApproval4,
      },
    ],
  },
  {
    name: '개발관리',
    id: 'development',
    parentUrl: '',
    type: 'dir',
    subMenu: [
      {
        id: 'development-history',
        name: '개발이력관리',
        type: 'page',
        parentUrl: 'development',
        element: PageDevelopmentHistory,
      },
      {
        id: 'development-management',
        name: '개발과제정보관리',
        type: 'page',
        parentUrl: 'development',
        element: PageDevelopmentManagement,
      },
      {
        id: 'development-needs',
        name: '소요제기정보관리',
        type: 'page',
        parentUrl: 'development',
        element: PageDevelopmentNeeds,
      },
      {
        id: 'development-issue',
        name: '개발이슈정보관리',
        type: 'page',
        parentUrl: 'development',
        element: PageDevelopmentIssue,
      },
      {
        id: 'development-requirement',
        name: '요구사항정보관리',
        type: 'page',
        parentUrl: 'development',
        element: PageDevelopmentRequirement,
      },
      {
        id: 'development-personal',
        name: '개발담당자관리',
        type: 'page',
        parentUrl: 'development',
        element: PageDevelopmentPersonal,
      },
      {
        id: 'development-test',
        name: '개발시험정보관리',
        type: 'page',
        parentUrl: 'development',
        element: PageDevelopmentTest,
      },
      {
        id: 'development-evaluate',
        name: '개발평가정보관리',
        type: 'page',
        parentUrl: 'development',
        element: PageDevelopmentEvaluate,
      },
      {
        id: 'development-inspect',
        name: '안정성검증관리',
        type: 'page',
        parentUrl: 'development',
        element: PageDevelopmentInspect,
      },
    ],
  },
  {
    name: '제작업체관리',
    id: 'manufactory',
    parentUrl: '',
    type: 'dir',
    subMenu: [
      {
        id: 'manufactory-management',
        name: '제작업체관리',
        type: 'page',
        parentUrl: 'manufactory',
        element: PageManufactoryManagement,
      },
      {
        id: 'security-measure-history',
        name: '제작업체보안측정',
        type: 'page',
        parentUrl: 'manufactory',
        element: PageSecurityMeasureHistory,
      },
      {
        id: 'security-accident-history',
        name: '장비정비이력',
        type: 'page',
        parentUrl: 'manufactory',
        element: PageSecurityAccidentHistory,
      },
      {
        id: 'manufactory-history',
        name: '보안사고이력관리',
        type: 'page',
        parentUrl: 'manufactory',
        element: PageMaintenanceHistory,
      },
    ],
  },
  {
    name: '유관기관관리',
    id: 'agency',
    parentUrl: '',
    type: 'dir',
    subMenu: [
      {
        id: 'agency-management',
        name: '유관기관협의체관리',
        type: 'page',
        parentUrl: 'agency-management',
        element: PageAgencyManagement,
      },
    ],
  },
  {
    name: '시스템관리',
    id: 'system',
    parentUrl: '',
    type: 'dir',
    subMenu: [
      {
        id: 'terminal-management',
        name: '단말기정보관리',
        type: 'page',
        parentUrl: 'terminal-management',
        element: PageTerminalManagement,
      },
      {
        id: 'QR-equip-management',
        name: 'QR코드 정보 관리',
        type: 'page',
        parentUrl: 'system',
        element: PageQREquipManagement,
      },
      {
        id: 'QRcode-inout-history',
        name: 'QR코드 사용이력',
        type: 'page',
        parentUrl: 'system',
        element: PageQRcodeInOutHistory,
      },
      {
        id: 'personal-management',
        name: '사용자 정보 관리',
        type: 'page',
        parentUrl: 'system',
        element: PagePersonalManagement,
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
