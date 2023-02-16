import { StyleSheet } from 'react-native';
import { height_screen } from '../../utils/dimensions';
import { Theme } from '../../utils/theme';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.white,
    },
    inner_container: { flex: 1, padding: 8, paddingTop: height_screen * 0.05 },
    text_parag: {
        textAlign: 'justify'
    }
});
export default styles;
