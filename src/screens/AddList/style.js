import { StyleSheet } from 'react-native'
import { height_screen, width_screen } from '../../utils/dimensions';
import { Theme } from '../../utils/theme';
const styles = StyleSheet.create({
    container:{ flex: 1, backgroundColor: Theme.white, paddingHorizontal: 20 },
    headerText:{ marginVertical: 20, fontSize: 16,color:Theme.black },
    listContainer:{ flexDirection: 'row', alignItems: 'center', height: 70, borderBottomColor: '#EEEEEE', borderBottomWidth: 1 },
    text: {
        fontSize: 22,
        fontWeight: '600',
        color:Theme.black
    },
    buttonContainer:{ position: 'absolute', width: '100%', bottom: 30,alignSelf:'center' },
    buttonView: {
        backgroundColor: "#fff",
        height: 50,
        marginHorizontal: '7%',
        borderRadius:15,
    },
    buttonTextLogin:{
        color:Theme.white,
        fontWeight:'600'
    },
    buttonContainerLogin: {
        backgroundColor: Theme.appRed,
        height: 50,
        borderRadius: 15,
        width:'90%',
        alignSelf:'center'
    }
})
export default styles;