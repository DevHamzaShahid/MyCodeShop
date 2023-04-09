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
    },
    button_container: { position: 'absolute', bottom: 5, backgroundColor: 'red', width: "95%", height: 40, alignSelf: 'center', alignItems: 'center', justifyContent: 'center' },
    button_text: {
        color: Theme.white
    },
    code_container: {
        flexDirection: 'row', alignItems: 'center'
    }
    ,
    code_text: {
        fontSize: 28, fontWeight: 'bold', padding: 8
    }
})
export default styles;