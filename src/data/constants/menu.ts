/**
 * 화면 좌측의 개별 메뉴를 구성하는 인터페이스
 */

import { ReactElement } from "react";
import Main from "../../pages/Main";
import PageComponents from "../../pages/mui/components";
import PageIcon from "../../pages/mui/icons";
import PageToastGrid from "../../pages/toast-ui/toast-grid";
import PageReactQuery from "../../pages/react-query/react-query";
import PageZustand from "../../pages/zustand/zustand";
import PageFramerAnimation from "../../pages/framer/framer-animation";

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
		name: "React-query",
		id: "react-query",
		type: "dir",
		parentUrl: "",
		subMenu: [
			{
				id: "react-query",
				name: "React-query",
				type: "page",
				parentUrl: "react-query",
				element: PageReactQuery
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
				parentUrl: "zustand",
				element: PageZustand
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
				id: "framer-animation",
				name: "Framer animation",
				type: "page",
				parentUrl: "framer animation",
				element: PageFramerAnimation
			},
		],
	},
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
