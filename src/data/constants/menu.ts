/**
 * 화면 좌측의 개별 메뉴를 구성하는 인터페이스
 */

import { ReactElement } from "react";
import Main from "../../pages/Main";
import PageComponents from "../../pages/mui/components";
import PageIcon from "../../pages/mui/icons";
import PageToastGrid from "../../pages/toast-ui/toast-grid";

export interface MenuProps {
	id: string;
	name: string;
	parentUrl: string;
	type: "dir" | "page";
	element?: any;
	subMenu?: MenuProps[];
}

/**
 * 화면 좌측의 메뉴를 구성하기 위하여 URL을 갖는 개별 메뉴 Object들을 배치한 배열
 */

export const menu: MenuProps[] = [
	{
		name: "Material Design",
		id: "mui",
		parentUrl: "",
		type: "dir",
		subMenu: [
			{
				id: "icons",
				name: "Material Icon",
				type: "page",
				parentUrl: "mui",
				element: PageIcon
			},
			{
				id: "components",
				name: "Components",
				type: "page",
				parentUrl: "mui",
				element: PageComponents
			},
		],
	},
	{
		name: "Toast UI",
		id: "toast-ui",
		type: "dir",
		parentUrl: "",
		subMenu: [
			{
				id: "toast-grid",
				name: "Toast Grid",
				type: "page",
				parentUrl: "toast-ui",
				element: PageToastGrid
			},
		],
	},
	{
		name: "Framer animation",
		id: "framer",
		type: "dir",
		parentUrl: "",
		subMenu: [
			{
				id: "Framer animation",
				name: "Framer animation",
				type: "page",
				parentUrl: "FTXToken",
				element: Main
			},
		],
	},
	{
		name: "React-query",
		id: "react-query",
		type: "dir",
		parentUrl: "",
		subMenu: [
			{
				id: "react-query",
				name: "React-query",
				type: "page",
				parentUrl: "Cosmos",
				element: Main
			},
		],
	},
	{
		name: "Zustand",
		id: "zustand",
		type: "dir",
		parentUrl: "",
		subMenu: [
			{
				id: "zustand",
				name: "Zustand",
				type: "page",
				parentUrl: "VeChain",
				element: Main
			},
		],
	},
	// {
	// 	name: "유관기관 관리",
	// 	id: "organizations",
	// 	type: "dir",
	// 	parentUrl: "",
	// 	subMenu: [
	// 		{
	// 			id: "organization",
	// 			name: "유관기관 관리",
	// 			type: "page",
	// 			parentUrl: "Decentraland",
	// 		},
	// 	],
	// },
	// {
	// 	name: "시스템 관리",
	// 	id: "system",
	// 	type: "dir",
	// 	parentUrl: "",
	// 	subMenu: [
	// 		{
	// 			id: "admin",
	// 			name: "사용자 관리",
	// 			type: "dir",
	// 			parentUrl: "eCash",
	// 			subMenu: [
	// 				{
	// 					id: "manager",
	// 					name: "관리자 관리",
	// 					type: "page",
	// 					parentUrl: "eCash/IOTA",
	// 				},
	// 				{
	// 					id: "user",
	// 					name: "사용자 관리",
	// 					type: "page",
	// 					parentUrl: "eCash/IOTA",
	// 				},
	// 			],
	// 		},			
	// 		{
	// 			id: "terminal",
	// 			name: "단말기 관리",
	// 			type: "dir",
	// 			parentUrl: "eCash",
	// 			subMenu: [
	// 				{
	// 					id: "qr",
	// 					name: "QR코드 정보",
	// 					type: "page",
	// 					parentUrl: "eCash/IOTA",
	// 				},
	// 				{
	// 					id: "object",
	// 					name: "단말기 관리",
	// 					type: "page",
	// 					parentUrl: "eCash/IOTA",
	// 				},
	// 			],
	// 		},	
	// 		{
	// 			id: "data",
	// 			name: "데이터 관리",
	// 			type: "dir",
	// 			parentUrl: "eCash",
	// 			subMenu: [
	// 				{
	// 					id: "upload",
	// 					name: "데이터업로드/다운로드",
	// 					type: "page",
	// 					parentUrl: "eCash/IOTA",
	// 				},
	// 			],
	// 		},

	// 	],
	// },
];

// 2depth 까지 이름 flatten시킴.
// breadCrumb, 메뉴의 한국어명 찾기 등에 사용
export const flattenedMenu = () => {
	const result: { path: string; korean: string }[] = [];

	menu.map((m) => {
		result.push({
			path: m.id,
			korean: m.name,
		});
		if (m.subMenu !== undefined) {
			m.subMenu.map((sub) => {
				result.push({
					path: sub.id,
					korean: sub.name,
				});
				if (sub.subMenu !== undefined) {
					sub.subMenu.map((subsub) => {
						result.push({
							path: subsub.id,
							korean: sub.name,
						});
					});
				}
			});
		}
	});

	return result;
};
