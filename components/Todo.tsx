import React, { MouseEventHandler } from "react";
import { TODO } from "./types";
import { HStack, Box, Icon, useColorModeValue } from "@chakra-ui/react";
import Lottie from "react-lottie";
import animationData from "../public/check.json";
import { VscEdit } from "react-icons/vsc";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiCheckCircle } from "react-icons/fi";

type Rrops = {
  todo: TODO;
  editClickHandler: Function;
  deleteClickHandler: Function;
};

const defaultOptions = {
  loop: false,
  autoplay: false,
  animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Todo = (props: Rrops) => {
  const handleEditClick: MouseEventHandler<HTMLButtonElement> = () => {
    props.editClickHandler(props.todo.id);
  };

  const handleDeleteClick: MouseEventHandler<HTMLButtonElement> = () => {
    props.deleteClickHandler(props.todo.id);
  };

  return (
    <>
      <HStack
        justifyContent='space-between'
        fontSize={"sm"}
        fontWeight={500}
        p={2}
        px={4}
        mb={2}
        bg={useColorModeValue("gray.50", "gray.900")}
        color={"gray.500"}
        rounded={"full"}
      >
        <HStack>
          <Lottie options={defaultOptions} height={27} width={27} />
          <span>{props.todo.title}</span>
        </HStack>

        {/* <span>{status[props.todo.status]}</span> */}
        <HStack spacing={2}>
          <button onClick={handleEditClick}>
            <VscEdit />
          </button>
          <button onClick={handleDeleteClick}>
            <RiDeleteBin6Line />
          </button>
        </HStack>
      </HStack>
    </>
  );
};

export default Todo;
