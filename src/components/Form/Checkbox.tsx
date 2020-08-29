import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { Feather as Icon } from '@expo/vector-icons';

import { Box, Text } from '../Theme';
import { StyleSheet } from 'react-native';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const Checkbox = ({ label, onChange, checked }: CheckboxProps) => {
  return (
    <RectButton onPress={() => onChange()} style={{ justifyContent: 'center' }}>
      <Box flexDirection="row" alignItems="center">
        <Box
          marginRight="m"
          height={20}
          width={20}
          borderRadius="s"
          justifyContent="center"
          alignItems="center"
          borderWidth={StyleSheet.hairlineWidth}
          borderColor="primary"
          backgroundColor={checked ? 'primary' : 'white'}>
          <Icon name="check" color="white" />
        </Box>
        <Text variant="button">{label}</Text>
      </Box>
    </RectButton>
  );
};

export default Checkbox;
