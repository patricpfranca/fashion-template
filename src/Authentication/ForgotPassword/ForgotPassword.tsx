import React from 'react';
import { Linking } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Footer from '../components/Footer';
import { Container, Button, Text, Box } from '../../components';
import TextInput from '../../components/Form/TextInput';
import {
  StackNavigationProps,
  AuthenticationRoutes,
} from '../../components/Navigation';

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
});

const ForgotPassword = ({
  navigation,
}: StackNavigationProps<AuthenticationRoutes, 'ForgotPassword'>) => {
  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik(
    {
      validationSchema: ForgotPasswordSchema,
      initialValues: { email: '' },
      onSubmit: () => navigation.navigate('PasswordChanged'),
    }
  );

  const footer = (
    <Footer
      title="Don't work?"
      action="Try another way"
      onPress={() => Linking.openURL('help@support.com')}
    />
  );

  return (
    <Container pattern={2} {...{ footer }}>
      <Box padding="xl" justifyContent="center" flex={1}>
        <Text variant="title1" textAlign="center" marginBottom="l">
          Forgot password?
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Enter the email address associated with your account
        </Text>
        <Box>
          <Box marginBottom="m">
            <TextInput
              icon="mail"
              placeholder="Enter your Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              error={errors.email}
              touched={touched.email}
              autoCompleteType="email"
              keyboardType="email-address"
              autoCapitalize="none"
              returnKeyType="go"
              returnKeyLabel="go"
              onSubmitEditing={() => handleSubmit()}
            />
          </Box>

          <Box alignItems="center" marginTop="m">
            <Button
              variant="primary"
              label="Reset password"
              onPress={handleSubmit}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
