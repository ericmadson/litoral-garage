import "./styles/global.scss";
import { useNuiEvent } from "fivem-nui-react-lib";
import { Flex } from "@chakra-ui/react";
import { Header } from "./components/Header/Header";
import { VehicleList } from "./components/VehicleList/VehicleList";
import { Info } from "./components/Info/Info";

const App = () => {
  return (
    <div className="App">
      <Flex width="100vw" height="100vh">
        <Flex
          mt="76px"
          mb="56px"
          mx="60px"
          flexDir="column"
          w="fit-content"
          justify="flex-start"
        >
          <Header />
          <VehicleList />
          <Info />
        </Flex>
      </Flex>
    </div>
  );
};

export default App;
