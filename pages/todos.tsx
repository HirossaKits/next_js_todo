import React from "react";
import {
  Flex,
  Box,
  Stack,
  HStack,
  Text,
  Icon,
  Button,
  Center,
  useColorModeValue,
} from "@chakra-ui/react";
import Layout from "../components/Layout";
import { GiHeartInside } from "react-icons/gi";
import { ImTrophy } from "react-icons/im";
import Todo from "../components/Todo";
import CustomDateRangePicker from "../components/CustomDateRangePicker";
import CustomDatePicker from "../components/CustomDatePicker";

const Todos = () => {
  return (
    <Layout>
      <Flex
        justify='space-around'
        spacing={8}
        mx={"auto"}
        width={"100vw"}
        height={"80vh"}
        py={1}
        px={6}
      >
        <Stack>
          <Stack textAlign={"center"} align={"center"}>
            <HStack
              fontSize={"sm"}
              fontWeight={500}
              p={2}
              px={4}
              mb={2}
              bg={useColorModeValue("blue.50", "blue.900")}
              color={"blue.500"}
              rounded={"full"}
            >
              <Icon as={GiHeartInside} />
              <Text>ToDo</Text>
            </HStack>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={4}
            width={"25vw"}
            height={"100%"}
          >
            {[...new Array(2)].map(() => (
              <Todo
                key='1'
                todo={{
                  id: "1",
                  title: "Hello world",
                  isDone: false,
                  deadline: "2021-09-21",
                }}
                editClickHandler={() => {}}
                deleteClickHandler={() => {}}
              />
            ))}
          </Box>
        </Stack>

        <Stack>
          <Stack textAlign={"center"} align={"center"}>
            <HStack
              fontSize={"sm"}
              fontWeight={500}
              p={2}
              px={4}
              mb={2}
              bg={useColorModeValue("green.50", "green.900")}
              color={"green.500"}
              rounded={"full"}
            >
              <Icon as={ImTrophy} />
              <Text>Done</Text>
            </HStack>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={4}
            width={"25vw"}
            height={"100%"}
          ></Box>
        </Stack>
      </Flex>
    </Layout>
  );
};

export default Todos;
