import { StyleSheet } from 'react-native';
import { Theme } from '../../utils/theme';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.white,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 15,
        alignSelf: 'center',
        bottom: 60,
        position: 'absolute'
    }
});
export default styles;
