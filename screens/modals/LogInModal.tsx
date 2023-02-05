import { Center, Box, Heading, VStack, FormControl, Input, Link, Button, HStack, Text } from "native-base";

export default function LogInModal() {
    return (
    <Center w="100%">
        <Box safeArea p="2" py="8" w="90%">
          <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
          color: "warmGray.50"
        }}>
            Welcome Back
          </Heading>
          <Heading mt="1" _dark={{
          color: "warmGray.200"
        }} color="coolGray.600" fontWeight="medium" size="xs">
            Log in to continue!
          </Heading>
  
          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input type="password" />
            </FormControl>
            <Button mt="2" colorScheme="indigo">
              LOG IN
            </Button>
            <HStack justifyContent="center">
              <Link _text={{
              fontSize: "xs",
              fontWeight: "500",
              color: "indigo.500"
            }} alignSelf="flex-end" mt="1">
                Forget Password?
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Center>
    )
}