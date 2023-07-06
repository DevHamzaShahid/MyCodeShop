import { StyleSheet } from 'react-native';

import { width_screen } from '../../utils/dimensions';
import { Theme } from '../../utils/theme';

const styles = StyleSheet.create({
    container: {
        height: '100%',
        paddingHorizontal: width_screen * 0.08,
        // justifyContent: 'center',
        paddingTop:50,
        backgroundColor: '#fff'
    },
    fieldsView: {
        alignItems: 'center',
    },
    inputContainer: {
        borderWidth: 0.2,
        borderColor: Theme.grey,
        height: 60,
        backgroundColor: '#FAFAFA',
        borderRadius: 15,
    },
    inputTextStyle: {
        fontSize: 16,
        lineHeight: 18,
        color: Theme.black,
        paddingHorizontal: 10,
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
    buttonContainer:{ position: 'absolute', width: '100%', bottom: 30,alignSelf:'center' },
    buttonContainerLogin: {
        backgroundColor: Theme.dark_orange,
        marginTop: '5%',
        height: 50,
        borderRadius: 15
    },
    buttonView: {
        alignItems: 'center',
    },
});

export default styles;
