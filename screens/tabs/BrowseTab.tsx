import { View, Text } from 'native-base'
import ChallengeCard from '../../components/ChallengeCard'
import BottomTab from '../../components/BottomTab'

export default function BrowseTab({ navigation, route }: any) {
    return (
        <View>
            <Text>Browse</Text>
            <ChallengeCard />
            <ChallengeCard />
            <ChallengeCard />
            <BottomTab />
        </View>
    )
}