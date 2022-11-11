// import { DataGridKeyProps } from "../../data/constants/dataGridKeys";
import BaseDataGrid from '../../components/dataGrid/BaseDataGrid';
import { OptHeader, OptColumn } from 'tui-grid/types/options';

const columns: OptColumn[] = [
  {
    name: 'id',
    header: '장비일련번호',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'manufactoryId',
    header: '제작업체ID',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'name',
    header: '장비명',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'desc',
    header: '장비설명',
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
    name: 'model',
    header: '모델명',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'version',
    header: '버전',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'manufactureDate',
    header: '제작일자',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'serviceType',
    header: '장비용도',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'size',
    header: '장비규격',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'weight',
    header: '장비무게',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'picture',
    header: '장비사진',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'effectDate',
    header: '제작승인일자',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'startDate',
    header: '제작시작일자',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'endDate',
    header: '제작완료일자',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'finalDate',
    header: '최종제작일자',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'manufactureRemarks',
    header: '제작관련비고',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'approvalId',
    header: '승인업무고유ID',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'equipmentCertifyId',
    header: '장비증명서번호',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'deliveryDate',
    header: '장비납품일자',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'deliveryPersonalId',
    header: '장비납품담당자ID',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'receiveDate',
    header: '장비수령일자',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'receiveAgency',
    header: '장비수령기관',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'receivePersonalId',
    header: '장비수령담당자ID',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'recordDatetime',
    header: '자료기록일시',
    minWidth: 140,
    sortable: true,
  },
  {
    name: 'recordPersonalId',
    header: '자료관리자ID',
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
      header: '장비제작 정보',
      name: 'mergeColumn1',
      childNames: [
        'manufactoryId',
        'name',
        'desc',
        'type',
        'model',
        'version',
        'manufactureDate',
        'serviceType',
        'size',
        'weight',
        'picture',
        'effectDate',
        'startDate',
        'endDate',
        'finalDate',
        'manufactureRemarks',
      ],
    },
    {
      header: '승인정보 연계',
      name: 'mergeColumn2',
      childNames: ['approvalId'],
    },
    {
      header: '수발정보 연계',
      name: 'mergeColumn3',
      childNames: ['equipmentCertifyId'],
    },
    {
      header: '장비납품  정보',
      name: 'mergeColumn4',
      childNames: ['deliveryDate', 'deliveryPersonalId'],
    },
    {
      header: '장비수령 정보 ',
      name: 'mergeColumn5',
      childNames: ['receiveDate', 'receiveAgency', 'recordPersonalId'],
    },
    {
      header: '최초등록 정보',
      name: 'mergeColumn6',
      childNames: ['recordDatetime', 'recordPersonalId'],
    },
  ],
};

function PageEquipmentManufacture() {
  return <BaseDataGrid tableName="equipment/manufacture" columns={columns} header={header} />;
}

export default PageEquipmentManufacture;
