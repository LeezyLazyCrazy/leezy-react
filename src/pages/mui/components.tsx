import { Button } from "@mui/material";
import ShortAlert from "../../components/alert/ShortAlert";
import { ToastMessage, toastShow } from "../../components/alert/ToastMessage";
import BaseButton from "../../components/button/BaseButton";
import TextButton from "../../components/button/TextButton";
import RadarChartBox from "../../components/chart/RadarChartBox";
import StatusChip from "../../components/chip/StatusChip";

 const PageComponents = () => {
	return (
    <>
  		<div>Toast Message</div>
      <BaseButton 
        title="toast Message"
        onClick={() => {
          toastShow({title:"title", message:"message", type: "info"})
        }}
      >
        Toast Message
      </BaseButton>

  		<div>Short Alert</div>
      <ShortAlert title="Short Alert" severity="error"/>

  		<div>Radar Chart</div>
      <RadarChartBox />

  		<div>Status Chip</div>
      <StatusChip severity="danger"/>
      <StatusChip severity="warn" />
      <StatusChip severity="adhoc" />
      <StatusChip severity="inProgress" />
      <StatusChip severity="fail" />
      <StatusChip severity="delayed" />
      <StatusChip severity="done" />
    </>
	);
};

export default PageComponents;
