import { TextStyle, ViewStyle } from 'react-native';

export interface AppTheme {
  container: ViewStyle;
  text: TextStyle;
  backgroundColor: string;
}

export const lightTheme: AppTheme = {
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#000000',
  },
  backgroundColor: '#ffffff',
};

export const darkTheme: AppTheme = {
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#ffffff',
  },
  backgroundColor: '#000000',
};

export default { lightTheme, darkTheme };