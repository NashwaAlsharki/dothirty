import { View, Text, Button } from 'native-base'

export default function StartScreen({ navigation }: any) {
    return (
        <View>
            <Text>Start Screen</Text>
            <Button mb='4'
                onPress={() => navigation.navigate('Plan')}
            >Plan</Button>
            <Button mb='4'
                onPress={() => navigation.navigate('Browse')}
            >Browse</Button>
            <Button
                onPress={() => navigation.navigate('Profile')}
            >Profile</Button>
        </View>
    )
}