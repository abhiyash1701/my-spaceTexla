import React, { Component } from "react";
import { StyleSheet, Image } from "react-native";
import { VStack, HStack, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, StatusBar, Heading,Avatar, Divider } from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { FontAwesome,FontAwesome5 } from '@expo/vector-icons';
import {EvilIcons,Ionicons } from '@expo/vector-icons';

const MyLeaves = () => {
    return (<Box bg="muted.100" _text={{ color: "white" }} borderRadius={4}>
        <HStack justifyContent="space-between" py="2" px="3">
            <HStack >
                <Text>My Leaves</Text>
            </HStack>

            <HStack  >
                <Icon color={"blue.500"} size={"sm"} as={<FontAwesome name="arrow-right" />} />
            </HStack>
        </HStack>
        <HStack justifyContent="space-around" pt="2" px="3">
            <HStack >
                <VStack space="4" width={150} bg="orange.100" >

                    <Box bg="orange.500" borderTopLeftRadius={10} borderTopRightRadius={10} p="3">
                        <Center>
                            <Text color="white">Earned Leave</Text>
                        </Center>
                    </Box>
                    <VStack space="2" divider={<Divider />} width={150} bg="orange.100" p="2" >

                        <HStack><Text><Text fontWeight={"bold"} fontSize={22}>12</Text> <Text fontSize={8}>Left</Text></Text></HStack>
                        <HStack justifyContent="space-between">
                            <Text>Current Year</Text>
                            <Text>00</Text>
                        </HStack>
                        <HStack justifyContent="space-between">
                            <Text>Availed</Text>
                            <Text>00</Text>
                        </HStack>
                        <HStack justifyContent="space-between">
                            <Text>Balance</Text>
                            <Text>00</Text>
                        </HStack>

                    </VStack>


                </VStack>
            </HStack>

            <HStack  >
                <VStack space="4" width={150} bg="primary.100" >

                    <Box bg="primary.500" borderTopLeftRadius={10} borderTopRightRadius={10} p="3">
                        <Center>
                            <Text color="white">Casual Leave</Text>
                        </Center>
                    </Box>
                    <VStack space="2" divider={<Divider />} width={150} bg="primary.100" p="2" >

                        <HStack><Text><Text fontWeight={"bold"} fontSize={22}>12</Text> <Text fontSize={8}>Left</Text></Text></HStack>
                        <HStack justifyContent="space-between">
                            <Text>Current Year</Text>
                            <Text>00</Text>
                        </HStack>
                        <HStack justifyContent="space-between">
                            <Text>Availed</Text>
                            <Text>00</Text>
                        </HStack>
                        <HStack justifyContent="space-between">
                            <Text>Balance</Text>
                            <Text>00</Text>
                        </HStack>

                    </VStack>


                </VStack>
            </HStack>
        </HStack>
    </Box>
    );
}

export default MyLeaves;



