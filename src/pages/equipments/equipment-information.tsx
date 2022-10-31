import React from "react";
import BaseDataGrid from "../../components/dataGrid/BaseDataGrid";
import { OptHeader } from "../../types/tui-grid/options";
import { OptColumn } from "../../types/tui-grid/options";

const columns: OptColumn[] = [
	{
		name: "approvalName",
		header: "형식승인명",
		minWidth: 140,	
		sortable: true,
		editor: {
			type: "text",
		},
	},
	{
		name: "id",
		header: "장비일련번호",
		sortable: true,
		minWidth: 140,	
		editor: {
			type: "text",
		},	
	},
	{
		name: "developTaskId",
		header: "개발과제ID",
		minWidth: 140,	
		sortable: true,
		editor: {
			type: "text",
		},
	},
	{
		name: "approvalDate",
		header: "형식승인일자",
		minWidth: 140,
		sortable: true,
		editor: {
			type: 'datePicker',
			options: {
				language: 'ko',
				format: 'yyyy-MM-dd',
			}
		},
	},
	{
		name: "equipmentCertifyId",
		header: "장비증명서번호",
		minWidth: 140,			
		sortable: true,
		editor: {
			type: "text",
		},
	},
	{
		name: "materialId",
		header: "자재일련번호",
		minWidth: 140,		
		sortable: true,
		editor: {
			type: "text",
		},
	},
	{
		name: "materialCertifyId",
		header: "자재증명서번호",
		minWidth: 140,				
		sortable: true,
	},
	{
		name: "approvalId",
		header: "승인업무고유ID",
		minWidth: 140,		
		sortable: true,
	},
	{
		name: "useResultEffectDate",
		header: "사용승인일자",
		minWidth: 140,		
		sortable: true,
    },
    {
		name: "manufactureEffectDate",
		header: "제작승인일자",
		minWidth: 140,		
		sortable: true,
	},
	{
		name: "destroyResultEffectDate",
		header: "파기승인일자",
		minWidth: 140,		
		sortable: true,
    },
    {
		name: "equipmentDestroyDate",
		header: "장비파기일자",
		minWidth: 140,		
		sortable: true,
	},
	{
		name: "manageAgency",
		header: "장비관리기관",
		minWidth: 140,		
		sortable: true,
	},
  {
		name: "operateAgency",
		header: "장비운용기관",
		minWidth: 140,		
		sortable: true,
	},
	{
		name: "operateDepartment",
		header: "장비운용부서",
		minWidth: 140,		
		sortable: true,
    },
    {
		name: "operatePosition",
		header: "장비운용위치",
		minWidth: 140,		
		sortable: true,
	},
	{
		name: "operateDate",
		header: "장비운용일자",
		minWidth: 140,		
		sortable: true,
    },
    {
		name: "lastStatusGroup",
		header: "최신상태그룹",
		minWidth: 140,		
		sortable: true,
	},
	{
		name: "lastStatusDetail",
		header: "최신장비세부상태",
		minWidth: 140,		
		sortable: true,
    },
    {
		name: "manageLevel",
		header: "관리등급",
		minWidth: 140,		
		sortable: true,
	},
	{
		name: "communicateLevel",
		header: "소통등급",
		minWidth: 140,
		sortable: true,
	},
    {
		name: "encryptKey",
		header: "암호키 관리방법",
		minWidth: 140,
			sortable: true,
	},
	{
		name: "programKey",
		header: "프로그램 관리방법",
		minWidth: 140,
		sortable: true,
    },
    {
		name: "managePersonalIdMain",
		header: "관리책임자ID(정)",
		minWidth: 140,
		sortable: true,
	},
	{
		name: "managePersonalIdSub",
		header: "관리책임자ID(부)",
		minWidth: 140,		
		sortable: true,
	},
    {
		name: "lastCheckDataTime",
		header: "최근확인일시",
		minWidth: 140,		
		sortable: true,
	},
	{
		name: "lastHandoverDatetime",
		header: "최근인계인수일시",
		minWidth: 140,
		sortable: true,
    },
    {
		name: "recordDatetime",
		header: "자료등록일시",
		minWidth: 140,
		sortable: true,
	},
	{
		name: "recordPersonalId",
		header: "자료관리자ID",
		minWidth: 140,
		sortable: true,
	},
    {
		name: "remarks",
		header: "비고",
		minWidth: 140,
		sortable: true,
	},
];
const header: OptHeader = {
	height: 60,
	complexColumns: [
    {
      header: '장비개발 정보',
      name: 'mergeColumn1',
      childNames: ['developTaskId','approvalDate']
    },
    {
      header: '승인이력 정보',
      name: 'mergeColumn6',
      childNames: ['approvalId', 'useResultEffectDate', 'manufactureEffectDate', 'destroyResultEffectDate','equipmentDestroyDate']
    },
    {
      header: '설치 및 상태 정보',
      name: 'mergeColumn7',
			childNames: ['manageAgency', 'operateAgency', 'operateDepartment', 'operatePosition',
				'operateDate', 'lastStatusGroup', 'lastStatusDetail', 'manageLevel', 'communicateLevel',
				'encryptKey','programKey']					          
    },
    {
      header: '관리 정보',
      name: 'mergeColumn8',
      childNames: ['managePersonalIdMain','managePersonalIdSub','lastCheckDataTime', 'lastHandoverDatetime']
    },
    {
      header: '자료관리자 정보',
      name: 'mergeColumn9',
      childNames: ['recordDatetime','recordPersonalId']
    },    
  ]
}

const PageEquipmentInformation = () => {
	return (
		<BaseDataGrid tableName="equipment/information" columns={columns} frozenColumn={2} header={header}/>
	);
};

export default PageEquipmentInformation;