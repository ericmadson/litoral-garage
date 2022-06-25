import { HStack, Flex, Text, Image, Button, Tag } from "@chakra-ui/react";
import { bar, alertIcon } from "../../assets";

export function Info() {
  return (
    <>
      <HStack align="center" spacing={2} my="10px">
        <Image src={alertIcon} w="31px" h="20px"></Image>
        <Text color="white" fontWeight="500" fontSize="16px">
          Informações
        </Text>
        <Image src={bar} w="280px" h="3px"></Image>
      </HStack>
      <Flex justify="space-between" mt="5px">
        <Text color="#CCCCCC">TAXA</Text>
        <Flex>
          <Tag
            fontWeight="500"
            fontSize="16px"
            color="#00294F"
            bg="#3687FF"
            mr="5px"
          >
            $200.000
          </Tag>
          <Tag fontWeight="500" fontSize="16px" color="#FFFFFF" bg="#4F9E2A">
            PAGO
          </Tag>
        </Flex>
      </Flex>
      <Button
        mt="17px"
        mb="10px"
        color="#FFFFFF"
        bg="#3687FF"
        fontWeight="500"
        fontSize="25px"
        _hover={{ opacity: "0.8" }}
        transition="ease 1s"
        py="40px"
        px="63px"
      >
        RETIRAR
      </Button>
      <Button
        color="#FFFFFF"
        bg="rgba(92, 104, 113, 0.68)"
        fontWeight="400"
        fontSize="20px"
        _hover={{ opacity: "0.8" }}
        transition="ease 0.1s"
        py="20px"
      >
        GUARDAR
      </Button>
    </>
  );
}
