import { Theme } from '../../utils/theme';
import { StyleSheet } from 'react-native';
import { height_screen } from '../../utils/dimensions';

const styles = StyleSheet.create({
    header_container: {
        backgroundColor: Theme.header_color,
        flex: 0.7,
        padding: 5,
        paddingBottom: height_screen * 0.03
    },
    header_icon_row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12,
    },
    header_icon_row_img: { width: 28, height: 28 },
    header_text: { color: Theme.header_text_color, textAlign: 'center' },
    header_row: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        marginTop: 20,
    },
    header_icon_circle: { alignItems: 'center' },
    header_circle_text: { marginTop: 5 },
    header_icon_circle_inner: {
        borderRadius: 30,
        backgroundColor: Theme.dark_orange,
        padding: 12,
    },
    drawer_header: {
        height: 30,
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    drawer_text: { fontWeight: '800' },
    done_text: { color: Theme.grey, fontWeight: '700' }
});
export default styles;
