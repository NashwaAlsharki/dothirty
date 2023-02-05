import { useState } from 'react';
import { Box, HStack, Center, Icon, Text, Pressable } from 'native-base';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export default function BottomTab({ navigation }: any) {
  const [selected, setSelected] = useState(1);
  return (
  <Box flex={1} bg="white" safeAreaTop width="100%" alignSelf="center">
    <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
      <Pressable opacity={selected === 0 ? 1 : 0.5} py="3" flex={1} onPress={() => setSelected(0)}>
        <Center>
          <Icon mb="1" as={<MaterialCommunityIcons name={selected === 0 ? 'home' : 'home-outline'} />} color="white" size="sm" />
          <Text color="white" fontSize="12">
            Plan
          </Text>
        </Center>
      </Pressable>
      <Pressable opacity={selected === 1 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(1)}>
        <Center>
          <Icon mb="1" as={<MaterialIcons name="search" />} color="white" size="sm" />
          <Text color="white" fontSize="12">
            Challenges
          </Text>
        </Center>
      </Pressable>
      <Pressable opacity={selected === 3 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(3)}>
        <Center>
          <Icon mb="1" as={<MaterialCommunityIcons name={selected === 3 ? 'account' : 'account-outline'} />} color="white" size="sm" />
          <Text color="white" fontSize="12">
            Account
          </Text>
        </Center>
      </Pressable>
    </HStack>
  </Box>
  )
}