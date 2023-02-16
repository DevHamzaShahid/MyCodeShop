import { StyleSheet } from 'react-native';
import { Theme } from '../../utils/theme';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.white,
    },
    box_busines: {
        // backgroundColor: '#e6e6e6'
        backgroundColor: Theme.white
    },
    labelContainer: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 8,
    },
    inputContainer: {
        borderWidth: 0.4,
        borderColor: Theme.grey,
        height: 35,
        borderRadius: 10,
    },
    inputTextStyle: {
        fontSize: 14,
        lineHeight: 18,
        color: Theme.black,
    },
});
export default styles;
