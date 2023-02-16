import { StyleSheet } from 'react-native';
import { height_screen, width_screen } from '../../utils/dimensions';
import { Theme } from '../../utils/theme';
const styles = StyleSheet.create({
    contain: {
        flex: 1,
        backgroundColor: Theme.white,
    },
    mid_container: {
        backgroundColor: Theme.white,
        flex: 2.5
    },
    text_busines: {
        alignSelf: 'center',
        fontWeight: '600',
        fontSize: 16,
        marginTop: height_screen * 0.02
    },
    box_busines: {
        backgroundColor: '#e6e6e6'
    },
    labelContainer: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 8,
    },
    inputContainer: {
        borderWidth: 0.4,
        borderColor: Theme.dark_orange,
        height: 35,
        borderRadius: 10,
    },
    inputTextStyle: {
        fontSize: 14,
        lineHeight: 18,
        color: Theme.black,
        // fontFamily: ROBOTO_REGULAR,
    },
});
export default styles;
