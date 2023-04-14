import React, { Component } from "react";
import { StyleSheet, Image } from "react-native";
import { VStack, HStack, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, StatusBar, Heading,Avatar, Divider } from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { FontAwesome,FontAwesome5 } from '@expo/vector-icons';
import {EvilIcons,Ionicons } from '@expo/vector-icons';

const  MyAttendence = () => {
    return (<Box bg="muted.100" _text={{ color: "white" }} py="2" borderRadius={4}>
        <HStack justifyContent="space-between" px="3">
            <HStack >
                <Text>My Attendence</Text>
            </HStack>

            <HStack  >
                <Icon color={"black"} size={"sm"} as={<FontAwesome name="arrow-right" />} />
            </HStack>
        </HStack>
        <HStack justifyContent="space-between" pt="2" px="3">
            <HStack>
                <Box bg="primary.50" _text={{ color: "white" }} p="2" borderRadius={4} >
                    <HStack justifyContent="space-between" pt="2" space="3" alignItems="center">
                        <HStack >
                         <Icon mb="1" as={<MaterialCommunityIcons name={'face-woman'} />} color="#1E467E" size="sm" />
                        </HStack>
                        <HStack>
                           <VStack>
                             <Text fontSize={10} fontWeight={"bold"}>20</Text>
                             <Text fontSize={8}>Total Days  in </Text>
                             <Text fontSize={8}>Dec</Text>
                            </VStack> 
                        </HStack>
                        
                    </HStack>
                </Box>
            </HStack>
            <HStack>
                <Box bg="orange.50" _text={{ color: "white" }} p="2" borderRadius={4} >
                    <HStack justifyContent="space-between" pt="2" space="3" alignItems="center">
                        <HStack >
                         <Icon mb="1" as={<MaterialCommunityIcons name={'face-woman'} />} color="orange.500" size="sm" />
                        </HStack>
                        <HStack>
                           <VStack>
                             <Text fontSize={10} fontWeight={"bold"}>20</Text>
                             <Text fontSize={8}>Paybale Days</Text>
                             <Text fontSize={8}>Dec</Text>
                            </VStack> 
                        </HStack>
                        
                    </HStack>
                </Box>
            </HStack>
            <HStack>
                <Box bg="yellow.50" _text={{ color: "white" }} p="2" borderRadius={4} >
                    <HStack justifyContent="space-between" pt="2" space="3" alignItems="center">
                        <HStack >
                         <Icon mb="1" as={<MaterialCommunityIcons name={'face-woman'} />} color="yellow.500" size="sm" />
                        </HStack>
                        <HStack>
                           <VStack>
                             <Text fontSize={10} fontWeight={"bold"}>20</Text>
                             <Text fontSize={8}>Total Days  in </Text>
                             <Text fontSize={8}>Dec</Text>
                            </VStack> 
                        </HStack>
                        
                    </HStack>
                </Box>
            </HStack>
        </HStack>
    </Box>
    );
}

export default MyAttendence;



