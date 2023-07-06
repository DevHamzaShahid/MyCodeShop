import { StyleSheet } from 'react-native';
import { height_screen } from '../../utils/dimensions';
import { Theme } from '../../utils/theme';
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: Theme.white },
    mainImage: { alignItems: 'center', justifyContent: 'center' },
    heading: { flexDirection: 'row', alignItems: 'center', marginVertical: 15, marginHorizontal: 30 },
    box_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: height_screen * 0.05,
        alignItems: 'center',
        padding: 5,
    },
    priceContainer: { flexDirection: 'row', width: '50%', justifyContent: 'space-around', marginHorizontal: 30, alignItems: 'center' },
    offPrice: { justifyContent: 'center', alignItems: 'center', height: 20, borderRadius: 5, backgroundColor: '#EBF6EC', paddingHorizontal: 2, width: 70 },
    actuallPrice: { color: Theme.appRed, textDecorationLine: 'line-through', fontSize: 14, fontWeight: '600' },
    descriptionContainer: { marginHorizontal: 30, marginVertical: 20 },
    desc_heading: { fontSize: 18, fontWeight: '600', marginVertical: 10, color: Theme.black },
    productListContainer: { width: '25%', paddingHorizontal: 5, marginHorizontal: 15, flex: 1, height: '100%', borderRadius: 20 },
    productPriceContainer: { justifyContent: 'center', alignItems: 'center', height: 20, borderRadius: 5, backgroundColor: '#EBF6EC', paddingHorizontal: 2, width: 60 },
    listPrice: { fontSize: 12, color: '#058D13' },
    bottomContainer: { flexDirection: "row", height: 60, justifyContent: 'space-evenly', position: 'absolute', bottom: 20, width: '100%' },
    bottomPriceContainer: { alignItems: 'center', justifyContent: 'center', alignSelf: 'center' },
    finalPrice: { fontSize: 22, fontWeight: '600', color: Theme.black },
    bottomButtonContainer: { width: '60%', height: 50, borderRadius: 18, backgroundColor: Theme.appRed, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' },
    buynowText: { color: Theme.white, fontWeight: 'bold', fontSize: 16 },
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
