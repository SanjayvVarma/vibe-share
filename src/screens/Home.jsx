import Feed from '../components/Feed';
import Story from '../components/Story';
import { StyleSheet } from 'react-native';
import Header from '../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Feed ListHeaderComponent={<Story />} />
        </SafeAreaView >
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#24162bff"
    }
})