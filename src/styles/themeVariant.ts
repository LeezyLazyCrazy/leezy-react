import { IInstitutionType } from '../types/institutionType';

interface IThemeColorsByInstitution {
  name: IInstitutionType;
  primary: {
    main: string;
    light: string;
    dark: string;
  };
  secondary: {
    main: string;
    light: string;
    dark: string;
  };
}

/**
 * 개별 기관별 primary 및 secondary 색상 설정
 */
export const themeColorsByInstitution: IThemeColorsByInstitution[] = [
  {
    name: 'nis',
    primary: {
      main: '#4d565c',
      light: '#9f9fa0',
      dark: '#3a3a3a',
    },
    secondary: {
      main: '#3764ab',
      light: '#597aaa',
      dark: '#0b4baa',
    },
  },
  {
    name: 'gov',
    primary: {
      main: '#2c5e6e',
      light: '#41646d',
      dark: '#05596d',
    },
    secondary: {
      main: '#cb7e3a',
      light: '#c98a5b',
      dark: '#c95600',
    },
  },
  {
    name: 'research',
    primary: {
      main: '#548ec9',
      light: '#88a4bc',
      dark: '#066abc',
    },
    secondary: {
      main: '#d16371',
      light: '#ce7684',
      dark: '#ce0628',
    },
  },
  {
    name: 'manufacturer',
    primary: {
      main: '#413f91',
      light: '#5b5b8e',
      dark: '#07078e',
    },
    secondary: {
      main: '#6cbab7',
      light: '#88b7b3',
      dark: '#08b7aa',
    },
  },
];

/**
 * 기관명을 넣으면 해당하는 컬러를 object로 리턴해줌
 * @param name 기관명칭 IInstitutionType
 * @returns color object
 */
export const findInstitutionColor = (name: IInstitutionType) => {
  const institutionTheme = themeColorsByInstitution.find((theme) => theme.name === name);
  return {
    primary: {
      main: institutionTheme?.primary.main!,
      light: institutionTheme?.primary.light!,
      dark: institutionTheme?.primary.dark!,
    },
    secondary: {
      main: institutionTheme?.secondary.main!,
      light: institutionTheme?.secondary.light!,
      dark: institutionTheme?.secondary.dark!,
    },
  };
};
