import { View, Text, Button, VStack, Center, Box, Heading } from 'native-base'
import BottomTab from '../../components/BottomTab'
import DarkModeToggle from '../../components/DarkModeToggle'

export default function ProfileTab({ navigation, route }: any) {
    return (
    <Center w="100%" _dark={{ bg: "blueGray.800" }} _light={{ bg: "blueGray.200" }}>
      <VStack safeArea p="2" w="90%" py="8" space="2">
        <Heading size="lg" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }} fontWeight="semibold">
          You don't have a profile yet
        </Heading>
        <Heading mt="1" color="coolGray.600" _dark={{
        color: "warmGray.200"
      }} fontWeight="medium" size="xs">
          Click below to log in or sign up
        </Heading>
        <VStack space="3" mt="8">
        <Button onPress={() => navigation.navigate('LogIn')}>
            LOG IN
        </Button>
        <Button variant="outline" onPress={() => navigation.navigate('SignUp')}>
            SIGN UP
        </Button>
        <Heading mt="10" color="coolGray.600" _dark={{
        color: "warmGray.200"
      }} fontWeight="medium" size="xs">
          Toggle to change color theme
        </Heading>
        </VStack>
        <DarkModeToggle />
        </VStack>
      <BottomTab />
    </Center>
    )
}