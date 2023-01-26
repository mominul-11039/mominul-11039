import { View, FlatList, StyleSheet } from "react-native"
import DashboardView from '../Components/DashboardView';
import DashboardHeaderView from '../Components/DashboardHeader/DashboardHeaderView';

export default function DashboardScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.dummyContiner}>
                <DashboardHeaderView
                userInfo={props.data}
                />
            </View>
            <FlatList
                style={styles.flatList}
                data={props.recipantList}
                renderItem={ (itemData) => {
                    return(
                    <DashboardView
                        index={itemData.index}
                        recipantItem={itemData.item}
                        recipantCount={props.recipantList.length}
                    />
                    )
                }
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        marginTop: 30,
    },
    dummyContiner: {
    },
    flatList: {
        backgroundColor: '#F7F9FF',
    },
})