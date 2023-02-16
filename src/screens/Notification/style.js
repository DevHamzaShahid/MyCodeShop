import { StyleSheet } from 'react-native';
import { height_screen } from '../../utils/dimensions';
import { Theme } from '../../utils/theme';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.white,
    },
    box_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: height_screen * 0.05,
        alignItems: 'center',
        padding: 5,
    },
    main_text: {
        fontWeight: '600',
        fontSize: 18,
        paddingVertical: 3
    },
    bottom_text: {
        fontSize: 10
    }
});
export default styles;
