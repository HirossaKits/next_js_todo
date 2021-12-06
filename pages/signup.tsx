import React, { useState } from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import Layout from '../components/Layout';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../firebase';
import { MdPassword } from 'react-icons/md';
import { firebaseAuthError } from '../components/errorMessage';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Sign in with Email and Password without email link.
  const handleSignUpClick = () => {
    createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error.code);
        setError(
          firebaseAuthError[error.code as keyof typeof firebaseAuthError]
        );
      });
  };

  // Learn about email link.

  return (
    <Layout>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'3xl'} color={'gray.600'}>
            アカウント作成
          </Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
          maxW={'sm'}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id='lastName' isRequired>
                  <FormLabel>姓</FormLabel>
                  <Input type='text' />
                </FormControl>
              </Box>
              <Box>
                <FormControl id='firstName' isRequired>
                  <FormLabel>名</FormLabel>
                  <Input type='text' />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id='email' isRequired>
              <FormLabel>メールアドレス</FormLabel>
              <Input
                type='email'
                value={email}
                onChange={(e) => {
                  setError('');
                  setEmail(e.target.value);
                }}
              />
            </FormControl>
            <FormControl id='password' isRequired>
              <FormLabel>パスワード</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  onChange={(e) => {
                    setError('');
                    setPassword(e.target.value);
                  }}
                />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText='Submitting'
                size='lg'
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handleSignUpClick}
              >
                アカウント作成
              </Button>
              {error && <Text color='red'>{error}</Text>}
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                アカウントをお持ちの場合{' '}
                <Link href={'./signin'} color={'blue.400'}>
                  <a>ログイン画面へ</a>
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Layout>
  );
};

export default Signup;
