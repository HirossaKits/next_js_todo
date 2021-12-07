import React from 'react';
// import { signIn, signOut, useSession } from "next-auth/client";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  Center,
  useColorModeValue,
} from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import Layout from '../components/Layout';
import Loading from '../components/Loading';
import { signInWithGoogle, signInWithGitHub } from '../firebase';
import { useAuthState } from '../hooks/useAuthState';

const Signin = () => {
  const [user, loading] = useAuthState();
  const backgroundColor = useColorModeValue('white', 'gray.700');

  if (loading) {
    return <Loading />;
  }

  return (
    <Layout>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'3xl'} color={'gray.600'}>
            ログイン
          </Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={backgroundColor}
          boxShadow={'lg'}
          p={8}
          width={'sm'}
        >
          <Stack spacing={4}>
            <FormControl id='email'>
              <FormLabel>メールアドレス</FormLabel>
              <Input type='email' />
            </FormControl>
            <FormControl id='password'>
              <FormLabel>パスワード</FormLabel>
              <Input type='password' />
            </FormControl>
            <Stack spacing={4}>
              <Stack
                direction={{ base: 'column', sm: 'column' }}
                align={'start'}
                justify={'space-between'}
                mt={2}
                mb={2}
              >
                <Checkbox>ログイン状態を保持する</Checkbox>
                <Link color={'blue.400'}>パスワードを忘れた場合</Link>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
              >
                ログイン
              </Button>
              <Button
                w={'full'}
                variant={'outline'}
                leftIcon={<FcGoogle />}
                onClick={signInWithGoogle}
              >
                <Center>
                  <Text>Google アカウントでログイン</Text>
                </Center>
              </Button>
              <Button
                w={'full'}
                variant={'outline'}
                leftIcon={<FaGithub />}
                onClick={signInWithGitHub}
              >
                <Center>
                  <Text>Github アカウントでログイン</Text>
                </Center>
              </Button>
              <Box width={'full'} textAlign={'center'}>
                <Link href={'./signup'} color={'blue.400'}>
                  <a>アカウントを作成</a>
                </Link>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Layout>
  );
};

export default Signin;
