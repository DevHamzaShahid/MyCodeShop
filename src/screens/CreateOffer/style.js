import { StyleSheet } from 'react-native'
import { height_screen, width_screen } from '../../utils/dimensions';
import { Theme } from '../../utils/theme';
const styles = StyleSheet.create({
    container: { backgroundColor: Theme.white, paddingHorizontal: 20, alignItems: 'center' },
    fieldsView: {
        alignItems: 'center',
        paddingHorizontal: 20
    },
    inputContainer: {
        borderWidth: 0.2,
        borderColor: Theme.grey,
        height: 50,
        backgroundColor: '#FAFAFA',
        borderRadius: 15,
    },
    inputTextStyle: {
        fontSize: 12,
        lineHeight: 18,
        color: Theme.black,
        paddingHorizontal: 25,
    },
    inputTextStyleDescription: {
        fontSize: 14,
        color: Theme.black,
        paddingHorizontal: 10,
        backgroundColor: 'red',
        height: 150,
        textAlignVertical: 'top',
    },
    labelContainer: {
        width: '105%',
    },
    buttonTextLogin: {
        color: Theme.white,
        fontSize: 14,
        lineHeight: 18,
        textTransform: 'capitalize',
    },
    buttonTextLogin: {
        color: Theme.white,
        fontSize: 14,
        lineHeight: 18,
        textTransform: 'capitalize',
    },
    buttonContainerLogin: {
        backgroundColor: Theme.dark_orange,
        height: 50,
        borderRadius: 15,
    },
    buttonView: {
        alignItems: 'center',
        width: '100%',
        // position: 'absolute',
        // bottom: 80
    },
})
export default styles;