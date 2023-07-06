import { StyleSheet } from 'react-native'
import { height_screen, width_screen } from '../../utils/dimensions';
import { Theme } from '../../utils/theme';
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: Theme.white, paddingHorizontal: 20, alignItems: 'center' },
    fieldsView: {
        // alignItems: 'center',
        marginHorizontal:20,
        marginVertical:0
    },
    fieldHeading:{
        fontSize:16,
        fontWeight:'600',
        marginVertical:10
    },
    inputContainer: {
        borderWidth: 0.2,
        borderColor: Theme.grey,
        height: 50,
        backgroundColor: '#FAFAFA',
        borderRadius: 15,
    },
    inputTextStyle: {
        fontSize: 14,
        lineHeight: 18,
        color: Theme.black,
        paddingHorizontal: 10,
    },
    labelContainer: {
        width: '100%',
    },
    buttonTextLogin: {
        color: Theme.white,
        fontSize: 14,
        lineHeight: 18,
        textTransform: 'capitalize',
    },
    buttonTextLogin: {
        color: Theme.white,
        fontSize: 14,
        lineHeight: 18,
        textTransform: 'capitalize',
    },
    buttonContainerLogin: {
        backgroundColor: Theme.dark_orange,
        height: 50,
        borderRadius: 15,
        alignItems: 'center',
        width:'95%',
        // position:'absolute',
        // bottom:100,
        alignSelf:'center',
        marginTop:120
    },
    buttonView: {
        alignItems: 'center',
        width:'95%',
        position:'absolute',
        bottom:100,
        alignSelf:'center'
    },
})
export default styles;