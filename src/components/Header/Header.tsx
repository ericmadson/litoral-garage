import { Flex, Text, VStack } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex>
      <VStack spacing={-4} align="flex-start">
        <Text fontWeight="500" color="#F5F5F5" fontSize="20px">
          Seja bem vindo à
        </Text>
        <Text color="#3687FF" fontWeight="700" fontSize="50px">
          GARAGEM
        </Text>
      </VStack>
    </Flex>
  );
}
