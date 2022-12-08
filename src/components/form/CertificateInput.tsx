import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
// eslint-disable-next-line no-unused-vars
import { useState } from 'react';

export interface InputProps {
  onSubmit?: () => void;
}

const divisions = [
  {
    value: 'SEND',
    label: '배부',
  },
  {
    value: 'RETURN',
    label: '반납',
  },
  {
    value: 'DELETE',
    label: '파기',
  },
  {
    value: 'LOST',
    label: '분실',
  },
  {
    value: 'FIX',
    label: '정비의뢰',
  },
  {
    value: 'ETC',
    label: '기타',
  },
];

export default function TextFieldSizes() {
  // eslint-disable-next-line no-unused-vars
  const [division, setDivision] = React.useState('SEND');
  // const handledivision = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setDivision(event.target.value);
  // };

  // const [id, setId] = React.useState('');
  // const handleId = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const getId = e.target.value;
  //   setId(getId);
  // };

  // const [outgoing, setOutgoing] = React.useState('');
  // const handleOutgoing = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const getOutgoing = e.target.value;
  //   setOutgoing(getOutgoing);
  // };

  // const [incoming, setIncoming] = React.useState('');
  // const handleIncoming = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const getIncoming = e.target.value;
  //   setIncoming(getIncoming);
  // };

  // const [date, setDate] = React.useState('');
  // const handleDate = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const getDate = e.target.value;
  //   setDate(getDate);
  // };

  // const [outgoingDepartment, setOutgoingDepartment] = React.useState('');
  // const handleOutgoingDepartment = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  // ) => {
  //   const getOutgoingDepartment = e.target.value;
  //   setOutgoingDepartment(getOutgoingDepartment);
  // };

  // const [incomingDepartment, setIncomingDepartment] = React.useState('');
  // const handleIncomingDepartment = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  // ) => {
  //   const getIncomingDepartment = e.target.value;
  //   setIncomingDepartment(getIncomingDepartment);
  // };

  // const [sender, setSender] = React.useState('');
  // const handleSender = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const getSender = e.target.value;
  //   setSender(getSender);
  // };

  // const [recipient, setRecipient] = React.useState('');
  // const handleRecipient = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const getRecipient = e.target.value;
  //   setRecipient(getRecipient);
  // };

  // const [remark, setRemark] = React.useState('');
  // const handleRemark = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const getRemark = e.target.value;
  //   setRemark(getRemark);
  // };

  const [values, setValues] = useState({
    id: '',
    outgoing: '',
    incoming: '',
    date: '',
    outgoingDepartment: '',
    incomingDepartment: '',
    sender: '',
    recipient: '',
    remark: '',
  });
  const handleChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <Box component="form" noValidate autoComplete="off">
      <TextField
        label="증명서 번호"
        id="outlined-size-small"
        defaultValue="2022-064"
        size="small"
        InputProps={{
          readOnly: true,
        }}
        sx={{
          marginTop: 3,
        }}
        name="id"
        onChange={handleChange}
        // onChange={(e) => handleId(e)}
      />
      <Box
        sx={{
          display: 'grid',
          gap: 1,
          gridTemplateColumns: 'repeat(2, 1fr)',
          width: '100%',
          marginTop: 1,
        }}
      >
        <TextField
          label="발신"
          id="outlined-size-small"
          defaultValue="국가보안기술연구소"
          size="small"
          name="outgoing"
          onChange={handleChange}
          // onChange={(e) => handleOutgoing(e)}
        />
        <TextField
          label="수신"
          id="outlined-size-small"
          defaultValue="소프트캠프"
          size="small"
          name="incoming"
          onChange={handleChange}
          // onChange={(e) => handleIncoming(e)}
        />
        <TextField
          id="outlined-select-division"
          select
          label="구분"
          value={division}
          // onChange={handledivision}
          size="small"
          name="division"
          onChange={handleChange}
        >
          {divisions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="date"
          label="일자"
          type="date"
          defaultValue="2017-05-24"
          InputLabelProps={{
            shrink: true,
          }}
          size="small"
          name="date"
          onChange={handleChange}
          // onChange={(e) => handleDate(e)}
        />
        <TextField
          label="소속"
          id="outlined-size-small"
          defaultValue="보안실"
          size="small"
          name="outgoingDepartment"
          onChange={handleChange}
          // onChange={(e) => handleOutgoingDepartment(e)}
        />
        <TextField
          label="소속"
          id="outlined-size-small"
          defaultValue="소프트캠트"
          size="small"
          name="incomingDepartment"
          onChange={handleChange}
          // onChange={(e) => handleIncomingDepartment(e)}
        />
        <TextField
          label="성명"
          id="outlined-size-small"
          defaultValue="홍길순"
          size="small"
          name="sender"
          onChange={handleChange}
          // onChange={(e) => handleSender(e)}
        />
        <TextField
          label="성명"
          id="outlined-size-small"
          defaultValue="홍길동"
          size="small"
          name="recipient"
          onChange={handleChange}
          // onChange={(e) => handleRecipient(e)}
        />
      </Box>
      <TextField
        id="outlined-multiline-static"
        label="비고"
        multiline
        rows={2}
        defaultValue="메모장 입니다."
        sx={{ marginTop: 1 }}
        name="remark"
        onChange={handleChange}
        // onChange={(e) => handleRemark(e)}
      />
    </Box>
  );
}
