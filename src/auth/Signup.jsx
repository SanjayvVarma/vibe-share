import { StyleSheet, Text, View } from 'react-native';
import Logo from '../components/Logo';
import InputBox from '../components/InputBox';
import CustomBtn from '../components/CustomBtn';
import { Link } from 'expo-router';

const Signup = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Logo fontSize={50} />
        <Text style={styles.subTitle}>Create an account to never miss a moment from your inner circle.</Text>

        <View style={styles.formContainer}>
          <InputBox placeholder="Username" />
          <InputBox placeholder="Full Name" />
          <InputBox placeholder="Mobile number or Email" />
          <InputBox placeholder="Password" />
          <InputBox placeholder="Confirm Password" />
          <CustomBtn btnTitle="Sign up" />
        </View>

        <Text style={styles.policy}>By creating an account, you acknowledge our Data Policy and agree to our Terms.</Text>

        <View style={styles.bottomSection}>
          <View style={styles.bottomDivider} />
          <View style={styles.loginBars}>
            <Text style={styles.loginTextBase}>Have an account?</Text>
            <Link href="/">
              <Text style={styles.loginTextLink}> Log in</Text>
            </Link>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d2d4dbff",
    alignItems: "center",
    paddingTop: 120,
  },

  mainContainer: {
    width: "88%",
    alignItems: "center",
  },

  subTitle: {
    textAlign: "center",
    fontSize: 15,
    color: "#4d4c4cff",
    marginTop: 9,
    marginBottom: 22,
    lineHeight: 21,
  },

  formContainer: {
    width: "100%",
    gap: 10,
    marginBottom: 15,
    alignItems: "center"
  },

  policy: {
    fontSize: 14,
    color: "#6b6b6b",
    textAlign: "center",
    marginTop: 10,
    lineHeight: 20,
  },

  bottomSection: {
    width: "100%",
    paddingTop: 150,
  },

  bottomDivider: {
    height: 2,
    backgroundColor: "#b0b0b0",
    marginBottom: 14,
  },

  loginBars: {
    flexDirection: "row",
    justifyContent: "center",
  },

  loginTextBase: {
    fontSize: 14,
    color: "#444",
  },

  loginTextLink: {
    fontSize: 14,
    color: "#0095F6",
    fontWeight: "600",
  },
});
