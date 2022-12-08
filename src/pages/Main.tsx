import { Grid, Box } from '@mui/material';
import Accordion from '../components/accordion/Accordion';
import CustomActiveShapePieChart from '../components/chart/CustomActiveShapePieChart';
// import DonutChart from '../components/chart/DonutChart';

/**
 * 메인 페이지 (프로토타입 샘플)
 * @returns JSX.Element(Page)
 */
function Main() {
  return (
    <Box>
      <Grid
        container
        rowSpacing={4}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        direction="row"
        justifyContent="center"
        alignItems="center"
        height={400}
      >
        <Grid item xs={3} width="100%" height="100%">
          <CustomActiveShapePieChart />
        </Grid>
        <Grid item xs={3} width="100%" height="100%">
          <CustomActiveShapePieChart />
        </Grid>
        <Grid item xs={3} width="100%" height="100%">
          <CustomActiveShapePieChart />
        </Grid>
        <Grid item xs={3} width="100%" height="100%">
          <CustomActiveShapePieChart />
        </Grid>
      </Grid>
      <Grid item xs={12} p={6}>
        <Accordion />
      </Grid>
    </Box>
  );
}

export default Main;
