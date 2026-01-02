import { StyleSheet, TextInput, View } from 'react-native';

const InputBox = ({ placeholder }) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder={placeholder}
            />
        </View>
    )
}

export default InputBox;

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        width: 340,
        borderColor: 'gray',
        borderRadius: 5,
        fontSize: 15,
        padding: 10,
        backgroundColor: "#eee9e9ff"
    }
})