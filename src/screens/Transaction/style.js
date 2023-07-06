import { StyleSheet } from 'react-native';
import { Theme } from '../../utils/theme';
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', alignItems: 'center' },
    listContainer: { marginVertical: 8, height: 100, width: '95%', backgroundColor: '#fff', justifyContent: 'space-evenly', alignItems: 'center', paddingHorizontal: 10, flexDirection: 'row' },
    Icon: { width: '20%', height: 80, alignItems: 'center', justifyContent: 'center' },
    itemBody: { width: '60%', height: 80, paddingHorizontal: 5, paddingVertical: 8, justifyContent: 'space-between' },
    productName: { fontSize: 16, fontWeight: '600', color: Theme.black },
    saveButton: { alignItems: 'center', justifyContent: 'center', backgroundColor: '#ECECEC', width: 40, borderRadius: 5, padding: 2 },
    dateView: { fontSize: 12, color: 'grey' },
    lastContainer: { width: '20%', alignItems: 'center', justifyContent: 'center', height: 80 },
    price: { fontWeight: '500', fontSize: 16, color: Theme.black },
    download: { padding: 5, backgroundColor: Theme.appRed, borderRadius: 5, marginVertical: 8 },
    downloadText: { fontSize: 10, color: '#fff', fontWeight: '500' },
    labelContainer: {

    }
    ,
    inputContainer: {
        marginTop: 20,
        width: '100%',
        backgroundColor: '#F5F5F5',
        borderRadius: 15,
        height: 50
    },

});
export default styles;
