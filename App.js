import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
  Container,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import { Platform } from "react-native";
import SpaceHeader from "./components/SpaceHeader";
import MyFooter from "./components/MyFooter";
import MyTask from "./components/MyTask";
import MyHolidays from "./components/MyHolidays";
import MyLeaves from "./components/MyLeaves";
import MyAttendence from "./components/MyAttendence";



export default function App() {
  return (
    <NativeBaseProvider bg="white">
      <Box flex={1}>
        <SpaceHeader />
        <MyAttendence/>
        <MyLeaves/>
       
        <Box px="3">
       
          <Box my="2">
           
            <MyHolidays/>
          </Box>
          <MyTask/>
        </Box>
        <MyFooter/>
      </Box>
    </NativeBaseProvider>
  );
}


