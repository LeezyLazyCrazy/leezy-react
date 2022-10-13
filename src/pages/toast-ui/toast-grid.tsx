import { Container } from "@mui/system";
import { DataGridKeyProps } from "../../data/constants/dataGridKeys";
import BaseDataGrid from "../../components/dataGrid/BaseDataGrid";

const dataGridKeys: DataGridKeyProps[] = [
	{
		name: "type",
		header: "종류",
		sortable: true,
		editor: {
			type: "text",
		},
		valditaion: {
			required: true,
			dataType: "string",
		},
	},
	{
		name: "loss",
		header: "손실률",
		sortable: true,
		editor: {
			type: "text",
		},
	},
	{
		name: "hold",
		header: "보유량",
		sortable: true,
		editor: {
			type: "text",
		},
	},
	{
		name: "second",
		header: "초당거래량",
		sortable: true,
		editor: {
			type: "text",
		},
	},
	{
		name: "notWorking",
		header: "활동여부",
		sortable: true,
		editor: {
			type: "text",
		},
	},
	{
		name: "working",
		header: "거래여부",
		sortable: true,
		editor: {
			type: "text",
		},
	},
	{
		name: "workingRate",
		header: "가동률",
		sortable: true,
		// formatter: "listItemText",
		// renderer: {},
	},
	{
		name: "editedDate",
		header: "수정일시",
		sortable: true,
	},
	{
		name: "editedBy",
		header: "거래아이디",
		sortable: true,
	},
];


const PageToastGrid = () => {
	return (
		<>	
			<Container >
				<BaseDataGrid dataGridKeys={dataGridKeys} />
			</Container>				
		</>
	);
};

export default PageToastGrid;
