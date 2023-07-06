import { StyleSheet } from 'react-native'
import { height_screen, width_screen } from '../../utils/dimensions';
import { Theme } from '../../utils/theme';
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F14825' },
    bodyContainer: { alignItems: 'center', justifyContent: 'center', marginVertical: '20%' },
    text1:{ marginTop: 20, fontSize: 16, color: '#fff', },
    text2:{ marginTop: 20, fontSize: 22, color: '#fff', fontWeight: '600' },
    text: {
        fontSize: 22,
        fontWeight: '600',
    },
    buttonContainer:{ position: 'absolute', width: '100%', bottom: 30 },
    buttonTextLogin: {
        color: Theme.appRed
    },
    buttonContainerLogin: {
        backgroundColor: Theme.white,
        height: 50,
        borderRadius: 15,
        width: '90%',
        alignSelf: 'center',
    }
})
export default styles;