import { StyleSheet } from 'react-native';
import { height_screen } from '../../utils/dimensions';
import { Theme } from '../../utils/theme';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.white,
    },
    text_top: { paddingTop: height_screen * 0.05, padding: 8, fontWeight: '700' },
    inner_container: { flex: 1, padding: 8 },
    text_parag: {
        textAlign: 'justify'
    }
});
export default styles;
