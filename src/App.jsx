
import { Button, Flex, Text, VStack } from "@chakra-ui/react"
import LeftSidebar from "./components/LeftSidebar"
import Home from "./components/Home"
import RightSidebar from "./components/RightSidebar"
import { IoLinkOutline } from "react-icons/io5";


function App() {


  return (
    <>
      <Flex h={"749px"} bg={"#000000"} p={"15px 14px"} gap={"30px"}>
        <LeftSidebar />
        <VStack gap={"13px"} mt={"50px"}>
          <Flex height={"32px"} w={"1122px"} justifyContent={"space-between"} alignItems={"center"}>
            <Text fontSize={"16px"} fontWeight={"500"} color={"#fff"}>Product Playlists</Text>
            <Button leftIcon={<IoLinkOutline />} w={"148px"} h={"32px"} bg={"#017EFA"} p={"10px 6px"} color={"#fff"} fontWeight={"500"} borderRadius={"10px"}>Generate Code</Button>

          </Flex>
          <Flex gap={"10px"}>
            <Home />
            <RightSidebar />
          </Flex>
        </VStack>
      </Flex>

    </>
  )
}

export default App
