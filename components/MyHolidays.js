import React, { Component } from "react";
import { StyleSheet, Image } from "react-native";
import { VStack, HStack, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, StatusBar, Heading,Avatar } from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { FontAwesome,FontAwesome5 } from '@expo/vector-icons';
import {EvilIcons,Ionicons } from '@expo/vector-icons';

const MyHolidays = () => {
  return (<Box    bg="orange.50" _text={{ color: "white" }} py="3" borderRadius={4}>
      <HStack justifyContent="space-around" pt="2">
        <HStack >
          <Text>My Holidays</Text>
        </HStack>
        <HStack>
          <Icon color={"orange.500"} size={"2xl"} as={<MaterialCommunityIcons name="account-group" />} mx="2" />
        </HStack>
        <HStack  >
          <Icon color={"orange.500"} size={"sm"} as={<FontAwesome name="arrow-right" />}  />
        </HStack>
      </HStack>
  </Box>
  );
}

export default MyHolidays;



