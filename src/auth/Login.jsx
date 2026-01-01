import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Login = () => {
    return (

        <LinearGradient
            colors={['#3fa464ef', '#c1b3b3f3', '#325999ff']}
            style={styles.container}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <Text style={styles.heading}>VibeShare</Text>
        </LinearGradient>

    )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    }
})