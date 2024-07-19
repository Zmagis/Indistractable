import {AppColors, DefaultTheme} from 'styled-components/native';

const colors: AppColors = {
  primary: '#FFD700',
  secondary: '#FFA500',
  tertiary: '#FFECB3',
  disabled: '#BDBDBD',
  text: '#333333',
  textSecondary: '#666666',
  background: '#FFFFFF',
  accent: '#007BFF',
  error: '#FF5252',
  success: '#4CAF50',
  warning: '#FFC107',
};

export type Colors = keyof typeof colors;

export const theme: DefaultTheme = {
  type: 'light',
  colors,
};
