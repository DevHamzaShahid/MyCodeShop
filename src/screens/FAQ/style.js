import { StyleSheet } from 'react-native';
import { Theme } from '../../utils/theme';
const styles = StyleSheet.create({
    container: { flex:1 ,paddingVertical: 30 ,backgroundColor:'#F7F7F7'},
    listUpperContainer:{ width: '95%', paddingHorizontal: 10, height: 60, alignSelf: 'center', marginTop: 10, backgroundColor: '#fff', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' },
    listText:{ fontSize: 16, fontWeight: '600',color:Theme.black },
    modalContainer:{ width: '95%', paddingVertical: 10, paddingHorizontal: 10, alignSelf: 'center', backgroundColor: '#fff', flexDirection: 'row' },
    
    Dropdown1Style:{
        width:"90%", 
        alignSelf:'center',
        position: 'absolute', top: 0, left: 0, zIndex: 1
    }
    ,
    Dropdown2Style:{
        width:"90%", 
        alignSelf:'center',
        position: 'absolute', top: 50, left: 0, zIndex: 2
    }
});
export default styles;
