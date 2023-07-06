import { StyleSheet } from 'react-native';
import { height_screen, width_screen } from '../../../utils/dimensions';
import { Theme } from '../../../utils/theme';

const styles = StyleSheet.create({
    container: {
        height: '65%',
        paddingHorizontal: width_screen * 0.12,
        marginTop: 50,
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
        color: '#9E9E9E'
    },
    labelContainer: {
        width: '100%',
    },
    buttonTextLogin: {
        color: Theme.white,
        fontSize: 14,
        lineHeight: 18,
        textTransform: 'capitalize',
    },
    rememberContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 15 },
    buttonContainerLogin: {
        backgroundColor: Theme.dark_orange,
        marginTop: '5%',
        height: 50,
        borderRadius: 15
    },
    rememberMe: { paddingStart: 10,color:Theme.black },
    bottomContainer:{ alignItems: 'center', marginTop: 20 },
    bottomInner:{flexDirection:'row',marginVertical:30},
    buttonView: {
        alignItems: 'center',
    },
});

export default styles;
