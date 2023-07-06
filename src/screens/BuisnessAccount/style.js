import { StyleSheet } from 'react-native';
import { Theme } from '../../utils/theme';
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    modalContainer: { position: 'absolute', alignItems: 'center', justifyContent: 'center', zIndex: 2, height: '100%', width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.7)' },
    modalBody: { width: '80%', backgroundColor: '#fff', alignItems: 'center', borderRadius: 35, paddingVertical: 40 },
    heading: { fontSize: 18, color: Theme.black, fontWeight: '600' },
    desc: { fontSize: 14, color: Theme.black, marginTop: 10, textAlign: 'center' },
    yes: { height: 45, width: '65%', marginTop: 20, borderRadius: 15, alignItems: 'center', justifyContent: 'center', marginVertical: 10 },
    yesText: { fontSize: 14, color: Theme.white, fontWeight: '600' },
    no: { height: 45, width: '65%', borderRadius: 15, marginTop: 5, alignItems: 'center', justifyContent: 'center', },
    noText: { fontSize: 14, color: Theme.black, fontWeight: '600' },
    sliderContainer: {
        marginTop: 50,
        height: 20,
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    slider: {
        height: 20,
        width: '100%',
    },
});
export default styles;
