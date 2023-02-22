import { StyleSheet } from 'react-native';
import { Theme } from '../../utils/theme';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.white,
    },
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
