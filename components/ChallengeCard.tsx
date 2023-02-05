import { Box, Text, Heading, Image, AspectRatio, Center, Stack, VStack } from "native-base";

export default function ChallengeCard() {
    return (
    <Center>
        <Box w="90%" h="140px" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" backgroundColor= "gray.50" >
            <VStack p="4" space={2}>
                <Heading size="md" ml="-1">
                Run a half marathon
                </Heading>
                <Text color="coolGray.600" fontWeight="400">
                    15 Day Program
                </Text>
            </VStack>
        </Box>
    </Center>
    )
};