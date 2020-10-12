import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';

import RoundedIcon, { RoudedIconProps } from './RoudedIcon';

interface RoundedIconButtonProps extends RoudedIconProps {
  onPress: () => void;
}

const RoundedIconButton = ({ onPress, ...props }: RoundedIconButtonProps) => {
  return (
    <BorderlessButton {...{ onPress }}>
      <RoundedIcon {...props} />
    </BorderlessButton>
  );
};

RoundedIconButton.defaultProps = {
  iconRatio: 0.7,
};

export default RoundedIconButton;
