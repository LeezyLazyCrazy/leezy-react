/**
 * 화면 좌측의 개별 메뉴를 구성하는 인터페이스
 */

export interface MenuProps {
	id: string;
	name: string;
	parentUrl: string;
	type: "dir" | "page";
	subMenu?: MenuProps[];
}

/**
 * 화면 좌측의 메뉴를 구성하기 위하여 URL을 갖는 개별 메뉴 Object들을 배치한 배열
 */

export const menu: MenuProps[] = [
	{
		name: "암호장비 관리",
		id: "equipments",
		parentUrl: "",
		type: "dir",
		subMenu: [
			{
				id: "equipment",
				name: "장비 정보",
				type: "dir",
				parentUrl: "eCash",
				subMenu: [
					{
						id: "info",
						name: "장비/제작정보",
						type: "page",
						parentUrl: "eCash/IOTA",
					},
				],
			},
			{
				id: "status",
				name: "상태 정보",
				type: "page",
				parentUrl: "bitcoin",
			},
			{
				id: "tracking",
				name: "장비 추적",
				type: "page",
				parentUrl: "bitcoin",
			},
			{
				id: "holding",
				name: "보유 현황",
				type: "page",
				parentUrl: "bitcoin",
			},
			{
				id: "document",
				name: "수발 관리",
				type: "page",
				parentUrl: "bitcoin",
			},
			{
				id: "maintenance",
				name: "장비 정비 이력",
				type: "page",
				parentUrl: "bitcoin",
			},
			{
				id: "security",
				name: "보안사고정보관리",
				type: "page",
				parentUrl: "bitcoin",
			},
			
		],
	},
	{
		name: "암호자재 관리",
		id: "documents",
		type: "dir",
		parentUrl: "",
		subMenu: [
			{
				id: "certificate",
				name: "증명서 관리",
				type: "page",
				parentUrl: "UNUSSEDLEO",
			},
			{
				id: "administration",
				name: "관리 기록부",
				type: "page",
				parentUrl: "UNUSSEDLEO",
			},
			{
				id: "inspection",
				name: "점검 기록부",
				type: "page",
				parentUrl: "UNUSSEDLEO",
			},
		],
	},
	{
		name: "승인 관리",
		id: "permit",
		type: "dir",
		parentUrl: "",
		subMenu: [
			{
				id: "approval",
				name: "사용 승인",
				type: "page",
				parentUrl: "FTXToken",
			},
			{
				id: "manufacture",
				name: "제작 승인",
				type: "page",
				parentUrl: "FTXToken",
			},
			{
				id: "disposal",
				name: "파기 승인",
				type: "page",
				parentUrl: "FTXToken",
			},
		],
	},
	{
		name: "개발 관리",
		id: "development",
		type: "dir",
		parentUrl: "",
		subMenu: [
			{
				id: "assignment",
				name: "개발 과제",
				type: "dir",
				parentUrl: "eCash",
				subMenu: [
					{
						id: "duration",
						name: "개발과제/소요이력정보",
						type: "page",
						parentUrl: "eCash/IOTA",
					},
					{
						id: "requirement",
						name: "요구사항관리",
						type: "page",
						parentUrl: "eCash/IOTA",
					},
				],
			},
			{
				id: "issues",
				name: "이슈 관리",
				type: "page",
				parentUrl: "Cosmos",
			},
			{
				id: "test",
				name: "시험정보 관리",
				type: "dir",
				parentUrl: "eCash",
				subMenu: [
					{
						id: "general",
						name: "일반 시험",
						type: "page",
						parentUrl: "eCash/IOTA",
					},
										{
						id: "workplace",
						name: "현장 시험",
						type: "page",
						parentUrl: "eCash/IOTA",
					},
				],
			},
			{
				id: "rating",
				name: "평가정보 관리",
				type: "page",
				parentUrl: "Cosmos",
			},
						{
				id: "verify",
				name: "안정성 검증 관리",
				type: "page",
				parentUrl: "Cosmos",
			},
									{
				id: "charge",
				name: "개발담당 관리",
				type: "page",
				parentUrl: "Cosmos",
			},
		],
	},
	{
		name: "제작업체 관리",
		id: "productions",
		type: "dir",
		parentUrl: "",
		subMenu: [
			{
				id: "production",
				name: "제작업체 관리",
				type: "page",
				parentUrl: "VeChain",
			},
		],
	},
	{
		name: "유관기관 관리",
		id: "organizations",
		type: "dir",
		parentUrl: "",
		subMenu: [
			{
				id: "organization",
				name: "유관기관 관리",
				type: "page",
				parentUrl: "Decentraland",
			},
		],
	},
	{
		name: "시스템 관리",
		id: "system",
		type: "dir",
		parentUrl: "",
		subMenu: [
			{
				id: "admin",
				name: "사용자 관리",
				type: "dir",
				parentUrl: "eCash",
				subMenu: [
					{
						id: "manager",
						name: "관리자 관리",
						type: "page",
						parentUrl: "eCash/IOTA",
					},
					{
						id: "user",
						name: "사용자 관리",
						type: "page",
						parentUrl: "eCash/IOTA",
					},
				],
			},			
			{
				id: "terminal",
				name: "단말기 관리",
				type: "dir",
				parentUrl: "eCash",
				subMenu: [
					{
						id: "qr",
						name: "QR코드 정보",
						type: "page",
						parentUrl: "eCash/IOTA",
					},
					{
						id: "object",
						name: "단말기 관리",
						type: "page",
						parentUrl: "eCash/IOTA",
					},
				],
			},	
			{
				id: "data",
				name: "데이터 관리",
				type: "dir",
				parentUrl: "eCash",
				subMenu: [
					{
						id: "upload",
						name: "데이터업로드/다운로드",
						type: "page",
						parentUrl: "eCash/IOTA",
					},
				],
			},

		],
	},
];

// 2depth 까지 이름 flatten시킴.
// breadCrumb, 메누의 한국어명 찾기 등에 사용
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
