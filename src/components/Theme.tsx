import { ViewStyle, TextStyle, ImageStyle } from 'react-native';
import {
  createText,
  createBox,
  useTheme as useReTheme,
} from '@shopify/restyle';

export const theme = {
  colors: {
    primary: '#2CB9B0',
    primaryLight: '#E7F9F7',
    secondary: '#0C0D34',
    danger: '#FF0058',
    text: 'rgba(12, 13, 52, 0.7)',
    white: '#FFF',
    grey: 'rgba(12, 13, 52, 0.05)',
    darkGrey: '#8A8D90',
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      lineHeight: 80,
      fontFamily: 'SFProText-Bold',
      color: 'white',
      textAlign: 'center',
    },
    title1: {
      fontSize: 28,
      fontFamily: 'SFProText-Semibold',
      color: 'secondary',
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: 'SFProText-Semibold',
      color: 'secondary',
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: 'SFProText-Regular',
      color: 'text',
    },
    button: {
      fontSize: 15,
      fontFamily: 'SFProText-Regular',
      color: 'text',
    },
  },
  breakpoints: {},
};

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export const useTheme = () => useReTheme<Theme>();

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export const makeStyles = <T extends NamedStyles<T>>(
  styles: (theme: Theme) => T
) => () => {
  const currentTheme = useTheme();
  return styles(currentTheme);
};
