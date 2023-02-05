import { View, Text, Button } from 'native-base'

export default function DayScreen({ navigation }: any) {
    return (
        <View>
            <Text>Day</Text>
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