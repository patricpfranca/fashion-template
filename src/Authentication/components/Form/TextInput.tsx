import React, { forwardRef, RefObject } from 'react';
import {
  TextInput as RNTextInput,
  StyleSheet,
  TextInputProps as RNTextInputProps,
} from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

import { Box, useTheme } from '../../../components';

interface TextInputProps extends RNTextInputProps {
  icon: string;
  touched?: boolean;
  error?: string;
}

const TextInput = forwardRef(
  ({ icon, touched, error, ...props }: TextInputProps, ref) => {
    const theme = useTheme();
    const SIZE = theme.borderRadii.m * 2.5;
    const reColor = !touched ? 'text' : error ? 'danger' : 'primary';
    const color = theme.colors[reColor];

    return (
      <Box
        flexDirection="row"
        height={48}
        borderRadius="s"
        borderColor={reColor}
        borderWidth={StyleSheet.hairlineWidth}
        alignItems="center"
        paddingRight="s">
        <Box padding="s">
          <Icon name={icon} size={16} {...{ color }} />
        </Box>
        <Box flex={1}>
          <RNTextInput
            underlineColorAndroid="transparent"
            placeholderTextColor={color}
            {...{ ref }}
            {...{ props }}
          />
        </Box>
        {touched && (
          <Box
            height={SIZE}
            width={SIZE}
            borderRadius="m"
            justifyContent="center"
            alignItems="center"
            backgroundColor={!error ? 'primary' : 'danger'}
            style={{ borderRadius: SIZE / 2 }}>
            <Icon
              name={!error ? 'check' : 'x'}
              size={16}
              color="white"
              style={{ textAlign: 'center' }}
            />
          </Box>
        )}
      </Box>
    );
  }
);

export default TextInput;
