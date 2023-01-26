import DashboardMenu from '../Components/DashboardMenu';
import RecipantValue from '../Components/RecipantValue';
import RecipantList from '../Components/RecipantList';

const { View } = require("react-native");

export default function DashBoardView(props) {
    if (props.index == 0) {
        return (
            <View>
                <DashboardMenu
                />
                <RecipantValue
                    recipantListCount={props.recipantCount}
                />
                <RecipantList
                    recipantItem={props.recipantItem}
                />
            </View>
        )
    } else {
        return (
            <RecipantList
                recipantItem={props.recipantItem}
            />
        )
    }
}