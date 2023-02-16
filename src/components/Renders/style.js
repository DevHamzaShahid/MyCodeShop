import { Theme } from '../../utils/theme';
import { StyleSheet } from 'react-native';
import { height_screen, width_screen } from '../../utils/dimensions';

const styles = StyleSheet.create({
    product_container: {
        flexDirection: 'row',
        marginStart: 8,
        marginEnd: 8,
        marginTop: 8,
    },
    product_row: {
        backgroundColor: '#e6e6e6',
        flex: 1,
        justifyContent: 'center',
        marginStart: 10,
        paddingStart: 3
    },
    product_text: {
        color: Theme.black,
        fontWeight: '700'
    },
    transaction_container: {
        marginStart: 8,
        marginEnd: 8,
    },
    transaction_inner: { flexDirection: 'row', marginVertical: 8 },
    point_text: {
        color: Theme.black,
        fontWeight: '700'
    },
    point_date: {
        color: '#c2c2c2',
        marginStart: 8,
        fontSize: 12,
        marginTop: 8,
    },
    point_row: {
        backgroundColor: '#e6e6e6',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginStart: 10,
        paddingStart: 3
    },
    business_card: {
        flexDirection: 'row',
        marginTop: 8,
        alignItems: 'center',
        paddingHorizontal: width_screen * 0.2,
        backgroundColor: '#e6e6e6'
    },
    business_text: {
        color: Theme.black,
        fontWeight: '700',
        fontSize: 19,
        paddingStart: 10
    },
    // business_row: {
    //     justifyContent: 'center',
    //     backgroundColor: 'red'
    // }
});
export default styles;
