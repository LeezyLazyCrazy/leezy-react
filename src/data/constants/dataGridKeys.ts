/**
 * DataGrid를 위해 작성된 더미데이터 인터페이스. 추후 삭제 예정
 */

export interface DataGridKeyProps {
	name: string;
	header: string;
	sortable: boolean;
	formatter?: "listItemText" | "text";
	renderer?: {
		styles?: any;
	};
	editor?: {
		type?: "select" | "text";
		options?: any;
	};
	valditaion?: {
		required?: boolean;
		dataType?: "string" | "number";
		min?: number;
		max?: number;
		regExp?: RegExp;
		unique?: boolean;
	};
}
