import { StyleSheet } from 'react-native';
import { height_screen, width_screen } from '../../../utils/dimensions';
import { Theme } from '../../../utils/theme';

const styles = StyleSheet.create({
    container: {
        height: '65%',
        paddingHorizontal: width_screen * 0.12,
        justifyContent: 'center',
    },
    fieldsView: {
        alignItems: 'center',
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: Theme.grey,
        height: 50,
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
    buttonTextLogin: {
        color: Theme.white,
        fontSize: 14,
        lineHeight: 18,
        // fontFamily: POPPINS_MEDIUM,
        textTransform: 'capitalize',
    },
    buttonContainerLogin: {
        backgroundColor: Theme.dark_orange,
        marginTop: '5%',

    },
    buttonView: {
        marginTop: '10%',
        alignItems: 'center',
    },
});

export default styles;
