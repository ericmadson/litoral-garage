import { HStack, Flex, Text, Image, VStack, Button } from "@chakra-ui/react";
import { bar, car } from "../../assets";
import { carsList } from "../../mocks/cars";

interface carsProps {
  id: number;
  title: string;
  value: string;
}

export function VehicleList() {
  return (
    <>
      <HStack align="center" spacing={2} mb="10px">
        <Image src={car} w="31px" h="20px"></Image>
        <Text color="white" fontWeight="500" fontSize="16px">
          Lista de veículos
        </Text>
        <Image src={bar} w="250px" h="3px"></Image>
      </HStack>
      <Flex overflowY="scroll" h="560px" maxW="430px">
        <VStack spacing={2} align="flex-start" w="100%" paddingRight="10px">
          {carsList.map((car: carsProps) => {
            return (
              <Button
                bg="rgba(89, 89, 89, 0.4);"
                color="#C7C7C7"
                fontWeight="500"
                fontSize="20px"
                w="100%"
                border-radius="2px"
                _hover={{ background: "#FFFFFF", color: "#002C55" }}
                transition="ease 1s"
                justifyContent="flex-start"
                h="68px"
                p="21px 24px"
              >
                {car.title}
              </Button>
            );
          })}
        </VStack>
      </Flex>
    </>
  );
}
