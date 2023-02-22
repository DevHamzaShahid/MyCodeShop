import { StyleSheet } from 'react-native';
import { Theme } from '../../utils/theme';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.white,
    },
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
        top: 50,
        height: 50,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2
    },
    dropDownContainerStyle: {
        borderColor: 'grey',
        borderWidth: 0.3,
        borderTopColor: 'transparent'
    },
   dropdownStyle: {
        borderColor:'transparent',
    backgroundColor:'transparent'
}



});
export default styles;
