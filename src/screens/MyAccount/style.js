import { StyleSheet } from 'react-native';
import { Theme } from '../../utils/theme';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.white,
    },
    profile_logo:{ height: 100, width: 100, borderRadius: 50, alignItems: 'center', justifyContent: 'center', borderWidth: 5, borderBottomColor: 'red' },
    text1:{fontWeight:'bold',marginTop:5,fontSize:20},
    text2:{fontSize:18,color:'#F4A424',fontWeight:'bold'},
    description:{marginTop:10,width:'80%',textAlign:'justify'},
    fieldsView: {
        alignItems: 'center',
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: Theme.grey,
        borderRadius:5,
        height: 40,
    },
    inputTextStyle: {
        fontSize: 16,
        lineHeight: 18,
        color: Theme.black,
        // fontFamily: ROBOTO_REGULAR,
    },
    labelContainer: {
        width: '80%',
    },
    bottom_link:{fontWeight:'bold',fontSize:16,marginVertical:5}
});
export default styles;
