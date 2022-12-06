import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';

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
  const [division, setDivision] = React.useState('SEND');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDivision(event.target.value);
  };

  return (
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
          defaultValue="2022-064"
          size="small"
          InputProps={{
            readOnly: true,
          }}
          sx={{
            marginTop: 3,
          }}
        />
        <Button
          variant="outlined"
          size="small"
          sx={{
            width: '30%',
            height: '60%',
            marginTop: 3,
            backgroundColor: '#1E0A4C',
            color: '#fff',
          }}
        >
          등록
        </Button>
        <TextField
          label="발신"
          id="outlined-size-small"
          defaultValue="국가보안기술연구소"
          size="small"
        />
        <TextField label="수신" id="outlined-size-small" defaultValue="소프트캠프" size="small" />
        <TextField
          id="outlined-select-division"
          select
          label="구분"
          value={division}
          onChange={handleChange}
          size="small"
        >
          {divisions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        {/* <TextField
          label="일자"
          id="outlined-size-small"
          defaultValue="2022년  월  일"
          size="small"
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Basic example"
            value={value}
            onChange={(newValue: React.SetStateAction<Dayjs | null>) => {
              setValue(newValue);
            }}
            renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => (
              <TextField {...params} />
            )}
          />
        </LocalizationProvider> */}
        <TextField
          id="date"
          label="일자"
          type="date"
          defaultValue="2017-05-24"
          InputLabelProps={{
            shrink: true,
          }}
          size="small"
        />
        <TextField label="소속" id="outlined-size-small" defaultValue="보안실" size="small" />
        <TextField label="소속" id="outlined-size-small" defaultValue="소프트캠트" size="small" />
        <TextField label="성명" id="outlined-size-small" defaultValue="홍길순" size="small" />
        <TextField label="성명" id="outlined-size-small" defaultValue="홍길동" size="small" />
      </Box>

      <TextField
        id="outlined-multiline-static"
        label="비고"
        multiline
        rows={2}
        defaultValue="메모장 입니다."
        sx={{ marginTop: 1 }}
      />
    </Box>
  );
}
