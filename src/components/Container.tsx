import React, { ReactNode } from 'react';
import { Image, Dimensions, StyleSheet, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Constants from 'expo-constants';

import { Box, useTheme } from './Theme';

interface ContainerProps {
  children: ReactNode;
  footer: ReactNode;
}

export const assets = [require('./assets/patterns/1.png')];
const { width, height: wHeight } = Dimensions.get('window');
const aspectRatio = 750 / 1125;
const height = width * aspectRatio;

const Container = ({ children, footer }: ContainerProps) => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  return (
    <KeyboardAwareScrollView scrollEnabled={false}>
      <Box
        height={
          wHeight + (Platform.OS === 'android' ? Constants.statusBarHeight : 0)
        }
        backgroundColor="secondary">
        <Box backgroundColor="white">
          <Box
            borderBottomLeftRadius="xl"
            overflow="hidden"
            height={height * 0.61}>
            <Image
              source={assets[0]}
              style={{
                width,
                height,
                borderBottomLeftRadius: theme.borderRadii.xl,
              }}
            />
          </Box>
        </Box>
        <Box flex={1} overflow="hidden">
          <Image
            source={assets[0]}
            style={{
              ...StyleSheet.absoluteFillObject,
              width,
              height,
              top: -height * 0.61,
            }}
          />
          <Box
            flex={1}
            borderRadius="xl"
            borderTopLeftRadius={0}
            backgroundColor="white">
            {children}
          </Box>
        </Box>
        <Box backgroundColor="secondary" paddingTop="m">
          {footer}
          <Box height={insets.bottom} />
        </Box>
      </Box>
    </KeyboardAwareScrollView>
  );
};

export default Container;
