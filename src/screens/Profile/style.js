import { StyleSheet } from 'react-native';
import { Theme } from '../../utils/theme';
const styles = StyleSheet.create({
    container:{ flex: 1, backgroundColor: '#fff' },
    modalContainer:{ position: 'absolute', alignItems: 'center', justifyContent: 'center', zIndex: 2, height: '100%', width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.7)' },
    modalBody:{ width: '70%', backgroundColor: '#fff', alignItems: 'center', borderRadius: 50, paddingVertical: 50},
    heading:{ fontSize: 18, color: Theme.black, fontWeight: '600' },
    desc:{ fontSize: 14, color: Theme.black, marginTop: 10,textAlign:'center',paddingHorizontal:10 },
    yes:{ height: 45, width: '75%', marginTop: 20, borderRadius: 15, backgroundColor: '#F75555', alignItems: 'center', justifyContent: 'center' },
    yesText:{ fontSize: 14, color: Theme.white, fontWeight: '600' },
    no:{ height: 45, width: '75%', borderRadius: 15, marginTop: 10, backgroundColor: '#E7E7E7', alignItems: 'center', justifyContent: 'center' },
    noText:{ fontSize: 14, color: Theme.black, fontWeight: '600' },
    sliderContainer: {
        marginVertical: 10,
        height: 60,
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'center',
        borderBottomColor:Theme.grey,
        borderBottomWidth:0.3,
        
    },
    slider: {
        height: 20,
        width: '100%',
    },
});
export default styles;
