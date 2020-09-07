import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';

import { Theme, Box, Text } from './Theme';

export interface RoudedIconProps {
  name: string;
  size: number;
  color: keyof Theme['colors'];
  backgroundColor: string;
  iconRatio: number;
}

const RoudedIcon = ({
  name,
  size,
  color,
  backgroundColor,
  iconRatio,
}: RoudedIconProps) => {
  const iconSize = size * iconRatio;

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

RoudedIcon.defaultProps = {
  iconRatio: 0.7,
};

export default RoudedIcon;
