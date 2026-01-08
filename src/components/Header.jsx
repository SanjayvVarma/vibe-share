import Logo from './Logo';
import { StyleSheet, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Header = () => {
    return (
        <View style={styles.container}>
            <Logo fontSize={32} color={"white"} />
            <View style={styles.icon}>
                <FontAwesome size={26} name="search" color="#aaa" />
                <FontAwesome size={26} name="bell-o" color="#aaa" />
            </View>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 17,
        paddingVertical: 13,
        backgroundColor: '#24162bff',
        elevation: 4,
        shadowColor: "#797575ff",
        shadowOpacity: 0.5,
        shadowRadius: 6,
    },

    icon: {
        flexDirection: "row",
        gap: 22,
    }
})