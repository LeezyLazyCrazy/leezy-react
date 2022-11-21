// import { DataGridKeyProps } from "../../data/constants/dataGridKeys";
import BaseDataGrid from '../../components/dataGrid/BaseDataGrid';
import { OptColumn, OptHeader } from 'tui-grid/types/options';

const dataGridKeys: OptColumn[] = [
  {
    name: 'agency',
    header: '장비관리기관',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
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
    name: 'equipmentSerial',
    header: '장비일련번호',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'type',
    header: '장비형태',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'date',
    header: '장비제작일자',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'count',
    header: '장비수량',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'manufactoryId',
    header: '장비제작업체ID',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'materialID',
    header: '자재등록번호',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'materialCertifyId',
    header: '자재증명서번호',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'receiveGiveDate',
    minWidth: 140,
    header: '수령배부일자',
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'receiveGiveCount',
    minWidth: 140,
    header: '수령배부수량',
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'receiveGiveCertifyId',
    minWidth: 140,
    header: '장비증명서번호',
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'receiveGiveAgency',
    header: '수령배부대상기관',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'callbackDate',
    header: '반납회수일자',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'callbackCount',
    header: '반납회수수량',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'returnCallbackCertifyId',
    header: '장비증명서번호',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'returnCallbackAgency',
    header: '반납회수대상기관',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'changeDate',
    header: '장비변동일자',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'changeCount',
    header: '장비변동수량',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'equipmentChangeCertifyId',
    header: '장비증명서번호',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'changeCheck',
    header: '장비변동확인',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'statusGroup',
    header: '최신상태그룹',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'statusDetail',
    header: '최신장비세부상태',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'installDate',
    header: '장비설치일자',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'position',
    header: '장비설치장소',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'department',
    header: '장비설치부서',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'main',
    header: '관리책임자ID(정)',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'sub',
    header: '관리책임자ID(부)',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'checkDatetime',
    header: '최근확인일시',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'handoverDatetime',
    header: '최근인계인수일시',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'recordDatetime',
    header: '자료관리일시',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'recordPersonalID',
    header: '자료관리자ID',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'remarks',
    header: '비고',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
];

const header: OptHeader = {
  height: 60,
  complexColumns: [
    {
      header: '장비제작 정보',
      name: 'mergeColumn1',
      childNames: ['name', 'type', 'date', 'count', 'manufactureId'],
    },
    {
      header: '암호자재 연계',
      name: 'mergeColumn2',
      childNames: ['materialId', 'materialCertifyId'],
    },
    {
      header: '수령(배부) 정보',
      name: 'mergeColumn3',
      childNames: [
        'receiveGiveDate',
        'receiveGiveCount',
        'receiveGiveCertifyId',
        'receiveGiveAgency',
      ],
    },
    {
      header: '반납(회수) 정보',
      name: 'mergeColumn4',
      childNames: [
        'callbackDate',
        'callbackCount',
        'returnCallbackCertifyId',
        'returnCallbackAgency',
      ],
    },
    {
      header: '변동사항 정보',
      name: 'mergeColumn5',
      childNames: ['changeDate', 'changeCount', 'equipmentChangeCertifyId', 'changeCheck'],
    },
    {
      header: '운용관리 정보',
      name: 'mergeColumn6',
      childNames: [
        'statusGroup',
        'statusDetail',
        'installDate',
        'position',
        'department',
        'main',
        'sub',
        'checkDatetime',
        'handoverDatetime',
      ],
    },
    {
      header: '자료관리자 정보',
      name: 'mergeColumn7',
      childNames: ['recordDatetime', 'recordPersonalID'],
    },
  ],
};

function PageEquipmentManagement() {
  return <BaseDataGrid tableName="equipment/management" columns={dataGridKeys} header={header} />;
}

export default PageEquipmentManagement;
