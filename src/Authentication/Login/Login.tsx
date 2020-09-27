import React, { useRef } from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { CommonActions } from '@react-navigation/native';
import { TextInput as RNTextInput } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Container, Button, Text, Box } from '../../components';
import TextInput from '../../components/Form/TextInput';
import Checkbox from '../../components/Form/Checkbox';
import Footer from '../components/Footer';
import { AuthNavigationProps } from '../../components/Navigation';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
});

const Login = ({ navigation }: AuthNavigationProps<'Login'>) => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    values,
    setFieldValue,
  } = useFormik({
    validationSchema: LoginSchema,
    initialValues: { email: '', password: '', remember: true },
    onSubmit: () =>
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        })
      ),
  });
  const passwordRef = useRef<RNTextInput>(null);

  const footer = (
    <Footer
      title="Don't have an account?"
      action="Sign Up"
      onPress={() => navigation.navigate('SignUp')}
    />
  );

  return (
    <Container pattern={0} {...{ footer }}>
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Welcome back
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Use your credentials below and login to your account
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
              returnKeyType="next"
              returnKeyLabel="next"
              onSubmitEditing={() => passwordRef.current?.focus()}
            />
          </Box>
          <TextInput
            ref={passwordRef}
            icon="lock"
            placeholder="Enter your Password"
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            error={errors.password}
            touched={touched.password}
            autoCompleteType="password"
            returnKeyType="go"
            returnKeyLabel="go"
            onSubmitEditing={() => handleSubmit()}
            secureTextEntry
          />
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            marginVertical="m">
            <Checkbox
              label="Remember me"
              checked={values.remember}
              onChange={() => setFieldValue('remember', !values.remember)}
            />
            <BorderlessButton
              onPress={() => navigation.navigate('ForgotPassword')}>
              <Text variant="button" color="primary">
                Forgot password
              </Text>
            </BorderlessButton>
          </Box>
          <Box alignItems="center" marginTop="m">
            <Button
              variant="primary"
              label="Log into your account"
              onPress={handleSubmit}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
