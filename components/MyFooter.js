import React from 'react';
import { useTheme, HStack, VStack, Pressable, Icon, Box, Center, Text } from 'native-base';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { FontAwesome } from '@expo/vector-icons';

const MyFooter = () => {
  const { colors } = useTheme();

    return (<Box flex={1} bg="#FFFFFF" safeAreaBottom width="100%" maxW="800px" alignSelf="center">

        <HStack alignItems="center" safeAreaBottom my="4" mx="0">
            <Pressable flex={1}>
                <Center>
                    <Text p={2}><Icon mb="1" as={<MaterialCommunityIcons name="home" />} color="muted.600" size="md" /></Text>
                    <Text color="muted.600" fontSize="12">
                        Home
                    </Text>
                </Center>
            </Pressable>
            <Pressable flex={1} >
                <Center >
                    <Text borderWidth={1} borderColor={colors.orange[600]} borderRadius={30} p={2}> <Icon mb="1" as={<MaterialCommunityIcons name={'face-woman'} />} color="#1E467E" size="sm" /></Text>
                    <Text color="orange.600" fontSize="12" fontWeight={"bold"}>
                        My Space
                    </Text>
                </Center>
            </Pressable>

            <Pressable flex={1} >
                <Center>
                <Text p={2}><Icon mb="1" as={<MaterialCommunityIcons name="account-group" />} color="muted.600" size="md" /></Text>
                    <Text color="muted.600" fontSize="12" >
                        My Team
                    </Text>
                </Center>
            </Pressable>
            <Pressable flex={1} >
                <Center>
                <Text p={2}><Icon mb="1" as={<MaterialCommunityIcons name={'keyboard-settings'} />} color="muted.600" size="md" /></Text>
                    <Text color="muted.600" fontSize="12">
                        Setting
                    </Text>
                </Center>
            </Pressable>
        </HStack>
    </Box>

    );
}

export default MyFooter;

