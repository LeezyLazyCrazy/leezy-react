import { Grid } from '@mui/material';
import DonutChart from '../components/chart/DonutChart';
import Accodion from '../components/accodion/Accodion';
/**
 * 메인 페이지 (프로토타입 샘플)
 * @returns JSX.Element(Page)
 */
function Main() {
  return (
    <Grid container rowSpacing={8} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12}>
        <DonutChart />
      </Grid>
      <Grid item xs={12}>
        <Accodion />
      </Grid>
    </Grid>
  );
}

export default Main;
