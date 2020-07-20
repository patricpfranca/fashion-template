import React, { useState } from 'react';
import {
  TextInput as RNTextInput,
  StyleSheet,
  TextInputProps as RNTextInputProps,
} from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

import { Box, theme } from '../../../components';

interface TextInputProps extends RNTextInputProps {
  icon: string;
  validator: (input: string) => boolean;
}

const SIZE = theme.borderRadii.m * 2;
const Valid = true;
const Invalid = false;
const Pristine = null;
type InputState = typeof Valid | typeof Invalid | typeof Pristine;

const TextInput = ({ icon, validator, ...props }: TextInputProps) => {
  const [input, setInput] = useState('');
  const [state, setState] = useState<InputState>(Pristine);
  const reColor: keyof typeof theme.colors =
    state === Pristine ? 'darkGrey' : state === Valid ? 'primary' : 'danger';
  const color = theme.colors[reColor];
  const onChangeText = (text: string) => {
    setInput(text);
    if (state !== Pristine) {
      validate();
    }
  };
  const validate = () => {
    const valid = validator(input);
    setState(valid);
  };

  return (
    <Box
      flexDirection="row"
      height={48}
      borderRadius="s"
      borderColor={reColor}
      borderWidth={StyleSheet.hairlineWidth}
      alignItems="center">
      <Box padding="s">
        <Icon name={icon} size={16} {...{ color }} />
      </Box>
      <Box flex={1}>
        <RNTextInput
          underlineColorAndroid="transparent"
          placeholderTextColor={color}
          onBlur={validate}
          {...{ onChangeText }}
          {...{ props }}
        />
      </Box>
      {(state === Valid || state === Invalid) && (
        <Box
          height={SIZE}
          width={SIZE}
          borderRadius="m"
          justifyContent="center"
          alignItems="center"
          backgroundColor={state === Valid ? 'primary' : 'danger'}>
          <Icon
            name={state === Valid ? 'check' : 'x'}
            size={16}
            color="white"
          />
        </Box>
      )}
    </Box>
  );
};

export default TextInput;
