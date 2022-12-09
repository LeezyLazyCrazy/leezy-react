import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
// eslint-disable-next-line no-unused-vars
import { useState } from 'react';
import { Button, Typography } from '@mui/material';
import useCellStore from '../../stores/useCellStore';
import { API_URL } from '../../query';
import axios from 'axios';

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
  const { gridData } = useCellStore();
  // eslint-disable-next-line no-unused-vars
  const [division, setDivision] = React.useState('SEND');
  const handledivision = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDivision(event.target.value);
  };

  const [id, setId] = React.useState('');
  const handleId = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const getId = e.target.value;
    setId(getId);
  };

  const [outgoing, setOutgoing] = React.useState('');
  const handleOutgoing = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const getOutgoing = e.target.value;
    setOutgoing(getOutgoing);
  };

  const [incoming, setIncoming] = React.useState('');
  const handleIncoming = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const getIncoming = e.target.value;
    setIncoming(getIncoming);
  };

  const [date, setDate] = React.useState('');
  const handleDate = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const getDate = e.target.value;
    setDate(getDate);
  };

  const [outgoingDepartment, setOutgoingDepartment] = React.useState('');
  const handleOutgoingDepartment = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const getOutgoingDepartment = e.target.value;
    setOutgoingDepartment(getOutgoingDepartment);
  };

  const [incomingDepartment, setIncomingDepartment] = React.useState('');
  const handleIncomingDepartment = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const getIncomingDepartment = e.target.value;
    setIncomingDepartment(getIncomingDepartment);
  };

  const [sender, setSender] = React.useState('');
  const handleSender = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const getSender = e.target.value;
    setSender(getSender);
  };

  const [recipient, setRecipient] = React.useState('');
  const handleRecipient = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const getRecipient = e.target.value;
    setRecipient(getRecipient);
  };

  const [remark, setRemark] = React.useState('');
  const handleRemark = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const getRemark = e.target.value;
    setRemark(getRemark);
  };

  const handleSubmit = () => {
    // console.log(
    //   `${id}${outgoing}${incoming}${date}${outgoingDepartment}${incomingDepartment}${sender}${recipient}${remark}`,
    // );
    // console.log(gridData);

    const data = {
      nceManageCertificate: {
        id,
        date,
        incoming,
        outgoing,
        incomingDepartment,
        outgoingDepartment,
        certifyId: null,
        certifyAgency: 'test',
        recipient,
        sender,
        remark,
      },
      nceManageCertiList: gridData,
    };
    console.log(data);
    console.log(JSON.stringify(data));

    axios({
      method: 'PUT',
      url: `${API_URL}/api/manage/manage-Certificate`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(data),
    }).then((response) => console.log(response));
  };

  // const [values, setValues] = useState({
  //   id: '',
  //   outgoing: '',
  //   incoming: '',
  //   date: '',
  //   outgoingDepartment: '',
  //   incomingDepartment: '',
  //   sender: '',
  //   recipient: '',
  //   remark: '',
  // });
  // const handleChange = (event: { target: { name: any; value: any } }) => {
  //   const { name, value } = event.target;
  //   setValues({ ...values, [name]: value });
  // };

  return (
    <form onSubmit={handleSubmit}>
      <Box component="form" noValidate autoComplete="off">
        <Typography variant="h6">암호자재 증명서</Typography>
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
            label="증명서 번호"
            id="outlined-size-small"
            size="small"
            InputProps={{
              readOnly: true,
            }}
            sx={{
              marginTop: 3,
            }}
            name="id"
            onChange={(e) => handleId(e)}
          />
          <Button
            variant="outlined"
            size="small"
            sx={{
              width: '45%',
              height: '60%',
              marginTop: 3,
              backgroundColor: '#1E0A4C',
              color: '#fff',
            }}
            onClick={() => handleSubmit()}
          >
            등록
          </Button>
          <TextField
            label="발신"
            id="outlined-size-small"
            size="small"
            name="outgoing"
            onChange={(e) => handleOutgoing(e)}
          />
          <TextField
            label="수신"
            id="outlined-size-small"
            size="small"
            name="incoming"
            onChange={(e) => handleIncoming(e)}
          />
          <TextField
            id="outlined-select-division"
            select
            label="구분"
            value={division}
            size="small"
            name="division"
            onChange={handledivision}
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
            onChange={(e) => handleDate(e)}
          />
          <TextField
            label="발신 소속"
            id="outlined-size-small"
            size="small"
            name="outgoingDepartment"
            onChange={(e) => handleOutgoingDepartment(e)}
          />
          <TextField
            label="수신 소속"
            id="outlined-size-small"
            size="small"
            name="incomingDepartment"
            onChange={(e) => handleIncomingDepartment(e)}
          />
          <TextField
            label="발신 성명"
            id="outlined-size-small"
            size="small"
            name="sender"
            onChange={(e) => handleSender(e)}
          />
          <TextField
            label="수신 성명"
            id="outlined-size-small"
            size="small"
            name="recipient"
            onChange={(e) => handleRecipient(e)}
          />
        </Box>
        <TextField
          id="outlined-multiline-static"
          label="비고"
          multiline
          rows={2}
          sx={{ marginTop: 1 }}
          name="remark"
          onChange={(e) => handleRemark(e)}
        />
      </Box>
    </form>
  );
}
