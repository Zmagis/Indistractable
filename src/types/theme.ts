import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    type: string;
    colors: AppColors;
  }

  export interface AppColors {
    primary: string;
    secondary: string;
    tertiary: string;
    text: string;
    textSecondary: string;
    background: string;
    accent: string;
    disabled: string;
    success: string;
    warning: string;
    error: string;
  }
}
