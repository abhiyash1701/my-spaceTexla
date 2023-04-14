import React, { Component } from "react";
import { StyleSheet, Image } from "react-native";
import { VStack, HStack, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, StatusBar, Heading,Avatar } from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';
import {EvilIcons,Ionicons } from '@expo/vector-icons';

const SpaceHeader = () => {
  return (<Box bg="trueGray.100" height={"22%"}>
    <StatusBar bg="#3700B3" barStyle="light-content" />
    <Box safeAreaTop bg="primary.50" />
    <HStack  px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" >
      <HStack alignItems="center">
        <IconButton icon={<Icon size="sm" as={FontAwesome} name="arrow-left" color="muted.500" />} />
        <Text color="orange.600" fontSize="20" fontWeight="bold">
          My Space
        </Text>
      </HStack>
      <HStack>
        <IconButton icon={<Icon as={MaterialIcons} name="search" size="sm" color="muted.500" />} />
        <IconButton icon={<Icon as={FontAwesome} name="bell" size="sm" color="muted.500" />} />
      </HStack>
    </HStack>
    <Box   bg="orange.100" _text={{ color: "white" }} py="3">
      <HStack justifyContent="space-around" pt="2">
        <HStack >
          <Avatar bg="trueGray.300" size="lg">
            <Icon as={<MaterialCommunityIcons name="face-woman"  />} color="black" size="2xl" />
          </Avatar>
        </HStack>
        <HStack>
          <VStack>
            <Text fontWeight="bold" color="orange.500">Ananya Singh</Text>
            <Text>UX Designer</Text>
            <Text>127927</Text>
          </VStack>
        </HStack>
        <HStack  >
          <Icon color={"orange.500"} size={"md"} as={<MaterialCommunityIcons name="eye" />} mx="2" />
        </HStack>
      </HStack>
      

    </Box>
  </Box>
  );
}

export default SpaceHeader;



