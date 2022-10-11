import { Grid } from "@mui/material";
import ShortAlert from "../../components/alert/ShortAlert";
import { toastShow } from "../../components/alert/ToastMessage";
import BaseButton from "../../components/button/BaseButton";
import RadarChartBox from "../../components/chart/RadarChartBox";
import StatusChip from "../../components/chip/StatusChip";


 const PageComponents = () => {
	return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6} md={6} spacing={1} >Toast Message
          <BaseButton
            title="toast Message"
            onClick={() => {
              toastShow({title:"title", message:"message", type: "info"})
            }}
          >
          Toast Message
          </BaseButton>
        </Grid>
        <Grid item xs={6} md={6} spacing={1} >Short Alert
          <ShortAlert title="Short Alert" severity="error"/>
        </Grid>
        <Grid item xs={6} md={6} spacing={1} >Radar Chart
          <RadarChartBox />
        </Grid>
        <Grid item xs={6} md={6} spacing={1} >Status Chip
          <StatusChip severity="danger" />
          <StatusChip severity="warn" />
          <StatusChip severity="adhoc" />
          <StatusChip severity="inProgress" />
          <StatusChip severity="fail" />
          <StatusChip severity="delayed" />
          <StatusChip severity="done" />
        </Grid>
      </Grid>
  		
    </>
	);
};

export default PageComponents;
