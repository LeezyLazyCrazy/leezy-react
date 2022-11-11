import { menu } from '../../data/constants/menu';

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
          sub.subMenu.map((subSub) => {
            result.push({
              path: subSub.id,
              korean: sub.name,
            });
          });
        }
      });
    }
  });
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
          sub.subMenu.map((subSub) => {
            result.push({
              path: subSub.id,
              korean: sub.name,
            });
          });
        }
      });
    }
  });

  return result;
};
