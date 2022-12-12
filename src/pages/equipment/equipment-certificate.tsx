import EditDataGrid from '../../components/dataGrid/EditDataGrid';
import { OptColumn, OptHeader } from 'tui-grid/types/options';
import { Box, Drawer } from '@mui/material';
import { useState } from 'react';
import CertificateInput from '../../components/form/CertificateInput';
import DrawerDataGrid from '../../components/dataGrid/DrawerDataGrid';

const columns: OptColumn[] = [
  {
    name: 'equipmentCertiAgency',
    header: '장비증명서발행기관',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
    validation: {
      dataType: 'number',
      min: 4,
      max: 6,
    },
  },
  {
    name: 'equipmentCertiId',
    header: '장비증명서번호',
    minWidth: 140,
    sortable: true,
    validation: {
      dataType: 'string',
      required: true,
    },
    editor: {
      type: 'text',
    },
  },
  {
    name: 'type',
    header: '증명서증명서구분',
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
    name: 'date',
    header: '증명서발행일자',
    minWidth: 140,
    validation: {
      required: true,
      unique: true,
    },
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'equipmentCertiPersonalID',
    header: '증명서발행자ID',
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
    header: '장비등록번호',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'accord',
    header: '증명서내일치여부',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'copy',
    header: '장비증명서복사본',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'outgoingDate',
    header: '인계일자',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'outgoingPersonalID',
    header: '인계자ID',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'outgoingConfirmation',
    header: '인계자확인서명',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'outgoingTotal',
    header: '인계총수량',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'outgoingProcessResult',
    header: '인계처리결과',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'incomingDate',
    header: '인수일자',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'incomingPersonalId',
    header: '인수자ID',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'incomingConfirmation',
    header: '인수자확인서명',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'incomingTotal',
    header: '인수총수량',
    minWidth: 140,
    sortable: true,
    editor: {
      type: 'text',
    },
  },
  {
    name: 'ProcessResult',
    header: '인수처리결과',
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
      header: '증명서발행 정보',
      name: 'mergeColumn1',
      childNames: ['type', 'date', 'equipmentCertiPersonalID'],
    },
    {
      header: '수발장비 정보',
      name: 'mergeColumn2',
      childNames: ['approvalName', 'equipmentSerial'],
    },
    {
      header: '수발결과 정보',
      name: 'mergeColumn3',
      childNames: ['accord', 'copy'],
    },
    {
      header: '장비인계 정보',
      name: 'mergeColumn4',
      childNames: [
        'outgoingDate',
        'outgoingPersonalId',
        'outgoingConfirmation',
        'outgoingTotal',
        'outgoingProcessResult',
      ],
    },
    {
      header: '장비인수 정보',
      name: 'mergeColumn5',
      childNames: [
        'incomingDate',
        'incomingPersonalId',
        'incomingConfirmation',
        'incomingTotal',
        'incomingProcessResult',
      ],
    },
    {
      header: '기록자 정보',
      name: 'mergeColumn6',
      childNames: ['recordDatetime', 'recordPersonalId'],
    },
  ],
};

const DrawerColumns: OptColumn[] = [
  {
    name: 'equipmentLevel',
    header: '등급',
    minWidth: 70,
    sortable: true,
    align: 'center',
    editor: {
      type: 'text',
    },
  },
  {
    name: 'equipmentMode',
    header: '자제명칭',
    minWidth: 70,
    sortable: true,
    align: 'center',
    editor: {
      type: 'text',
    },
  },
  {
    name: 'equipmentId',
    header: '등록번호',
    minWidth: 20,
    sortable: true,
    align: 'center',
    editor: {
      type: 'text',
    },
  },
  {
    name: 'remarks',
    header: '비고',
    minWidth: 20,
    sortable: true,
    align: 'center',
    editor: {
      type: 'text',
    },
  },
];

function PageEquipmentCertification() {
  // eslint-disable-next-line no-unused-vars
  function setOpen(set: boolean): void {}
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <Drawer
        sx={{ opacity: 0.98 }}
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box sx={{ width: 500, padding: '5% 5%' }} role="combobox">
          <CertificateInput />
          <DrawerDataGrid
            tableName="equipment/information"
            columns={DrawerColumns}
            header={header}
          />
        </Box>
      </Drawer>
      <EditDataGrid
        tableName="equipment/certificate"
        columns={columns}
        frozenColumn={2}
        header={header}
        onSearchClick={() => setIsDrawerOpen(true)}
      />
    </>
  );
}

export default PageEquipmentCertification;
