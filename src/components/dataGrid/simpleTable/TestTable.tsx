import { Paper, Table, TableCell, TableContainer, TableRow } from '@mui/material';
import { ReactNode } from 'react';

/**
 * 기본 테이블. 간단한 표 구현을 위하여 사용. API 데이터 내용이 확정되는대로 해당 테이블의 규격은 달라질 예정임.
 * @returns
 */

interface TestTableProps {
  key: string;
  title: string;
  reg_date: string;
  person_name: string;
}

function TestTable(props: TestTableProps) {
  function createData(
    name: string,
    calories: ReactNode,
    fat: ReactNode,
    carbs: ReactNode,
    protein: ReactNode,
  ) {
    return { name, calories, fat, carbs, protein };
  }

  return (
    <TableContainer component={Paper}>
      <Table className="123" aria-label="test table">
        <TableRow key={props.title}>
          <TableCell align="center" sx={{ backgroundColor: 'rgb(114,186,240)' }} component="th">
            글 번호
          </TableCell>
          <TableCell align="center">{props.key}</TableCell>
          <TableCell align="center" sx={{ backgroundColor: 'rgb(114,186,240)' }} component="th">
            제목
          </TableCell>
          <TableCell align="center">{props.title}</TableCell>
        </TableRow>
        <TableRow key={props.title}>
          <TableCell className="123" sx={{ backgroundColor: 'rgb(114,186,240)' }} align="center">
            작성자
          </TableCell>
          <TableCell align="center">{props.person_name}</TableCell>
          <TableCell className="123" sx={{ backgroundColor: 'rgb(114,186,240)' }} align="center">
            작성일자
          </TableCell>
          <TableCell align="center">{props.reg_date}</TableCell>
        </TableRow>
      </Table>
    </TableContainer>
  );
}

export default TestTable;
