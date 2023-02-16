import { StyleSheet } from 'react-native'
import { height_screen, width_screen } from '../../utils/dimensions';
import { Theme } from '../../utils/theme';
const styles = StyleSheet.create({
    contain: {
        flex: 1,
        backgroundColor: Theme.white
    },
    mid_container: { backgroundColor: Theme.white, flex: 2.5 },
    mid_inner: {
        height: '35%',
        backgroundColor: Theme.white,
        shadowColor: "#000",
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        margin: 8,
        padding: 8
    },
    barcode_img: { width: 100, height: 100, alignSelf: 'center' },
    barcode_text: { alignSelf: 'center', marginTop: 10 },
    logo_img: { width: 45, height: 45 },
    buttonContainerLogin: {
        backgroundColor: '#808080',
        borderRadius: 5,
        marginEnd: 12
        // alignSelf: 'flex-end'

    },
    buttonView: {
        marginTop: -height_screen * 0.07,
        alignItems: 'flex-end',
    },
    refer_btn: {
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: height_screen * 0.2,
        borderBottomStartRadius: 6,
        borderTopStartRadius: 6,
        backgroundColor: Theme.dark_orange,
        zIndex: 1
    },
    buttonTextLogin: {
        color: Theme.white,
        fontSize: 11,
        lineHeight: 18,
        // fontFamily: POPPINS_MEDIUM,
        textTransform: 'capitalize',
    },
    refer_text: {
        padding: 4,
        color: Theme.white,
        fontWeight: '700'
    }
})
export default styles;