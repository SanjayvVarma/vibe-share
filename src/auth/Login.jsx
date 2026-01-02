import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import InputBox from "../components/InputBox";
import CustomBtn from "../components/CustomBtn";
import Logo from "../components/Logo";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const Login = () => {
    return (

        <LinearGradient
            colors={['#6a166fe2', '#60947bf3', '#2b4f88ff']}
            style={styles.container}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.9, y: 1 }}
        >
            <View style={styles.mainContent}>
                <Logo fontSize={50} color='#efe3e3ff' />
                <View style={styles.formContainer}>
                    <InputBox
                        placeholder="Phone number, Username or email address"
                    />
                    <InputBox
                        placeholder="Password"
                    />
                </View>

                <View>
                    <Link href="/forgot-password" style={styles.link}>
                        Forgotten Password?
                    </Link>
                    <CustomBtn btnTitle="Log In" />
                </View>

                <View style={styles.lineContainer}>
                    <View style={styles.line} />
                    <Text style={styles.orText}>OR</Text>
                    <View style={styles.line} />
                </View>

                <TouchableOpacity style={styles.googleContainer}>
                    <Ionicons name="logo-google" size={24} color="#e0e01aff" />
                    <Text style={styles.text}>Log In with Google</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.bottomSection}>
                <View style={styles.bottomDivider} />
                <View style={styles.signUpBars}>
                    <Text style={styles.signUpTextBase}>Don't have an account?</Text>
                    <Link href="/sign-up">
                        <Text style={styles.signUpTextLink}> Sign up</Text>
                    </Link>
                </View>
            </View>
        </LinearGradient>

    )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },

    mainContent: {
        alignItems: "center",
        paddingTop: 150,
    },

    formContainer: {
        paddingTop: 50,
        gap: 20
    },

    link: {
        color: '#0d00ffff',
        marginVertical: 13,
        fontWeight: '500',
        alignSelf: 'flex-end',
    },

    lineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 25,
        width: '80%',
    },

    line: {
        flex: 1,
        height: 2,
        backgroundColor: '#5f5a5aff',
    },

    orText: {
        marginHorizontal: 10,
        color: '#4c4848ff',
        fontWeight: '600',
        fontSize: 15,
    },

    googleContainer: {
        flexDirection: "row",
        gap: 6,
        backgroundColor: "#2116f0ff",
        paddingHorizontal: 30,
        paddingVertical: 8,
        borderRadius: 5
    },

    text: {
        color: '#efeaeaff',
        fontWeight: '600',
        fontSize: 18,
    },

    bottomSection: {
        position: "absolute",
        bottom: 40,
        width: "100%",
        alignItems: "center",
    },

    bottomDivider: {
        width: "100%",
        height: 2,
        backgroundColor: "#afa9a9ff",
        marginBottom: 20,
    },

    signUpBars: {
        flexDirection: "row"
    },

    signUpTextBase: {
        fontSize: 15,
        color: "#d6d6d6",
    },

    signUpTextLink: {
        fontSize: 15,
        color: "#2116f0ff",
        fontWeight: "600",
    },
})