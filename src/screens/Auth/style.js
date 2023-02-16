import { StyleSheet } from 'react-native'
import { height_screen, width_screen } from '../../utils/dimensions';
import { Theme } from '../../utils/theme';
const styles = StyleSheet.create({
    contain: {
        flex: 1,
        backgroundColor: Theme.white
    },
    container_inner: {
        alignItems: 'center'
    },
    logoBox: {
        width: width_screen * 0.28,
        height: height_screen * 0.2,
    }
})
export default styles;