import React from 'react';
import { RectButton } from 'react-native-gesture-handler';

import RoundedIcon, { RoudedIconProps } from './RoudedIcon';

interface RoundedIconButtonProps extends RoudedIconProps {
  onPress: () => void;
}

const RoundedIconButton = ({ onPress, ...props }: RoundedIconButtonProps) => {
  return (
    <RectButton {...{ onPress }}>
      <RoundedIcon {...props} />
    </RectButton>
  );
};

RoundedIconButton.defaultProps = {
  iconRatio: 0.7,
};

export default RoundedIconButton;
