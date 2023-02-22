import { StyleSheet } from 'react-native';
import { Theme } from '../../utils/theme';

const styles = StyleSheet.create({
   DropDowncontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        width: '80%',
        backgroundColor: '#FFF',
        borderRadius: 5,
        padding: 10,
        justifyContent: 'space-between',
        borderColor: 'lightgrey',
        borderWidth: 1.5,
        top: 50
    },
    label: {
        justifyContent: 'flex-start',
        fontSize: 16,
    },
    pickerContainer: {
        flex: 2,
        height: 40,
        marginHorizontal: 10,
    },
    pickerItem: {
        justifyContent: 'flex-start',
    },
    pickerLabel: {
        fontSize: 16,
    },
});

export default styles;
