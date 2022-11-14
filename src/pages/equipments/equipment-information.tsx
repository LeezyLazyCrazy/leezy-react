import React from 'react';
import BaseDataGrid from '../../components/dataGrid/BaseDataGrid';
import { OptHeader, OptColumn } from 'tui-grid/types/options';

const columns: OptColumn[] = [
  {
    name: 'approvalName',
    header: '형식승인명',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'equipmentId',
    header: '장비일련번호',
    sortable: true,
    minWidth: 140,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'manufactoryId',
    header: '제작업체ID',
    sortable: true,
    minWidth: 140,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'developTaskId',
    header: '개발과제ID',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'modeApprovalId',
    header: '형식승인일련번호',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'useApprovalId',
    header: '사용승인일련번호',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'manufactureApprovalId',
    header: '제작승인일련번호',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'destroyApprovalId',
    header: '파기승인일련번호',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'overseaApprovalId',
    header: '국외반출승인일련번호',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'equipmentCertiAgency',
    header: '장비증명서발행기관',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'equipmentCertiId',
    header: '장비증명서번호',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'materialId',
    header: '자재일련번호',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'materialCertiAgency',
    header: '자재증명서발행기관',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'materialCertiId',
    header: '자재증명서번호',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'manageAgency',
    header: '장비관리기관',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'operateAgency',
    header: '장비운용기관',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'operateDepartment',
    header: '장비운용부서',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'operatePosition',
    header: '장비운용위치',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'operateDate',
    header: '장비운용일자',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'datePicker',
      options: {
        language: 'ko',
        format: 'yyyy-MM-dd',
      },
    },
  },
  {
    name: 'lastStatusGroup',
    header: '최신상태그룹',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'lastStatusDetail',
    header: '최신장비세부상태',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'manageLevel',
    header: '관리등급',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'communicateLevel',
    header: '소통등급',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'encryptKey',
    header: '암호키 관리방법',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'programKey',
    header: '프로그램 관리방법',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'managePersonalIdMain',
    header: '관리책임자ID(정)',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'managePersonalIdSub',
    header: '관리책임자ID(부)',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'recordDataTime',
    header: '기록일시',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'datePicker',
      options: {
        language: 'ko',
        format: 'yyyy-MM-dd',
      },
    },
  },
  {
    name: 'recordPersonalId',
    header: '기록담당자ID',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'remarks',
    header: '비고',
    minWidth: 140,
    sortable: true,
  },
];
const header: OptHeader = {
  height: 60,
  complexColumns: [
    {
      header: '개발과제 연계',
      name: 'mergeColumn1',
      childNames: ['developTaskId'],
    },
    {
      header: '승인업무 연계',
      name: 'mergeColumn2',
      childNames: [
        'modeApprovalId',
        'useApprovalId',
        'manufactureApprovalId',
        'destroyApprovalId',
        'overseaApprovalId',
      ],
    },
    {
      header: '장비증명서 연계',
      name: 'mergeColumn3',
      childNames: ['equipmentCertiAgency', 'equipmentCertiId'],
    },
    {
      header: '암호자재 연계',
      name: 'mergeColumn4',
      childNames: ['materialId'],
    },
    {
      header: '자재증명서 연계',
      name: 'mergeColumn5',
      childNames: ['materialCertiAgency', 'materialCertiId'],
    },
    {
      header: '설치 운영 정보',
      name: 'mergeColumn6',
      childNames: [
        'manageAgency',
        'operateAgency',
        'operateDepartment',
        'operatePosition',
        'operateDate',
      ],
    },
    {
      header: '최신 상태 정보',
      name: 'mergeColumn7',
      childNames: ['lastStatusGroup', 'lastStatusDetail'],
    },
    {
      header: '장비 관리 정보',
      name: 'mergeColumn8',
      childNames: ['manageLevel', 'communicateLevel', 'encryptKey', 'programType'],
    },
    {
      header: '관리책임자',
      name: 'mergeColumn9',
      childNames: ['managePersonalIdMain', 'managePersonalIdSub', 'programType'],
    },
    {
      header: '기록자 정보',
      name: 'mergeColumn10',
      childNames: ['recordDatetime', 'recordPersonalId'],
    },
  ],
};

function PageEquipmentInformation() {
  return (
    <BaseDataGrid
      tableName="equipment/information"
      columns={columns}
      frozenColumn={2}
      header={header}
    />
  );
}

export default PageEquipmentInformation;
