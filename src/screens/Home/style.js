import { StyleSheet } from 'react-native';
import { Theme } from '../../utils/theme';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
       marginTop: 20
    },
    greeting: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '40%',
        padding: 5,

    },
    greetingText: {
        color: '#757575',
        paddingHorizontal: 15,
        position: 'absolute'
    },
    headerContainer: {
        paddingHorizontal: 10
    },
    headerIcons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: 30,
        position: 'absolute',
        right: 10,
        top: 12,
        zIndex: 2
    },
    Evan: {
        fontWeight: '700',
        fontSize: 20,
        color: Theme.black
    },
    inputContainer: {
        width: '100%',
        borderRadius: 20,
        height: 50,
        marginTop: 15
    },
    labelContainer: {
    },
    list1Container: { alignItems: 'center', paddingHorizontal: 10, marginVertical: 15 },
    list1text: { borderRadius: 12, marginTop: 10, alignItems: 'center', backgroundColor: '#10101014', paddingHorizontal: 10, height: 30, justifyContent: 'center' },
    list2Container: { alignItems: 'center', paddingHorizontal: 10, marginVertical: 15 },
    list2TextContainer: { borderRadius: 12, marginTop: 10, alignItems: 'center', borderColor: Theme.appRed, borderWidth: 2, paddingHorizontal: 10, height: 40, justifyContent: 'center' },
    list2Text: { fontWeight: '500' },
    list3Container: { width: '95%', height: 180, backgroundColor: Theme.white, alignSelf: 'center', marginVertical: 10, borderRadius: 15, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
    itemContainer: { marginHorizontal: 10 },
    list3Text1: { fontSize: 18, fontWeight: '600', color: Theme.black },
    priceContainer: { height: 20, paddingHorizontal: 10, backgroundColor: '#EBF6EC', marginHorizontal: 5, borderRadius: 5, alignItems: 'center', justifyContent: "center" },
    timeContainer: { flexDirection: 'row', marginVertical: 10, marginHorizontal: 5 },
    list3Text2: { width: '90%', marginVertical: 10, textAlign: 'justify', fontSize: 12, color: Theme.black ,fontWeight:'300'},
    list1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15
    },
    list1Text1: {
        fontWeight: '700',
        fontSize: 18,
        color: Theme.black
    },
    list1Text2: {
        fontSize: 14,
        color: Theme.appRed,
        fontWeight: '600'
    }
});
export default styles;
