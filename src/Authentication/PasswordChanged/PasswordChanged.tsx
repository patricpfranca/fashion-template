import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';

import { Routes, StackNavigationProps } from '../../components/Navigation';
import { Container, Box, Text, Button, CloseButton } from '../../components';

const SIZE = 80;

const PasswordChanged = ({
  navigation,
}: StackNavigationProps<Routes, 'PasswordChanged'>) => {
  return (
    <Container
      footer={
        <Box flexDirection="row" justifyContent="center">
          <CloseButton onPress={() => navigation.pop()} />
        </Box>
      }>
      <Box flex={1} justifyContent="center" alignItems="center">
        <Box
          backgroundColor="primaryLight"
          style={{ height: SIZE, width: SIZE, borderRadius: SIZE / 2 }}
          justifyContent="center"
          alignItems="center"
          marginBottom="xl">
          <Text color="primary" textAlign="center">
            <Icon name="check" size={32} />
          </Text>
        </Box>

        <Text variant="title1" textAlign="center" marginBottom="l">
          Forgot password?
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Enter the email address associated with your account
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
