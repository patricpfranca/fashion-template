import React, { useRef } from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Container, Button, Text, Box } from '../../components';
import TextInput from '../components/Form/TextInput';
import Footer from '../components/Footer';
import { StackNavigationProps, Routes } from '../../components/Navigation';

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
  passwordConfirmation: Yup.string()
    .equals([Yup.ref('password')], "Passwords don't match")
    .required('Required'),
});

const SignUp = ({ navigation }: StackNavigationProps<Routes, 'SignUp'>) => {
  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik(
    {
      validationSchema: SignUpSchema,
      initialValues: {
        email: '',
        password: '',
        passwordConfirmation: '',
        remember: true,
      },
      onSubmit: (values) => console.log(values),
    }
  );
  const passwordRef = useRef<RNTextInput>(null);
  const passwordConfirmationRef = useRef<RNTextInput>(null);

  const footer = (
    <Footer
      title="Already have an account?"
      action="Login here"
      onPress={() => navigation.navigate('Login')}
    />
  );

  return (
    <Container {...{ footer }}>
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Create account
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Let's us know whate your name, email and your password
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
          <Box marginBottom="m">
            <TextInput
              ref={passwordRef}
              icon="lock"
              placeholder="Enter your Password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              error={errors.password}
              touched={touched.password}
              autoCompleteType="password"
              returnKeyType="next"
              returnKeyLabel="next"
              onSubmitEditing={() => passwordConfirmationRef.current?.focus()}
              secureTextEntry
            />
          </Box>
          <Box marginBottom="m">
            <TextInput
              ref={passwordConfirmationRef}
              icon="lock"
              placeholder="Confirm your Password"
              onChangeText={handleChange('passwordConfirmation')}
              onBlur={handleBlur('passwordConfirmation')}
              error={errors.passwordConfirmation}
              touched={touched.passwordConfirmation}
              autoCompleteType="password"
              returnKeyType="go"
              returnKeyLabel="go"
              onSubmitEditing={() => handleSubmit()}
              secureTextEntry
            />
          </Box>
          <Box alignItems="center" marginTop="m">
            <Button
              variant="primary"
              label="Create your account"
              onPress={handleSubmit}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
