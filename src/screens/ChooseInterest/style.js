import { StyleSheet } from 'react-native'
import { height_screen, width_screen } from '../../utils/dimensions';
import { Theme } from '../../utils/theme';
const styles = StyleSheet.create({
    container:
        { flex: 1, alignItems: 'center', paddingHorizontal: 20, backgroundColor: Theme.white }
    ,
    container_inner: {
        alignItems: 'center',
        marginTop: "15%"
    },
    listContainer:{ flexDirection: 'row', flexWrap: 'wrap' },
    itemContainer:{  margin: 10, padding: 10, borderRadius: 10, borderColor: Theme.appRed, borderWidth: 2 },
    itemText:{ fontWeight: '600' },
    textHeader:{ marginVertical: 15, fontSize: 16 ,color:Theme.black},
    logoBox: {
        width: width_screen * 0.30,
        height: height_screen * 0.23,
    },
    text: {
        fontSize: 22,
        fontWeight: '600',
    },
    buttonContainer:{ position: 'absolute', width: '100%', bottom: 30 },
    buttonView: {
        backgroundColor: "#fff",
        height: 50,
        marginHorizontal: '7%',
        borderRadius: 15
    },
    buttonTextLogin: {
        color: Theme.white,
        fontWeight: '600'
    },
    buttonContainerLogin: {
        backgroundColor: Theme.appRed,
        height: 50,
        borderRadius: 15,
        width: '92%',
        alignSelf: 'center',
    }
})
export default styles;