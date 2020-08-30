import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';

import { Theme, Box, Text } from './Theme';

export interface RoudedIconProps {
  name: string;
  size: number;
  color: keyof Theme['colors'];
  backgroundColor: string;
}

const RoudedIcon = ({
  name,
  size,
  color,
  backgroundColor,
}: RoudedIconProps) => {
  const iconSize = size * 0.7;

  return (
    <Box
      height={size}
      width={size}
      borderRadius="m"
      justifyContent="center"
      alignItems="center"
      style={{ borderRadius: size / 2 }}
      {...{ backgroundColor }}>
      <Text style={{ width: iconSize, height: iconSize }} {...{ color }}>
        <Icon size={iconSize} {...{ name }} />
      </Text>
    </Box>
  );
};

export default RoudedIcon;
