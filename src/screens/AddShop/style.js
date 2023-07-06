import { StyleSheet } from 'react-native'
import { height_screen, width_screen } from '../../utils/dimensions';
import { Theme } from '../../utils/theme';
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: Theme.white },
    title: { alignSelf: "center", fontWeight: '600', fontSize: 18, marginHorizontal: 10, color: Theme.black },
    heading: { alignSelf: 'center', marginTop: 80, fontSize: 16, fontWeight: '600',color:Theme.black },
    qrContainer: { alignItems: 'center', marginVertical: 20, alignSelf: 'center' },
    qrBars: { position: 'absolute', top: 20, zIndex: 2 },
    bodyText: { fontSize: 16, marginVertical: 30, color: '#212121', textAlign: 'center', marginHorizontal: 30 },
    bottomContainer: { alignItems: 'center', position: 'absolute', bottom: 100, justifyContent: 'center', alignSelf: 'center', borderRadius: 15, flexDirection: 'row', backgroundColor: Theme.appRed, width: '95%', height: 50 },
    scannerIcon: { marginHorizontal: 10, color: Theme.white },
    buttonText: { color: Theme.white, fontSize: 16, fontWeight: '600' },

})
export default styles;