import { StyleSheet } from 'react-native';
import { height_screen, width_screen } from '../../utils/dimensions';
import { Theme } from '../../utils/theme';
const styles = StyleSheet.create({
    contain: {
        flex: 1,
        backgroundColor: Theme.white,
    },
    mid_container: { backgroundColor: Theme.white, flex: 2.5 },
    tab_header: { justifyContent: 'space-between', flexDirection: 'row' },
    tab_box: {
        backgroundColor: Theme.yellow,
        padding: 6,
        borderRadius: 4,
        flex: 1,
        marginStart: 8,
        marginEnd: 8,
        marginTop: 8,
        alignItems: 'center',
    },
    tab_text: { fontSize: 18, fontWeight: '600' },
    busineses_text: {
        alignSelf: 'flex-end',
        marginEnd: 8,
        marginTop: 15,
        color: Theme.dark_orange
    },
    refer_btn: {
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: height_screen * 0.2,
        borderBottomStartRadius: 6,
        borderTopStartRadius: 6,
        backgroundColor: Theme.dark_orange,
        zIndex: 1,
    },
    refer_text: {
        padding: 4,
        color: Theme.white,
        fontWeight: '700',
    },
    coin_btn: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: 0,
        zIndex: 1,
        alignItems: 'center'
    },
    coin_img: {
        width: 65,
        height: 65,
        marginBottom: 15
    },
    coin_text: {
        paddingTop: 5
    }
});
export default styles;
