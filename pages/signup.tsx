import React, { useState } from "react";
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
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import Layout from "../components/Layout";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Layout>
      <Flex
        minH={"80vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"3xl"} color={"gray.600"}>
              アカウント作成
            </Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
            maxW={"sm"}
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
                <Input type='email' />
              </FormControl>
              <FormControl id='password' isRequired>
                <FormLabel>パスワード</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? "text" : "password"} />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
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
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  アカウント作成
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  アカウントをお持ちの場合{" "}
                  <Link href={"./signin"} color={"blue.400"}>
                    <a>ログイン画面へ</a>
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Layout>
  );
};

export default Signup;
