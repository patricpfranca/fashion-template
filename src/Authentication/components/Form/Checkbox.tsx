import React, { useState } from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { Feather as Icon } from '@expo/vector-icons';

import { Box, Text } from '../../../components';
import { StyleSheet } from 'react-native';

interface CheckboxProps {
  label: string;
}

const Checkbox = ({ label }: CheckboxProps) => {
  const [checked, setChecked] = useState(false);

  return (
    <RectButton
      onPress={() => setChecked((c) => !c)}
      style={{ justifyContent: 'center' }}>
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
          <Icon name="check" />
        </Box>
        <Text variant="button" color="white">
          {label}
        </Text>
      </Box>
    </RectButton>
  );
};

export default Checkbox;
