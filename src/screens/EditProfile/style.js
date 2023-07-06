import { StyleSheet } from 'react-native'
import { height_screen, width_screen } from '../../utils/dimensions';
import { Theme } from '../../utils/theme';
const styles = StyleSheet.create({
    container:{ flex: 1, backgroundColor: Theme.white, alignItems: 'center', paddingVertical: 30 },
    listContainer:{ width: '90%', flexDirection: 'row', alignItems: 'center', height: 60, backgroundColor: '#FAFAFA', justifyContent: 'space-between', paddingHorizontal: 10, marginVertical: 10, borderRadius: 20 },
    text: {
        fontSize: 22,
        fontWeight: '600',
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