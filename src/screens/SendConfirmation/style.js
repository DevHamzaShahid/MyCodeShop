import { StyleSheet } from 'react-native';
import { Theme } from '../../utils/theme';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.white,
    },
    buttonContainerLogin: {
        borderRadius: 5,
        backgroundColor: Theme.dark_orange,
        marginTop: '5%',

    },
    buttonView: {
        padding: 10,
        bottom: 0,
        width: '100%',
        position: 'absolute',
        alignItems: 'center',
    },
    buttonTextLogin: {
        color: Theme.white,
        fontSize: 14,
        lineHeight: 18,
        fontWeight: '600',
        textTransform: 'capitalize',
    },
    coin_img: {
        width: 55,
        height: 55,
        marginBottom: 15
    },
    black_coin: {
        width: 55,
        height: 55,
        backgroundColor: Theme.black,
        borderRadius: 55 / 2,

    }
});
export default styles;
