import { StyleSheet } from 'react-native';
import { Theme } from '../../utils/theme';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.white,
    },
    fieldsView: {
        alignItems: 'center',
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: Theme.grey,
        borderRadius:5,
        height: 40,
    },
    inputTextStyle: {
        fontSize: 16,
        lineHeight: 18,
        color: Theme.black,
        // fontFamily: ROBOTO_REGULAR,
    },
    labelContainer: {
        width: '100%',
    },
});
export default styles;
