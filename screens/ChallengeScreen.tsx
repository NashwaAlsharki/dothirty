import { View, Text, Button } from 'native-base'

export default function ChallengeScreen({ navigation }: any) {
    return (
        <View>
            <Text>Challenge</Text>
            <Button 
                mb='4'
                onPress={() => navigation.navigate('LogIn')}
            >Log In</Button>
            <Button
                onPress={() => navigation.navigate('SignUp')}
            
            >Sign Up</Button>
        </View>
    )
}