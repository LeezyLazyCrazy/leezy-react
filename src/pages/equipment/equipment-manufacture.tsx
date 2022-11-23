// import { DataGridKeyProps } from "../../data/constants/dataGridKeys";
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
    name: 'id',
    header: '장비등록번호',
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
    editor: {
      type: 'text',
    },
  },
  {
    name: 'manufactureDate',
    header: '제작일자',
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
    name: 'equipmentType',
    header: '장비형태',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'serviceType',
    header: '장비용도',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'spec',
    header: '장비규격',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'equipmentPicture',
    header: '장비사진',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
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
    name: 'manufactoryApprovalId',
    header: '제작승인일련번호',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'equipmentCertiAgency',
    header: '장비증명서발행기관',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'equipmentCertiId',
    header: '장비증명서번호',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'deliveryDate',
    header: '장비납품일자',
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
    name: 'deliveryPersonalId',
    header: '장비납품자ID',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'receiveDate',
    header: '장비수령일자',
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
    name: 'receiveAgency',
    header: '장비수령자ID',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'recordDatetime',
    header: '기록일시',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'recordPersonalId',
    header: '기록담당자ID',
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
      header: '장비제작 규격정보',
      name: 'mergeColumn1',
      childNames: [
        'name',
        'desc',
        'model',
        'version',
        'manufactureDate',
        'equipmentType',
        'serviceType',
        'spec',
        'equipmentPicture',
      ],
    },
    {
      header: '승인정보 정보',
      name: 'mergeColumn2',
      childNames: ['useApprovalId', 'manufactureApprovalId'],
    },
    {
      header: '장비증명서',
      name: 'mergeColumn3',
      childNames: ['equipmentCertifyAgency', 'equipmentCertifyId'],
    },
    {
      header: '장비납품 정보',
      name: 'mergeColumn4',
      childNames: ['deliveryDate', 'deliveryPersonalId'],
    },
    {
      header: '장비수령 정보 ',
      name: 'mergeColumn5',
      childNames: ['receiveDate', 'receiveAgency', 'recordPersonalId'],
    },
    {
      header: '기록자 정보',
      name: 'mergeColumn6',
      childNames: ['recordDatetime', 'recordPersonalId'],
    },
  ],
};

function PageEquipmentManufacture() {
  return <BaseDataGrid tableName="equipment/manufacture" columns={columns} header={header} />;
}

export default PageEquipmentManufacture;
