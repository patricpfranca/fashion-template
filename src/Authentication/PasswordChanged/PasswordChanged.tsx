import React from 'react';

import { AuthNavigationProps } from '../../components/Navigation';
import {
  Container,
  Box,
  Text,
  Button,
  RoundedIconButton,
  RoundedIcon,
} from '../../components';

const SIZE = 80;

const PasswordChanged = ({
  navigation,
}: AuthNavigationProps<'PasswordChanged'>) => {
  return (
    <Container
      pattern={0}
      footer={
        <Box flexDirection="row" justifyContent="center">
          <RoundedIconButton
            name="x"
            backgroundColor="white"
            color="secondary"
            size={60}
            onPress={() => navigation.pop()}
          />
        </Box>
      }>
      <Box flex={1} justifyContent="center" alignItems="center" padding="xl">
        <RoundedIcon
          name="check"
          size={SIZE}
          backgroundColor="primaryLight"
          color="primary"
        />

        <Text variant="title1" textAlign="center" marginVertical="l">
          Your password was successfully changed
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Close this window and login again
        </Text>

        <Box alignItems="center" marginTop="m">
          <Button
            variant="primary"
            label="Reset password"
            onPress={() => navigation.navigate('Login')}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default PasswordChanged;
