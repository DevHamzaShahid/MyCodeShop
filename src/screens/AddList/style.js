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
        borderRadius: 5,
        height: 40,
    },
    inputTextStyle: {
        fontSize: 16,
        lineHeight: 18,
        color: Theme.black,
    },
    labelContainer: {
        width: '80%',
    },
    button_container: { bottom: 5, backgroundColor: 'red', width: "95%", height: 40, alignSelf: 'center', alignItems: 'center', justifyContent: 'center' },
    button_text: {
        color: Theme.white,
        fontWeight:'bold'
    },
    text1: { alignSelf: 'center', fontWeight: "bold", marginTop: 30, fontSize: 18 },
    text2: { alignSelf: 'center', marginTop: 20 }
});
export default styles;
