import React from 'react';
import { RectButton } from 'react-native-gesture-handler';

import { Theme, Box, Text, theme } from '../../components/Theme';
import { RoundedIcon } from '../../components';

export interface DrawerItemProps {
  icon: string;
  color: keyof Theme['colors'];
  screen: string;
  label: string;
}

const Drawer = ({ color, label, screen, icon }: DrawerItemProps) => {
  return (
    <RectButton style={{ borderRadius: theme.borderRadii.m }}>
      <Box flexDirection="row" alignItems="center" padding="m">
        <RoundedIcon
          iconRatio={0.5}
          name={icon}
          size={36}
          backgroundColor={color}
          color="white"
        />
        <Text variant="button" color="secondary" marginLeft="m">
          {label}
        </Text>
      </Box>
    </RectButton>
  );
};

export default Drawer;
