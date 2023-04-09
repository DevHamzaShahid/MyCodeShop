import { StyleSheet } from "react-native"
import { Theme } from "../../utils/theme"
export const styles = StyleSheet.create({
    main_container:{
        alignItems: 'center', flex: 1 
    },
    main_text1:{
        fontWeight: 'bold', fontSize: 16, marginTop: 30 
    },
    main_text2:{
        marginTop: 20
    }
    ,
    button_container: { position: 'absolute', bottom: 5, backgroundColor: 'red', width: "95%", height: 40, alignSelf: 'center', alignItems: 'center', justifyContent: 'center' },
    button_text: {
        color: Theme.white
    },
    box_mainContainer:{
        flex: 1, flexDirection: 'row', flexWrap: 'wrap', padding: 10
    }
    ,
    box_container: {
        flex: 1, alignItems: 'center', backgroundColor: 'white', borderRadius: 10, padding: 10
    },
    box_image: {
        height: 60, width: 60
    },
    box_text:{
        marginTop: 10, fontWeight: 'bold', fontSize: 16 
    }
})