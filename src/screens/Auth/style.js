import { StyleSheet } from 'react-native'
import { height_screen, width_screen } from '../../utils/dimensions';
import { Theme } from '../../utils/theme';
const styles = StyleSheet.create({
    contain: {
        flex: 1,
        backgroundColor: Theme.white
    },
    container_inner: {
        alignItems: 'center',
        marginTop:"15%"
    },
    logoBox: {
        width: width_screen * 0.30,
        height: height_screen * 0.23,
    },
    text:{
        fontSize:22,
        fontWeight:'600',
        color:Theme.black
    },
    buttonView: {
        alignItems: 'center',
    },
})
export default styles;