import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { DrawerHeader } from '../../components/Header';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.9;
const data = [
    {
        thumb: 'https://example.com/thumb1.png',
        Id: '1234',
        offertype: 'Discount',
        productname: 'Product 1',
        date: '2022-04-09',
    },
    {
        thumb: 'https://example.com/thumb2.png',
        Id: '5678',
        offertype: 'Coupon',
        productname: 'Product 2',
        date: '2022-04-08',
    },
    {
        thumb: 'https://example.com/thumb3.png',
        Id: '9012',
        offertype: 'Deal',
        productname: 'Product 3',
        date: '2022-04-07',
    },
];

const Transaction = ({ navigation }) => {
    const renderTransactionItem = (item) => {
        return (
            <TouchableOpacity style={styles.itemContainer}>
                <View style={styles.column}>
                    <Image style={styles.thumb} source={require('../../assets/coin.png')} />
                </View>
                <View style={styles.column}>
                    <Text style={styles.id}>{item.Id}</Text>
                </View>
                <View style={styles.column}>
                    <Text style={styles.offertype}>{item.offertype}</Text>
                </View>
                <View style={styles.column}>
                    <Text style={styles.productname}>{item.productname}</Text>
                </View>
                <View style={styles.column}>
                    <Text style={styles.date}>{item.date}</Text>
                </View>
                <View style={[styles.column, styles.downloadButtonContainer]}>
                    <TouchableOpacity style={styles.downloadButton}>
                        <Text style={styles.downloadButtonText}>Download</Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <>
            <DrawerHeader navigation={navigation} name={'Transactions'} />
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <View style={[styles.column, styles.headerColumn]}>
                        <Text style={styles.headerText}>Thumb</Text>
                    </View>
                    <View style={[styles.column, styles.headerColumn]}>
                        <Text style={styles.headerText}>Id</Text>
                    </View>
                    <View style={[styles.column, styles.headerColumn]}>
                        <Text style={styles.headerText}>Offer Type</Text>
                    </View>
                    <View style={[styles.column, styles.headerColumn]}>
                        <Text style={styles.headerText}>Product Name</Text>
                    </View>
                    <View style={[styles.column, styles.headerColumn]}>
                        <Text style={styles.headerText}>Date</Text>
                    </View>
                    <View style={[styles.column, styles.headerColumn]}>
                        <Text style={styles.headerText}>Download</Text>
                    </View>
                </View>
                {data.map((item) => renderTransactionItem(item))}
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop:20
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: ITEM_WIDTH,
        paddingVertical: 16,
        paddingHorizontal: 12,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#999',
        backgroundColor: '#DDD',
    },
    headerColumn: {
        borderBottomWidth: 0,
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 9,
        fontWeight: 'bold',
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: ITEM_WIDTH,
        paddingVertical: 16,
        paddingHorizontal: 12,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#999',
    },
    column: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    thumb: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    id: {
        fontSize: 10,
    },
    offertype: {
        fontSize: 10,
    },
    productname: {
        fontSize: 10,
        textAlign: 'center',
    },
    date: {
        fontSize: 8,
    },
    downloadButtonContainer: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    downloadButton: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        backgroundColor: '#369',
        borderRadius: 4,
    },
    downloadButtonText: {
        color: '#FFF',
        fontSize: 8,
    },
});

export default Transaction;